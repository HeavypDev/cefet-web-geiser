var express = require('express'),
    app = express();
var fs = require('fs')
var path = require('path')
var _ = require('underscore'); //para jogosporjogador
	
// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// dica: 3-4 linhas de código (você deve usar o módulo de filesystem (fs))
var db = {
};


////Carregar jogadores na memoria
fs.readFile('server/data/jogadores.json', function(error,content){
	if (error){
		console.log('\n'+error);
	}
	else{
		content = JSON.parse(content);
		//rota para view index
		//console.log('-> '+JSON.stringify(content));
		app.get('/', function(request, response){
		response.render('index',content);
		});
	}
}
);


////Carregar jogos por jogador
fs.readFile('server/data/jogosPorJogador.json', function(error,content){
	if (error){
		console.log('\n'+error);
	}
	else{
		content = JSON.parse(content);
		//rota para view index
		console.log('-> '+JSON.stringify(content));
		app.get('/jogador/:numero_identificador/', function(request, response){
		response.render('jogador',content);
		});
	}
}
);


// configurar qual templating engine usar. Sugestão: hbs (handlebars)

////usando handle bars
app.set('view engine','hbs')          
////especificando a pasta das views
app.set('views','server/views')	

// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json


// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter umas 15 linhas de código


// configurar para servir os arquivos estáticos da pasta "client"
// dica: 1 linha de código
                         											
app.use(express.static('client'));          


// abrir servidor
// dica: 1-3 linhas de código
var server = app.listen(8080, function () {
  console.log('Servidor escutando em: http://localhost:8080');
});

//
var jogosDesteJogador = _.find(todos, function(el) {
  return el.steamid === request.params.id;
});
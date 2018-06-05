var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require('fs');

function iniciar() {
  function onRequest(request, response) {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');
    if (request.method === 'OPTIONS') {
      response.writeHead(200);
      response.end();
      return;
    }

    var sortida;
    var pathname = url.parse(request.url).pathname;
    var consulta = url.parse(request.url, true).query;
    var res = parseInt(consulta['res']);

    if (pathname == '/songs/11.mp3') {
      fs.readFile('./assets/songs/11.mp3', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'audio/mpeg'
        });

        response.write(sortida);
        response.end();
      });
    } else if (pathname == '/songs/12.mp3') {

      fs.readFile('./assets/songs/12.mp3', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'audio/mpeg'
        });

        response.write(sortida);
        response.end();
      });
    } else if (pathname == '/songs/13.mp3') {

      fs.readFile('./assets/songs/13.mp3', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'audio/mpeg'
        });

        response.write(sortida);
        response.end();
      });
    } else if (pathname == '/songs/14.mp3') {

      fs.readFile('./assets/songs/14.mp3', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'audio/mpeg'
        });

        response.write(sortida);
        response.end();
      });
    } else if (pathname == '/songs/15.mp3') {

      fs.readFile('./assets/songs/15.mp3', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'audio/mpeg'
        });

        response.write(sortida);
        response.end();
      });
    } else if (pathname == '/songs/16.mp3') {

      fs.readFile('./assets/songs/16.mp3', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'audio/mpeg'
        });

        response.write(sortida);
        response.end();
      });
    } else if (pathname == '/songs/17.mp3') {

      fs.readFile('./assets/songs/17.mp3', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'audio/mpeg'
        });

        response.write(sortida);
        response.end();
      });
    } else if (pathname == '/songs/18.mp3') {

      fs.readFile('./assets/songs/18.mp3', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'audio/mpeg'
        });

        response.write(sortida);
        response.end();
      });
    } else if (pathname == '/songs/19.mp3') {

      fs.readFile('./assets/songs/19.mp3', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'audio/mpeg'
        });

        response.write(sortida);
        response.end();
      });
    } else if (pathname == '/songs/20.mp3') {

      fs.readFile('./assets/songs/20.mp3', function (err, sortida) {
        response.writeHead(200, {
          'Content-Type': 'audio/mpeg'
        });

        response.write(sortida);
        response.end();
      });

    } else {
      response.writeHead(404, {
        "Content-Type": "text/html; charset=utf-8"
      });
      sortida = "404 NOT FOUND";
      response.write(sortida);
      response.end();
    }
  }
  http.createServer(onRequest).listen(8888);
  console.log("Servidor iniciat.");
}
exports.iniciar = iniciar;

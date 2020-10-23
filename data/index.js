const http = require('http');
const fs = require('fs');
const { sendNorthcoders, helloApi } = require('./controllers');

const server = http.createServer(function (req, res) {
    const {url, method} = req;

    if (url === '/api/northcoders') {
        if( method === 'GET'){
        sendNorthcoders(req, res);                 
        }; 
    ;}
    
    if (url === '/api') {
        if( method === 'GET'){
        helloApi(req, res);
        };
    }
});
   

server.listen(8080);


const http = require('http');
const fs = require('fs');
const { sendNorthcoders, helloApi } = require('./controllers');





const ncObj = require('./JSONdata/northcoders.json');
const usernames = [];

for(const person of ncObj) {
    usernames.push(person.username);
}


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

    for(let username of usernames) {
        if (url === `/api/northcoders/${username}`) {
            if(method === 'GET') {
        }
    }
    }
});
   


server.listen(8080);


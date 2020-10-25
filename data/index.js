const http = require('http');
const fs = require('fs');
const { sendNorthcoders, helloApi, sendOneUser } = require('./controllers');
const ncObj = require('./JSONdata/northcoders.json');
const { fetchUser } = require('./models');

const users = [];
for(let person of ncObj) {
    users.push(person.username);
}


const server = http.createServer(function (req, res) {
    const {url, method} = req;

    if (url === '/api') {
        if(method === 'GET'){
        helloApi(req, res);
        };
    }
    if (url === '/api/northcoders') {
        if(method === 'GET'){
        sendNorthcoders(req, res);                 
        }; 
    ;}
    
    let usernameURL = url.substring(url.lastIndexOf('/')+1);

    if (users.includes(usernameURL)) {
        if(method === 'GET'){
        sendOneUser(usernameURL,req, res)
        }
    }



});
   

fetchUser();
server.listen(8080);


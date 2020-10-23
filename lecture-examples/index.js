const http = require('http');
const fs = require('fs');
const {sendCats, addCat} = require('./controllers');


const server = http.createServer(function (request, response) {
  const { url, method } = request; //object destructuring (ES6 JS)
  if (url === '/cats') {
    if (method === 'GET') {
      sendCats(request, response);
    }
    if (method === 'POST') {
      let body = '';
      request.on('data', function (data) {
        body += data;
      });
      request.on('end', function () {
        request.body = body;
        addCat(request, response)
      })
  
    }
  } else {
    response.statusCode = 404;
    response.write('not found');
    response.end();
  }
});

server.listen(8080, function () {
  console.log('listening on Port 8080, come at me');
});

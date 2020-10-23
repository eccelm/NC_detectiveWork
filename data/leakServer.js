const http = require('http');
const fs = require('fs');

// Using Node's http module create a web server that responds with 'hello' when it receives a GET request on the path /api
// Add a GET /api/northcoders endpoint that serves a JSON object of all the northcoders which shows their name, job details, image and username.
let people;

const server = http.createServer(function (request, response) {
    console.log(request);
    response.setHeader('Content-Type', 'application/json')
    response.statusCode =200;
    response.write('hello');

    fs.readFile('./northcoders.json', function (err, data) {
        if (err) console.log('cannot read file', err);
        else {

        response.on(data, (packet) => {
            const stringPacket = packet.toString();
            people = stringPacket;
            console.log(people)
    });
           // console.log(data)
            
        }
    })

    response.end();
});

// What happens when this is in the browser: localhost:8080 in chrome //
server.listen(8080);
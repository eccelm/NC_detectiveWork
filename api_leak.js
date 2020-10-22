const https = require('https');
const fs = require('fs');

function getLeak() {
    const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: '/api/confidential',
        method: 'GET',
    };

    let body = '';

    const request = https.request(options, (clue) => {
        console.log('Status code: ', clue.statusCode);
        clue.on('data', (packet) => {
            const stringPacket = packet.toString();
            body += stringPacket;
            // console.log(body);
            
        }); 
        clue.on('end', () => {
            // parse the JSON string (body) back into a usable object
        const parsedBody = JSON.parse(body);
           console.log(parsedBody);

            fs.writeFile('./bodyText.md', parsedBody.crypticString, function callback(err) {
                if (err) callback(err);
                console.log('File written.')
            }) 
            }) 
        });
    
    request.end();
};

getLeak();



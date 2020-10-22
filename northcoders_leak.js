const https = require('https');
const fs = require('fs');

// https://nc-leaks.herokuapp.com/api/people.

function getNorthcoders () {

    const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: '/api/people',
        method: 'GET',
    };

    let people;

    const request = https.request(options, (response) => {
        console.log('Status code: ', response.statusCode);

        response.on('data', (packet) => {
            const stringPacket = packet.toString();
            people = stringPacket;
    });

    response.on('end', () => {
        // parse the JSON string (people) back into a usable object
    const parsedPeople = JSON.parse(people);

     const peopleArray = parsedPeople['people'];
     
     const northcoders = peopleArray.filter(person => person.job.workplace === 'northcoders');
     console.log(northcoders)
     
        fs.writeFile('./northcoders.js', JSON.stringify(northcoders), function callback(err) {
            if (err) callback(err);
            console.log('File written.')
        }) 
        }) 

});

request.end();
}

getNorthcoders();


const northcoders = require('./northcoders.js');
const https = require('https');
const fs = require('fs');

// https://nc-leaks.herokuapp.com/api/people/:username/interests.

let usernames = northcoders.map(person => person.username);
let interests = [];


function getInterests(username) {
    
    const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: `/api/people/${username}/interests`,
        method: 'GET',
    };

    const request = https.request(options, (response) => {
        console.log('Status code: ', response.statusCode);
        response.on('data', (packet) => {
            const stringPacket = packet.toString();
            interests.push(stringPacket);
        })
    
        response.on('end', () => {
            console.log(interests)
        })
    })
    
    request.end();
}

for(let user of usernames) {
    getInterests(user);
}

// The above console.logs every time we add a user's interests, we just want to get the final: 
/*
- What we think the final should look like: 
[
  '{"person":{"interests":["Theatre","Reading","Scrabble","pretending I know more about JavaScript than I actually do"],"username":"MissMallion"}}',
  '{"person":{"interests":["tudor anthems","smashing laptops","typing loudly","coding","annoying my colleagues","dancing queen"],"username":"dedekind561"}}',
  '{"person":{"interests":["comfort eating","code","needlessly quoting poetry","the rm -rf command","armchair activism"],"username":"icellusedkars"}}',
  '{"person":{"interests":["Climbing","Skating","4 hour youtube holes about future African engineering projects"],"username":"tomosim"}}',
  '{"status":404,"msg":"No such person"}',
  '{"person":{"interests":["food","drink","code","marquee","fantasy football","actual football"],"username":"rogersop"}}',
  '{"person":{"interests":["contemporary metaphysics","cosmology","writing semi-archaic JavaScript","hiking","painting watercolours"],"username":"RuthYMNg"}}',
  '{"person":{"interests":["reading","fussing the cat","gaming","coding","staring blanky in space"],"username":"popcorn"}}',
  '{"person":{"interests":["coding","gaming","double lunches","brazilian jiu jitsu","living of past glory"],"username":"P-Copley"}}',
  '{"status":404,"msg":"No such person"}',
  '{"status":404,"msg":"No such person"}',
  '{"person":{"interests":["Reading","squealing when doggos walk past","code","whistling harry potter badly"],"username":"anatdean"}}',
  '{"person":{"interests":["live music","cooking","travelling","annoying my colleagues"],"username":"ziziou91"}}'
]

*/
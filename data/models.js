const fs = require('fs')
const ncObj = require('./JSONdata/northcoders.json');

// Models
const fetchNorthcoders = (cb) => {
    fs.readFile('JSONdata/northcoders.json', 'utf8', (err, data) => {
        if (err) cb(err);
        else {
         cb(null, data)
        }
    })
}

const fetchUser = (user, cb) => {
    
    fs.readFile('JSONdata/northcoders.json', 'utf8', (err, data) => {
        if(err) cb(err);
        else {
            
            data = ncObj.filter(person => person.username === user)
            cb(null, data);
            }
        })
    } 


module.exports = {fetchNorthcoders, fetchUser };
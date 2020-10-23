const fs = require('fs')

// Models
const fetchNorthcoders = (cb) => {
    fs.readFile('JSONdata/northcoders.json', 'utf8' ,function (err, data) {
        if (err) cb(err);
        else {
         cb(null, data)
        }
    })
}

module.exports = {fetchNorthcoders };
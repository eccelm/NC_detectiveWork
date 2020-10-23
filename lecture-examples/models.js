const fs = require('fs');

const readCats = (cb) => {
  fs.readFile('./cats.json', 'utf8', function (err, cats) {
    if(err) console.log('cannot read file:', err);
    else {
      cb(null, cats);
    }
  })
}

function writeCat (cat, cb) {
  readCats(function (err, data) {
    const cats = JSON.parse(data);
    cats.push(cat);
    fs.writeFile('./cats.json', JSON.stringify(cats), function (err) {
      if(err) cb(err)
      else cb(null, cat);
    })
  })
}


module.exports = {readCats, writeCat}
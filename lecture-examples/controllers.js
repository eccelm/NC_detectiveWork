const {readCats, writeCat} = require('./models');

const sendCats = (req, res) => {
  readCats((err, cats) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(cats);
    res.end();
  })
}

const addCat = (req, res) => {
  const newCat = JSON.parse(req.body);
  writeCat(newCat, (err, cat) => {
    res.statusCode = 201;
    res.write(JSON.stringify({ cat: cat }));
    res.end();
  })
}

module.exports = {sendCats, addCat}
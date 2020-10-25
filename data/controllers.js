
const { fetchNorthcoders, fetchUser } = require('./models.js')

const sendNorthcoders = (req, res) => {
    fetchNorthcoders((err, data) => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
       res.write(data);
       res.end();
    })
}

const sendOneUser = (req, res) => {
    fetchUser((err,data) => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
       res.write(data);
       res.end();
    })
}

const helloApi = (req, res) => {
    res.statusCode = 200;
    res.write('Hello API');
    res.end();
}

module.exports = {sendNorthcoders, sendOneUser, helloApi};
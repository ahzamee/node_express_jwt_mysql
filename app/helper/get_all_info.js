const db  = require('../config/dbConnection');
const { decode } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

exports.get_all_data = (data, result) => {
    if(
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ){
        return result({
            message: "Please provide the token",
        });
    }

    const theToken = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(theToken, 'the-super-strong-secrect');

    db.query('SELECT * FROM users where id=?', decoded.id, function (error, results, fields) {
        if (error) throw error;
        return result({ error: false, data: results[0], message: 'Fetch Successfully.' });
    });
}
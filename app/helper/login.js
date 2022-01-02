const db = require('../config/dbConnection')
const bcrypt = require("bcryptjs");

exports.login = (data, result) => {
    db.query(
        `SELECT * FROM users WHERE phone = ${db.escape(req.body.phone)};`,
        (err, result) => {
          // user does not exists
          if (err) {
            throw err;
            return result({
                message: err
            });
          }
          if (!result.length) {
            return result({
              message: 'Email or password is incorrect!'
            });
          }
          // check password
          bcrypt.compare(
            req.body.password,
            result[0]['password'],
            (bErr, bResult) => {
              // wrong password
              if (bErr) {
                throw bErr;
                return res.status(401).send({
                    message: 'Email or password is incorrect!'
                });
              }
              if (bResult) {
                const token = jwt.sign({id:result[0].id},'the-super-strong-secrect',{ expiresIn: '1h' });
                db.query(
                  `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
                );
                result({
                    message: 'Logged in!',
                  token,
                  user: result[0]
                });
              }
              return result({
                message: 'Username or password is incorrect!'
              });
            }
          );
        }
    );
}
const db = require('../config/dbConnection')
const bcrypt = require("bcryptjs");

exports.register = (data, result) => {
    db.query(
        `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(
          req.body.email
        )});`,
        (err, result) => {
          if (result.length) {
            return result({
              msg: 'This user is already in use!'
            });
          } else {
            // username is available
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              if (err) {
                return result({
                  msg: err
                });
              } else {
                // has hashed pw => add to database
                db.query(
                  `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', ${db.escape(
                    req.body.email
                  )}, ${db.escape(hash)})`,
                  (err, result) => {
                    if (err) {
                      throw err;
                      return result({
                        msg: err
                      });
                    }
                    return result({
                      msg: 'The user has been registerd with us!'
                    });
                  }
                );
              }
            });
          }
        }
    );
}
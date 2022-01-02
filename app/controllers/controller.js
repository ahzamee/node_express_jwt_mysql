const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const register = require('../helper/register');
const login = require('../helper/login');
const get_all_info = require('../helper/get_all_info')

const user_register = (req, res) => {
    register.register(
      req.body,
      (err, data) => {
        if(err){
          return res.status(500).send(err)
        }
        return res.status(200).send(data)
      }
    )
}

const user_login =(req, res) => {
    login.register(
      req.body,
      (err, result) => {
        if(err){
          return res.status(500).send(err)
        }
        return res.status(200).send(data)
      }
    )
}

 const user_get_all_info = (req, res, next) => {
  get_all_info.register(
    req.body,
    (err, result) => {
      if(err){
        return res.status(500).send(err)
      }
      return res.status(200).send(data)
    }
  )
}

module.exports = {
  user_login,
  user_register,
  user_get_all_info
}
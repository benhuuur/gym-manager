const User = require("../models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserController {
  static async login(req, res) {
    try {
      var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
      const decryptd = bytes.toString(CryptoJS.enc.Utf8);
      const json = JSON.parse(decryptd);
      const { login } = json;
      // const { login } = req.body;

      if (!login)
        return res.status(422).json({ message: "O login é obrigatório" });

      const logged = await User.findOne({ login: login });
      if (!logged) return res.status(422).json({ message: "Usuário inválido" });
      return res.status(200).send({ message: "usuário encontrado" });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
  static async password(req, res) {
    try {
      var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
      const decryptd = bytes.toString(CryptoJS.enc.Utf8);
      const json = JSON.parse(decryptd);
      const { login, password } = json;
      // const { password, login } = req.body;

      if (!password)
        return res.status(422).json({ message: "A senha é obrigatória" });

      const logged = await User.findOne({ login: login, password: password });
      if (!logged)
        return res
          .status(422)
          .json({ message: "Usuário e/ou senha inválidos" });
      const isPerson = logged.gym == null ? true : false;
      const id = isPerson ? logged.person._id : logged.gym._id;

      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: id,
          isPerson: isPerson,
        },
        secret,
        {
          expiresIn: "2 days",
        }
      );
      console.log(token);

      return res.status(200).send({ message: "usuário encontrado", token });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Algo deu Errado", data: error.message });
    }
  }
  static async create(person, gym) {
    var login;
    var password;
    try {
      if (person) {
        login = person.cpf;
        password = person.birth.getFullYear().toString();
      } else if (gym) {
        login = gym.name;
        password = "1234";
      }

      const passwordCrypt = CryptoJS.AES.encrypt(
        password,
        process.env.SECRET
      ).toString();
      

      const user = {
        login,
        password: passwordCrypt,
        person,
        gym,
      };
      await User.create(user);
      return true;
    } catch (error) {
      return false;
    }
  }

  static async delete(id) {
    try {
      User.deleteOne({ "person._id": id });
      return true;
    } catch (error) {
      return false;
    }
  }

  static async getAll() {
    try {
      const getAllData = await User.find();
      return getAllData;
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(_id) {
    try {
      const user = await User.findById(_id);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;

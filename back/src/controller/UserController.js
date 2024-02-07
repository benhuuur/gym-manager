const User = require("../models/user");
const CryptoJS = require("crypto-js");
require("dotenv").config();
class UserController {
  static async login(req, res) {
    try {
      // var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
      // const decryptd = bytes.toString(CryptoJS.enc.Utf8);
      // const json = JSON.parse(decryptd);
      // const { login } = json;
      const { login } = req.body;

      if (!login)
        return res.status(422).json({ message: "O login é obrigatório" });

      const logged = await User.findOne({ login: login });
      if (!logged) return res.status(422).json({ message: "Usuário inválido" });
      return res.status(200).send({ message: "usuário encontrado", login });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
  static async password(req, res) {
    try {
      // var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
      // const decryptd = bytes.toString(CryptoJS.enc.Utf8);
      // const json = JSON.parse(decryptd);
      // const { password, login } = json;
      const { password, login } = req.body;

      if (!password)
        return res.status(422).json({ message: "A senha é obrigatória" });

      const logged = await User.findOne({ login: login, password: password });
      if (!logged)
        return res
          .status(422)
          .json({ message: "Usuário e/ou senha inválidos" });
      return res.status(200).send({ message: "usuário encontrado", logged });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
  static async create(person, gym) {
    var login;
    var password;
    try {
      if (person) {
        login = person.cpf;
        password = person.birth.getYear().toString();
      }
      if (gym) {
        login = gym.name;
        password = "1234";
      }

      const user = {
        login,
        password,
        person,
        gym,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        removedAt: null,
      };
      await User.create(user);
      return true;
    } catch (error) {
      return false;
    }
  }

  static async delete(id) {
    User.deleteOne({ "person._id": id });
  }
}

module.exports = UserController;

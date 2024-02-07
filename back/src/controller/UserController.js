const User = require("../models/user");
const CryptoJS = require("crypto-js");
require("dotenv").config();

class UserController {

  static async login(req, res) {
    // var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
    // const decryptd = bytes.toString(CryptoJS.enc.Utf8);
    // const json = JSON.parse(decryptd);
    // const { login } = json;
    const { login } = req.body;

    if (!login)
      return res.status(422).json({ message: "O login é obrigatório" });

    const logged = await User.findOne({ login: login });
    if (!logged) return res.status(422).json({ message: "Usuário inválido" });

    var bytes = CryptoJS.AES.decrypt(user.login, process.env.SECRET);
    const decryptd2 = bytes.toString(CryptoJS.enc.Utf8);
    const json2 = JSON.parse(decryptd2);
    
    if (json2 != login)
    return res.status(422).send({ message: "login inválido" })
  
  try {
    return res
    .status(200)
    .send({ message: "usuário encontrado", data: { login } });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
}
static async password(req, res) {
    try {
    var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
    const decryptd = bytes.toString(CryptoJS.enc.Utf8);
    const json = JSON.parse(decryptd);
    const { password, login } = json;
    // const { password, login } = req.body;

    if (!password)
      return res.status(422).json({ message: "A senha é obrigatória" });

    const logged = await User.findOne({ login: login, password: password });
    if (!logged)
      return res
        .status(422)
        .json({ message: "Usuário e/ou senha inválidos" });

    // var bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
    // const decryptd2 = bytes.toString(CryptoJS.enc.Utf8);
    // const json2 = JSON.parse(decryptd2);

    // if(json2 != password)
    //   return res.satus(422).send({ message : "Senha inválida" })

      // const secret = process.env.SECRET;
      // const token = jwt.sign(
      //   {
      //     id: user._id,
      //   },
      //   secret, 
      //   {
      //     expiresIn: '2-Days'
      //   }
      // );

      return res
        .status(200)
        .send({ message: "passou", data: data });
    } catch (error) {
      return res.status(500).send({ message: "Algo deu Errado :/", data: error.message });
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

  static async getAll()
  {
    try {
      const getAllData = await User.find();
      return getAllData;
    }      
    catch(error){
      return res.status(404).send({ error: "Tabela não encontrada"})
    }
  }

  static async getById(_id) {
    try {
      const user = await User.findById(_id);
      return user;
    }
    catch(error){
      return res.status(404).send({ error: "Usuário não encontrado" });
    }
  }
}

module.exports = UserController;

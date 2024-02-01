const Login = require("../models/login");

class LoginController {
  static async username(req, res) {
    try {
      const { login } = req.body;

      if (!login)
        return res.status(422).json({ message: "O login é obrigatório" });

      const logged = await Login.findOne({ login: login });
      if (!logged) return res.status(422).json({ message: "Usuário inválido" });
      return res
        .status(200)
        .send({ message: "usuário encontrado", data: { login } });
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

      const logged = await Login.findOne({ login: login, password: password });
      if (!logged)
        return res
          .status(422)
          .json({ message: "Usuário e/ou senha inválidos" });
      return res
        .status(200)
        .send({ message: "usuário encontrado", data: { logged } });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
  static async create(user){

  }
}

module.exports = LoginController;

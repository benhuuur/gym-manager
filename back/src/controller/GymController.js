const { Gym } = require("../models/gym");
const UserController = require("./UserController");
const CryptoJS = require('crypto-js');


class GymController {
  static async create(req, res) {
    var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
    const decryptd = bytes.toString(CryptoJS.enc.Utf8);
    const json = JSON.parse(decryptd);
    const { name, equipments } = json;
    // const { name, equipments } = req.body;
    if (!name)
      return res.status(400).json({ message: "O nome é obrigatório" });
    if (!equipments)
      return res
        .status(400)
        .json({ message: "A lista de aparelhos é obrigatório" });
    var gym = {
      name,
      equipments,
    };
    if (await UserController.create(null, gym)) {
      Gym.create(gym);
    } else {
      throw "Falha ao cadastrar usuario";
    }

    var bytes = CryptoJS.AES.decrypt(user.gym, process.env.SECRET);
    const decryptd2 = bytes.toString(CryptoJS.enc.Utf8);
    const json2 = JSON.parse(decryptd2);

    if (json2 != gym)
      return res.status(422).send({ message: "login inválido" })

    try {
      return res
        .status(201)
        .send({ message: "Academia cadastrada com sucesso" });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
}
module.exports = GymController;

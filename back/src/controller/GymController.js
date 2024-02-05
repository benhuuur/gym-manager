const { Gym } = require("../models/gym");
const UserController = require("./UserController");
class GymController {
  static async create(req, res) {
    try {
      // var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
      // const decryptd = bytes.toString(CryptoJS.enc.Utf8);
      // const json = JSON.parse(decryptd);
      // const { name, equipments } = json;
      const { name, equipments } = req.body;
      if (!name)
        return res.status(400).json({ message: "O nome é obrigatório" });
      if (!equipments)
        return res
          .status(400)
          .json({ message: "A lsita de aparelhos é obrigatório" });
      var gym = {
        name,
        equipments,
      };
      if (await UserController.create(null, gym)) {
        Gym.create(gym);
        return res
          .status(201)
          .send({ message: "Academia cadastrada com sucesso" });
      } else {
        throw "Falha ao cadastrar usuario";
      }
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
}

module.exports = GymController;

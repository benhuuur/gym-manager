const { Person } = require("../models/persons");
const { Gym } = require("../models/gym");
const UserController = require("../controller/UserController");

class PersonController {
  static async create(req, res) {
    try {
      var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
      const decryptd = bytes.toString(CryptoJS.enc.Utf8);
      const json = JSON.parse(decryptd);
      const { name, cpf, birth, gym_id } = json;
      // const { name, cpf, birth, gym_id } = req.body;

      if (!name)
        return res.status(400).json({ message: "O nome é obrigatório" });
      if (!cpf) return res.status(400).json({ message: "O cpf é obrigatório" });
      if (!birth)
        return res
          .status(400)
          .json({ message: "A data de nascimento é obrigatória" });
      if (!gym_id)
        return res
          .status(400)
          .json({ message: "A academia pertencente é obrigatória" });

      const exist = await Person.findOne({
        cpf: cpf,
      });
      if (exist)
        return res.status(422).json({ message: "cpf inválido, ja cadastrado" });

      const gym = Gym.findOne({ _id: gym_id });
      console.log(gym);
      if (gym) return res.status(422).json({ message: "Academia inválida" });

      const person = new Person({
        name,
        cpf,
        birth,
        gym,
        height: null,
        weight: null,
        objective: null,
        experience: null,
        frequency: null,
        sheet: null,
        trainingTime: null,
        isFirst: false,
      });
      if (await UserController.create(person, null)) {
        Person.create(person);
        return res
          .status(201)
          .send({ message: "Usuário cadastrado com sucesso" });
      } else {
        throw "Falha ao cadastrar usuario";
      }
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.body;
      UserController.delete(id);
      Person.findByIdAndDelete(id);
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  static async update(req, res) {
    try {
      const {
        id,
        height,
        weight,
        objective,
        experience,
        frequency,
        trainingTime,
      } = req.body;

      if (!id) return res.status(400).json({ message: "O id é obrigatório" });
      const exist = await Person.findOne({ _id: id });
      if (!exist) res.status(400).json({ message: "Usuário não encontrado" });
      if (!height)
        return res.status(400).json({ message: "A altura é obrigatória" });
      if (!weight)
        return res.status(400).json({ message: "O peso é obrigatório" });
      if (!objective)
        return res.status(400).json({ message: "O objetivo é obrigatório" });
      if (!experience)
        return res.status(400).json({ message: "A experiência é obrigatória" });
      if (!frequency)
        return res.status(400).json({ message: "A frequencia é obrigatória" });
      if (!trainingTime)
        return res
          .status(400)
          .json({ message: "O tempo para treino é obrigatório" });

      //requisição python

      Person.findByIdAndUpdate(id, {
        height: height,
        weight: weight,
        objective: objective,
        experience: experience,
        frequency: frequency,
        // sheet: python,
        trainingTime: trainingTime,
        isFirst: false,
      });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
}

module.exports = PersonController;

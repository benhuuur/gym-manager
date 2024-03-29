const { Person, personSchema } = require("../models/people");
const { Gym } = require("../models/gym");
const UserController = require("../controller/UserController");
const CryptoJS = require("crypto-js");
const jwtOperations = require("./jwtOperations");

class PersonController {
  static async create(req, res) {
    try {
      var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
      const decryptd = bytes.toString(CryptoJS.enc.Utf8);
      const json = JSON.parse(decryptd);
      const { name, cpf, birth, token } = json;

      if (!name)
        return res.status(400).json({ message: "O nome é obrigatório" });
      if (!cpf) return res.status(400).json({ message: "O cpf é obrigatório" });
      if (!birth)
        return res
          .status(400)
          .json({ message: "A data de nascimento é obrigatória" });
      if (!token)
        return res
          .status(400)
          .json({ message: "Envie a credencial de acesso" });

      const decode = jwtOperations.decodeJWT(token);
      const isValid = jwtOperations.verifyJWT(token);
      if (!isValid && !decode.isPerson)
        return res
          .status(400)
          .json({ message: "Envie uma credencial de acesso válida" });

      const exist = await Person.findOne({
        cpf: cpf,
      });

      if (exist)
        return res.status(422).json({ message: "cpf inválido, ja cadastrado" });

      const gym_id = decode.id;
      const gym = await Gym.findById(gym_id);

      if (!gym) return res.status(422).json({ message: "Academia inválida" });

      const person = new Person({
        name,
        cpf,
        birth,
        gym,
        height: 0,
        weight: 0,
        objective: "",
        experience: "",
        frequency: 0,
        sheet: [""],
        trainingTime: 0,
        isFirst: true,
      });

      if (await UserController.create(person, null)) {
        await Person.create(person);
        return res
          .status(201)
          .send({ message: "Usuário cadastrado com sucesso" });
      }
      throw error;
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const { token } = req.body;
      const decode = jwtOperations.decodeJWT(token);
      const isValid = jwtOperations.verifyJWT(token);
      console.log(token);
      if (!isValid && !decode.isPerson)
        return res
          .status(400)
          .json({ message: "Envie uma credencial de acesso válida" });

      if (await UserController.delete(id)) await Person.findByIdAndDelete(id);
      return res.status(200).send({ message: "Usuário deletado com sucesso" });
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

      console.log(req.body);
      console.log(id);

      await Person.findByIdAndUpdate(id, {
        height: parseFloat(height),
        weight: parseFloat(weight),
        objective: objective,
        experience: experience,
        frequency: parseFloat(frequency),
        // sheet: python, // Se `python` é uma variável contendo um valor para `sheet`, descomente esta linha
        trainingTime: parseFloat(trainingTime),
        isFirst: false,
      });
      return res.status(200).send();
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }

  static async getAll(req, res) {
    try {
      var persons = await Person.find();
      if (persons.length < 1) return res.status(404);
      return res.status(200).send({
        persons,
      });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
  static async getById(req, res) {
    const { id } = req.params;
    try {
      var person = await Person.findById(id);
      if (!person) return res.status(404);
      return res.status(200).send({
        person,
      });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
  static async getByGymId(req, res) {
    const { id } = req.params;
    try {
      var persons = await Person.find({ "gym._id": id }).select(
        "-cpf -isFirst"
      );
      if (!persons) return res.status(404);
      return res.status(200).send({
        persons,
      });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
}

module.exports = PersonController;

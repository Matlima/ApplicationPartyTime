const { Service: ServiceModel } = require("../models/Service");

const serviceController = {

    // Method POST
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };
            const response = await ServiceModel.create(service);
            res.status(201).json({ response, msg: "Serviço criado com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },

    // Method GetAll
    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            res.json(services);
        } catch (error) {
            console.log(error);
        }
    },

    // Method Get by ID
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado" });
                return;
            }

            res.json(service);
        } catch (error) {
            console.log(error);
        }
    },

    // Method Delete
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado" });
                return;
            }

            const deletedService = await ServiceModel.findByIdAndDelete(id);
            res.status(200).json({ deletedService, msg: "Serviço excluido com sucesso" });

        } catch (error) {
            console.log(error);

        }

    }

};

module.exports = serviceController;
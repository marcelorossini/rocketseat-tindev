const Dev = require('../models/Dev');

module.exports =  {
    async index(req, res) {
        // Usuário logado
        const { user } = req.query;

        // Busca no db
        const userData = await Dev.find({ _id: user });

        // Retorna
        return res.json(userData);
    }
};
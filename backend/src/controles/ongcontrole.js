const connection = require('../database/conection');
const crypto = require('crypto');

module.exports = {

    async index (resquest, response){
        const ongs = await connection('ongs').Select('*');
      
        return response.json(ongs);
    },
      
    async create(request, response){
        const {nome , email, whatsApp, city, uf} = request.body;
        const id = crypto.radomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsApp,
            city,
            uf,
        });
        return response.json({ id });
    }
}


const connection = require('../database/conection');

module.exports = {
    async create(request, reponse) {
        const { id } = request.body;
        
        const ong = await connection('ongs')
        .where('id', id)
        .select('nome')
        .first();
        
        if (!ongs){
            return Response.status(404).json({error: " Não existe ONG com este ID."});

        }
        return Response.json(ong);
    }
}
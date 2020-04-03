const connection = require('../database/conection');
module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count]=   await connection('incidents').count()

        const incidents = await connection('incidents')
        .join('ongs', 'ong_id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsApp', 'ongs.city', 'ongs.uf']);
        response.header('x-total', count['count(*)']);

        return response.json(incidents);

    },

    async create(request, response){
        const  {title , descrição, value} =requery.body;
        const ong_id = request.headers.authorization;

      const [id] = await connection("incidents").insert({
            title,
            descrição,
            value,
            ong_id
        });
        return response.json({ id });
    },
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;


        const incidents = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if (incidents.ong_id /= ong_id ) {
            return response.status(401).json({ error: 'Operação não permitida'})             
        }
        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }
};
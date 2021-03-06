
exports.up = function(knex) {
   return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('whatsApp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
    
    });

};

exports.down = function(knex) {
    knex.schema.dropTable('ongs');
  
};

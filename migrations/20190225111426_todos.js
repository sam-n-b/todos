
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos',table =>{
    table.increments('id').primary()
    table.string('task')
    table.integer('priority')
    table.string('category')
    table.boolean('is_complete')
    table.string('due_at')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos')
};

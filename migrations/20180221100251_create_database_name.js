module.exports = {
  up (knex, Promise) {
    return knex.schema.createTable('database_name', (table) => {
      table.increments();
      table.string('key', 100).notNull();
      table.string('value', 2000).defaultTo('');
      table.timestamps(true, true);
    });
  },
  down (knex, Promise) {
    return knex.schema.dropTable('database_name');
  }
}

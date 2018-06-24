
exports.up = function(knex, Promise) {
  return knex('database_name').insert([
    {
      "key_1_a": "val_1_a"
      "key_1_b": "val_1_b"
    },
    {
      "key_2_a": "val_2_a"
      "key_2_b": "val_2_b"
    },
    {
      "key_3_a": "val_3_a"
      "key_3_b": "val_3_b"
    }
  ])

};

exports.down = function(knex, Promise) {
  return knex("database_name").del();
};

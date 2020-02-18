
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'dragon fruit', avgWeightOz: 16.7, delicious: true, color: 'red' }  
      ]);
    });
};

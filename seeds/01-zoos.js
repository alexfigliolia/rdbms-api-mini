
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('zoos').del()
    .then(() => {
      // Inserts seed entries
      return knex('zoos').insert([
        { name: 'Bronx Zoo' },
        { name: 'Alaska Zoo' },
        { name: 'San Diego Zoo' }
      ]);
    });
};

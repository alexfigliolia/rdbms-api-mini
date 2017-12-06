
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('bears').del()
    .then(() => {
      // Inserts seed entries
      return knex('bears').insert([
        { zooId: 1, species: 'Brown Bear', latinName: 'Lain Brown Bear' },
        { zooId: 1, species: 'Polar Bear', latinName: 'Latin Polar Bear' },
        { zooId: 1, species: 'Grizzly Bear', latinName: 'Latin Grizzly Bear' }
      ]);
    });
};

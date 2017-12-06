
exports.up = function(knex, Promise) {
	return knex.schema.createTable('bears', (tbl) => {
		tbl.increments('id');
		tbl.integer('zooId').notNullable().references('id').inTable('zoos');
		tbl.string('species', 80).notNullable().unique('species', 'uniqueBearSpecies');
		tbl.string('latinName', 80).notNullable();
		tbl.timestamp('created_at').defaultTo(knex.fn.now());
	});
};

exports.down = function(knex, Promise) {
	knex.schema.dropTableIfExists('bears');
};

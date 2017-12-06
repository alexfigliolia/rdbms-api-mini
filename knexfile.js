// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/zoo.sqlite3'
    },
    migrations: {
      tableName: 'migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'myql',
    connection: {
      host: 'localhost',
      database: 'my_db',
      user:     'alex',
      password: 'Jan1991a1a'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    },
    useNullAsDefault: true
  }

};

// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lambdaprojects.sqlite3'
    },
    useNullAsDefault : true
    // debug : true
  },

  migrations : {
    directory : './data/migrations'
  },

  seeds : {
    directory : './data/seeds'
  },
    // pool: {
    // // runs after a connection is made to the sqlite engine
    //   afterCreate: (conn, done) => {
    //     conn.run("PRAGMA foreign_keys = ON", done);
    //   }
    // }
};

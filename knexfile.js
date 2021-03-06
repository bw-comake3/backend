require('dotenv').config()

module.exports = {
  development: {
    client: 'sqlite3', // || pg
    useNullAsDefault: true,
    // connection: {
    //   host: "127.0.0.1",
    //   port: "5432",
    //   user: "postgres",
    //   password: process.env.DB_PASSWORD,
    //   database: "comake"
    // },  
   
    connection: { // use this for for sqlite3 local dev
      filename: './data/user.db3'

    },    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    }, 
    seeds:{
      directory: './data/seeds'
    }
  },
  testing: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: "127.0.0.1",
      port: "5432",
      user: "postgres",
      password: process.env.DB_PASSWORD,
      database: 'comake_test'
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    }, 
    seeds: {
      directtory: './data/seeds'
    }
  },
   production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
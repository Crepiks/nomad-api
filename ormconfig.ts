module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'nomad',
  synchronize: true,
  entities: ['src/common/dao/*.ts'],
  migrationsTableName: 'migrations',
  migrations: ['database/migrations/*.ts'],
  cli: {
    migrationsDir: 'database/migrations',
  },
};

import mongoose from 'mongoose';

const config = {
  MONGO_HOST: process.env.MONGO_HOST,
  MONGO_PORT: process.env.MONGO_PORT,
  MONGO_DB: process.env.MONGO_DB,
  MONGO_AUTH_SOURCE: process.env.MONGO_AUTH_SOURCE,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PWD: process.env.MONGO_PWD,
};

const urlConfigs = {
  test: `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`,
  local: `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`,
  homolog: `mongodb://${config.MONGO_USER}:${config.MONGO_PWD}@${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}?authSource=${config.MONGO_AUTH_SOURCE}&authMechanism=SCRAM-SHA-1`,
  production: `mongodb://${config.MONGO_USER}:${config.MONGO_PWD}@${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}?authSource=${config.MONGO_AUTH_SOURCE}&authMechanism=SCRAM-SHA-1`,
};

const options: mongoose.ConnectOptions = {
  socketTimeoutMS: 50000,
};

const db = mongoose.createConnection(urlConfigs[process.env.NODE_ENV], options);

db.on('disconnected', () => {
  console.log('connection disconnected');
});

db.on('error', (err) => {
  console.log('Error in mongodb connection: ', err);
});

db.once('connected', () => {
  console.log(`\x1b[32mMongodb connection ${process.env.NODE_ENV}\x1b[0m`);
});

export default db;

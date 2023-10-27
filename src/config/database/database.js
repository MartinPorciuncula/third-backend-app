import { Sequelize } from 'sequelize';
import { envs } from '../enviroments/enviroments.js';

export const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
});

export async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log('db auth ok!');
  } catch (error) {
    throw new Error('error al autenticar', error);
  }
}

export async function sincronize() {
  try {
    await sequelize.sync();
    console.log('db Sync ok!');
  } catch (error) {
    throw new Error('error al sincronizar', error);
  }
}


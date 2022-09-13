import mysql from 'mysql2/promise';
import config from './config/index.js';

const connection = await mysql.createConnection(config.database);

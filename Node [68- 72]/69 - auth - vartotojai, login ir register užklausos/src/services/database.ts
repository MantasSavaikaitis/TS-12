import mysql from 'mysql2';
import config from '../config';

const database = mysql.createPool(config.database);

export default database;

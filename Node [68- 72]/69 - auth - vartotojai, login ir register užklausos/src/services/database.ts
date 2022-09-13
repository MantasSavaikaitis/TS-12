import mysql, { QueryError } from 'mysql2/promise';
import config from '../config';

const database = mysql.createPool(config.database);

export const escape = mysql.escape.bind(mysql);

// Predicate - prielaida tai varototjoo sukurtas būdas aptikrinti TS tipus
// naudojant JS. Tai tiesiog yra funkcija kuri grąžina Boolean reikšmę.
// Jeigu Grąžinama reikšmė yra 'true', tokiu atveju gautam parametrui yra priskiriamas
// prilaidos tipas (šiuo atveju QueryError), priešingu atveju iš  parametrui nurodytos
// tipų aibės, šis 'spėjamas' tipas yra atmetamas.
export const isQueryError = (error: unknown): error is QueryError => {
  const possibleQueryError = error as QueryError;
  return possibleQueryError.code !== undefined;
};

export default database;

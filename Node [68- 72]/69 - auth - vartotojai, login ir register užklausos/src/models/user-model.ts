import database, { escape, isQueryError } from '../services/database';

// class

const findUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const queryResult = await database.execute(`
    SELECT *
    FROM users
    WHERE email = ${escape(email)};
    `);

    return queryResult as unknown as User;
  } catch (error) {
    if (isQueryError(error)) {
      if (error.code === 'ER_NO_SUCH_TABLE') {
        throw new Error('Duomenų bazės klaida: nėra tokios lentelės');
      } else {
        throw error;
      }
    } else {
      throw error;
    }
  }
};

const UserModel = {
  findUserByEmail,
};

export default UserModel;

const connection = require('./connection');

const newUser = async (email, password) => {
    const [result] = await connection.execute(
        `
        INSERT INTO users (email, password)
        VALUES (?, ?)
        `,
        [email, password]
    );

    if (result.affectedRows === 0) {
        throw new Error();
    };

    return result;
};

const getAllUsers = async () => {
    const [result] = await connection.execute(
        `
        SELECT 
            id,
            email,
            password,
            DATE_FORMAT(created_in, '%Y-%m-%d')
        FROM 
            users;
        `
    );

    if (result.length === 0) {
        throw new Error('No users found');
    }

    return result;
};

const updateUser = async (id, password) => {
    const [result] = await connection.execute(
        `UPDATE users
        SET password = ? 
        WHERE id = ?
        `,
        [password, id]
    );

    if (result.affectedRows === 0) {
        throw new Error();
    };

    return result;
};

const deleteUser = async (id) => {
    const [result] = await connection.execute(
        `DELETE 
        FROM users 
        WHERE id = ?
        `,
        [id]
    );

    if (result.affectedRows === 0) {
        throw new Error();
    }

    return result;
};

module.exports = { newUser, getAllUsers, updateUser, deleteUser };
import db from '../config/database.js'

export const insert = async (table, data) => {
    const columns = Object.keys(data)
    const values = Object.values(data)

    const placeholders = columns.map(() => "?").join(", ")

    const query = `
        INSERT INTO ${table} (${columns.join(", ")})
        VALUES (${placeholders})
    `

    const [result] = await db.execute(query, values)
    
    return result

}

export const findUser = async (email) => {
    const [existingUser] = await db.execute(
        "select * from users where email = ?",
        [email]
    )

    return existingUser.length > 0? existingUser[0] : null;
}
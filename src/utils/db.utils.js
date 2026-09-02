import db from '../config/database.js'

export const insert = async (table, columns, values) => {
  const placeholders = columns.map(() => '?').join(', ')

  const query = `
        INSERT INTO ${table} (${columns.join(', ')})
        VALUES (${placeholders})
    `

  const [result] = await db.execute(query, values)

  return result
}

export const select = async (table, columns, values) => {
  const query = `
            select * from ${table} 
            where ${columns.map((column, idx) => `${column} = ?`).join(' and ')}
            `

  const [rows] = await db.execute(query, values)

  return rows
}

export const update = async (
  table,
  columns,
  values,
  whereColumns,
  whereValues
) => {
  const setClause = columns.map((column) => `${column} = ?`).join(', ')

  const whereClause = whereColumns
    .map((column) => `${column} = ?`)
    .join(' AND ')

  const query = `
        UPDATE ${table}
        SET ${setClause}
        WHERE ${whereClause}
    `

  const [result] = await db.execute(query, [...values, ...whereValues])

  return result
}

export const remove = async (table, columns, values) => {
  const whereClause = columns.map((column) => `${column} = ?`).join(' AND ')

  const query = `
        DELETE FROM ${table}
        WHERE ${whereClause}
    `

  const [result] = await db.execute(query, values)

  return result
}

export const findUser = async (email) => {
  const [existingUser] = await db.execute(
    'select * from users where email = ?',
    [email]
  )

  return existingUser.length > 0 ? existingUser[0] : null
}

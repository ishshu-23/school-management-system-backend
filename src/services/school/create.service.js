import pool from '../../config/database.js'

export default async (name, address) => {
  const [result] = await pool.query(
    `INSERT INTO schools (name, address)
     VALUES (?, ?)`,
    [name, address]
  )

  return result
}

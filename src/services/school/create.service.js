import pool from '../../config/database.js'
import { insert } from '../../utils/db.utils.js'

export const createSchool = async (school) => {
  return await insert(
    'schools',
    Object.keys(school),
    Object.values(school).map((val) => val ?? null)
  )
}

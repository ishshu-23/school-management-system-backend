import { createSchool } from '../../services/school/create.service.js'

export const create = async (req, res, next) => {
  try {
    const result = await createSchool(req.body)

    res.status(201).json({
      message: 'School created successfully',
      schoolId: result.insertId,
    })
  } catch (error) {
    next(error)
  }
}

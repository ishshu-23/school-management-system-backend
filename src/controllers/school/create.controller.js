import { createSchool as createSchoolService } from '../../services/index.js'

export default async (req, res) => {
  try {
    const { name, address } = req.body

    const school = await createSchoolService(name, address)

    res.status(201).json({
      message: 'School created successfully',
      school,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Something went wrong',
    })
  }
}

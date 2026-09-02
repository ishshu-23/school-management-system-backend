import { register } from '../../services/auth/auth.service.js'

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body

    const result = await register(name, email, password, role)

    return res.status(201).json({
      message: 'User registered successfully',
      user: result,
    })
  } catch (error) {
    next(error)
  }
}

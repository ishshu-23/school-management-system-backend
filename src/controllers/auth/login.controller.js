import { login } from '../../services/auth/auth.service.js'

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const token = await login(email, password)

    return res.status(200).json({
      message: 'Login Successful',
      token,
    })
  } catch (error) {
    next(error)
  }
}

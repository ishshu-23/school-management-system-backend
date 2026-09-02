import jwt from 'jsonwebtoken'

export const getToken = (id, role) => {
  return jwt.sign(
    {
      id: id,
      role: role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  )
}

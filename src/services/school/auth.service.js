import bcrypt from 'bcrypt'
import { findUser, insert } from '../../utils/db.utils.js'
import { getToken } from '../../utils/token.utils.js'

export const login = async (email, password) => {
    const user = await findUser(email)

    console.log("user ", user)

    if(!user) throw new Error('Invalid email or password')
        
    const isPasswordValid = await bcrypt.compare(
        password,
        user.password
    )
        
    if(!isPasswordValid) throw new Error('Invalid email or password')

    return getToken(user.id, user.role)
}

export const register = async (
    name, email, password, role
) => {
    if(await findUser(email)) throw new Error('User already exists')

    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await insert("users", {
        name: name,
        email: email,
        password: hashedPassword,
        role: role
    })

    return result 
}
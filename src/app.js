import express from 'express'
import schoolRoutes from './routes/school.route.js'
import './config/database.js'

const app = express()

app.use(express.json())

app.use('/api/school', schoolRoutes)

export default app

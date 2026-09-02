import express from 'express'
import schoolRoutes from './routes/school.route.js'
import authRoutes from './routes/auth.route.js'
import './config/database.js'
import { errorHandler } from './middleware/error.middleware.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'server is working'
    })
})

app.use('/api/school', schoolRoutes)

app.use('/api/auth', authRoutes)

// Global Error Handler
app.use(errorHandler)

export default app
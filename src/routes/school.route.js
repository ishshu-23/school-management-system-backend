import express from 'express'
import { create } from '../controllers/school/create.controller.js'

const router = express.Router()

router.post('/create-school', create)
// router.post('/edit-school/:id', editSchool)
// router.post('/delete-school/:id', deleteSchool)
// router.get('/list-schools', listSchools)

export default router

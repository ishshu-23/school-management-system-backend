import express from 'express'
import {
  createSchool,
  deleteSchool,
  editSchool,
  listSchools,
} from '../controllers/index.js'

const router = express.Router()

router.post('/create-school', createSchool)
router.post('/edit-school/:id', editSchool)
router.post('/delete-school/:id', deleteSchool)
router.get('/list-schools', listSchools)

export default router

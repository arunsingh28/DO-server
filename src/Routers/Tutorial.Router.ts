import express, { Router } from 'express'
import lmsController from '../Controllers/LMS/lms.controller'
import multer from 'multer'


const router = express.Router()


const storage = multer.memoryStorage()

const upload = multer({ storage })


router.route('/init-course').post(lmsController.saveModuleName)
router.route('/update-course/:id').put(lmsController.updateModuleName)
router.route('/delete-course/:id').delete(lmsController.deleteModuleName)
router.route('/get-all-course').get(lmsController.getAllModules)
router.route('/fetch-course/:id').get(lmsController.getModuleById)
router.route('/fetch-modules/:id').get(lmsController.sendModules)
router.route('/update-lesson/:id').put(lmsController.updateLesson)


// pdf upload
router.route('/upload-pdf-course/:id').post(upload.single('pdf'), lmsController.uploadPDF)



export default router


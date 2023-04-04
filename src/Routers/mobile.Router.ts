import express from "express";
const router = express.Router();
import endUserController from '../Controllers/AdminPanelController/user.controller'
import PackageController from '../Controllers/AdminPanelController/Package.controller'
import mobileController from "../Controllers/Mobile/mobile.controller";
import lmsController from '../Controllers/LMS/lms.controller'

router.route('/create-end-user').post(endUserController.regsiterEndUser)
// send the otp


router.route('/get-user-info/:id').get(endUserController.getUserById)

router.route('/get-all-package').get(PackageController.handleGetAllPackages)

//get user info by id
router.route('/get-user-info/:id').get(endUserController.getUserById)

// get nutrition apis
router.route('/get-nutrition-profile/:id').get(mobileController.nutritionProfile)

// get all packages
// controller file -> src/Controllers/AdminPanelController/Package.controller.ts
router.route('/get-all-package').get(PackageController.handleGetAllPackages)

// get all recpies
router.route('/get-all-recpies').get(mobileController.sendAllRecipie)

// get recpie by category
router.route('/get-recpie-by-category/:category').get(mobileController.sendRecipieByCategory)

// water apis
router.route('/water-intake').get(mobileController.saveWaterIntake)
router.route('/water-outtake').get(mobileController.saveWaterOuttake)


router.route('/get-all-course').get(lmsController.getAllModules)

export default router
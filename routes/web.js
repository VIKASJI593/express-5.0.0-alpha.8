import express from "express";
const router = express.Router();
/*------------------5TH STEP------IMPORT FUNCTION FROM CONTROLLER---- */
import { homeController } from "../controllers/homeController.js";
import { aboutController } from "../controllers/aboutController.js";
/*------------6TH STEP--------------ROUTER METHOD---------------- */
router.get("/", homeController);
router.get("/about", aboutController);
/*----------------7TH STEP------IMPORT ROUTER---- */
export default router;
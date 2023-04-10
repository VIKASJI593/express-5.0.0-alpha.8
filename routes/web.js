import express from "express";
const router = express.Router();
/*------------------3RD STEP------IMPORT FUNCTION FROM CONTROLLER---- */
import { homeController } from "../controllers/homeController.js";
import { aboutController } from "../controllers/aboutController.js";
/*------------4TH STEP--------------ROUTER METHOD---------------- */
router.get("/", homeController);
router.get("/about", aboutController);
/*----------------5TH STEP------IMPORT ROUTER---- */
export default router;

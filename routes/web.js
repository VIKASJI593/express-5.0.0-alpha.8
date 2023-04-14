import express from "express";
const router = express.Router();
/*------------------5TH STEP------IMPORT FUNCTION FROM CONTROLLER---- */
import { homeController } from "../controllers/homeController.js";
import { serviceController } from "../controllers/serviceController.js";
import { skillController } from "../controllers/skillController.js";
import { contactController } from "../controllers/contactController.js";

//import { aboutController } from "../controllers/aboutController.js";
/*------------6TH STEP-------------ROUTER METHOD---------------- */
router.get("/", homeController);
router.get("/services", serviceController);
router.get("/skill", skillController);
router.get("/contact", contactController);

//router.get("/about", aboutController); 
/*----------------7TH STEP------IMPORT ROUTER---- */
export default router;

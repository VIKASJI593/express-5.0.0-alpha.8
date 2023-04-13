import express from "express";
const router = express.Router();
/*------------------5TH STEP------IMPORT FUNCTION FROM CONTROLLER---- */
import { homeController } from "../controllers/homeController.js";

/*------------6TH STEP-------------ROUTER METHOD---------------- */
router.get("/", homeController);
/*----------------7TH STEP------IMPORT ROUTER---- */
export default router;

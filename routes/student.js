import express from "express";
const router = express.Router();
/*------------------5TH STEP------IMPORT FUNCTION FROM CONTROLLER---- */

import { studentController } from "../controllers/studentController.js";
import myLogger from "../middlewares/logger-middleware.js";

//ROTER LEVEL MIDDLEWARE
//YE SIRF IS FILE PR HI LAGU HOGA
router.use('/student',myLogger);

//application level par hai isme koi file nhi banaya hai
router.get("/EVENT", (req, res) => {
    res.send("application level");
  });
/*------------6TH STEP--------------ROUTER METHOD---------------- */

router.get("/student", studentController);

/*----------------7TH STEP------IMPORT ROUTER---- */
export default router;

import express from "express";
const router = express.Router();
/*------------------3RD STEP------IMPORT FUNCTION FROM CONTROLLER---- */
import {allstudent, deleteStudent} from '../controllers/studentController.js'
/*------------4TH STEP--------------ROUTER METHOD---------------- */
router.get("/all",allstudent)
router.delete("/delete/:id([0-9]{2})",deleteStudent)
  
/*----------------5TH STEP------IMPORT ROUTER---- */
export default router;

import express from "express";
const router = express.Router();
import {allstudent, deleteStudent} from '../controllers/studentController.js'

router.get("/all",allstudent)
router.get("/delete/:id([0-9]{2})",deleteStudent)
  

export default router;

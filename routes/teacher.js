import express from "express";
const router = express.Router();

router.post("/create", (req, res) => {
  res.send("ADD NEW TEACHER!");
});

router.get("/all", (req, res) => {
    res.send("READ/RETRIEVE TEACHER!");
  });

router.put("/update", (req, res) => {
  res.send("UPDATE NEW TEACHER!");
});

router.delete("/delete", (req, res) => {
    res.send("DELETE TEACHER!");
  });

export default router;

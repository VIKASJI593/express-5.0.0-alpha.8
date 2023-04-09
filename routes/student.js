import express from "express";
const router = express.Router();

router.get("/student/all", (req, res) => {
  res.send("READ/RETREIVE STUDENT!");
});
//id two digit ki set kiya{2}----parameter [0-9] means 0 se  ke beech me
router.get("/delete/:id([0-9]{2})", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  if (id == 10) {
    //id 10 rhegi to ye execute hogi
    res.send("YE SONAM KI ID HAI 10 SO YE DELETE NHI HOGA");
  } else {
    // id 12 13 or any two digit rhne pr ye execute hoga
    res.send(`STUDENT DELETE ${id}!`);
  }
});

export default router;

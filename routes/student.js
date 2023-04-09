import express from "express"
const router = express.Router()


router.post("/create", (req, res) => {
  res.send("ADD NEW STUDENT!");
});

router.get("/all", (req, res) => {
    res.send("READ/RETREIVE STUDENT!");
  });
  

router.put("/update", (req, res) => {
  res.send("UPDATE NEW STUDENT!");
});

router.delete("/delete", (req, res) => {
    res.send("DELETE STUDENT!");
  });

//module.exports = router
export default router;

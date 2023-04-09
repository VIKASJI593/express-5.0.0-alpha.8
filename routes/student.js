//------------1st step---------import express and create route object--------
import express from "express"
const router = express.Router()

//----------2nd step---------router method------------
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

  //-------3rd step-------------export router---------------
//module.exports = router
export default router;

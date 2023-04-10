import express from "express";
const app = express();
const port = process.env.PORT || "8000";
/*-----------8TH STEP-------------IMPORT ROUTER------------- */
import web from "./routes/web.js";

/*-------9th---------static----link it into index.html------ */
//PUBLIC FILE ME JO BHI HOGA AAPKE LIYE AVAILABLE HO JAYEGA
app.use(express.static('public'))
/*----------------10TH STEP-----LOAD ROUTER----- */
app.use("/", web)

// http://localhost:8000/about
// http://localhost:8000
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

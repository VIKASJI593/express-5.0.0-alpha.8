import express from "express";
const app = express();
const port = process.env.PORT || "8000";
/*-----------8TH STEP-------------IMPORT ROUTER------------- */
import web from "./routes/web.js";
/*----------------9TH STEP-----LOAD ROUTER----- */
app.use("/", web)

// http://localhost:8000/about
// http://localhost:8000
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

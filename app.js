import express from "express";
const app = express();
const port = process.env.PORT || "8000";
/*-----------6TH STEP-------------IMPORT ROUTER------------- */
import student from "./routes/student.js";

/*----------------6TH STEP-----LOAD STUDENT----- */
app.use("/student", student);
/*-----------RUN ON THUNDERCLIENT/POSTMAN---SELECT DELETE---- */
// http://localhost:8000/student/delete/10
// http://localhost:8000/student/delete/99
/*-----------RUN ON BROWSER OR THUNDERCLIENT/POSTMAN---SELECT GET---- */
http://localhost:8000/student/all

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

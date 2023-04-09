import express from "express";
const app = express();
const port = process.env.PORT || "8000";

import student from "./routes/student.js";
app.use("/student", student);

// http://localhost:8000/student/delete/10
// http://localhost:8000/student/delete/99

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

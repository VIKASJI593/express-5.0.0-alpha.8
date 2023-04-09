// const  express =  require ('express')
// const stu =require ('./routes/student.js');
// const tea =require ('./routes/teacher.js');

import express from "express";

//-------------4th step--------import routes of student------------
import stu from "./routes/student.js";
import tea from "./routes/teacher.js";

const app = express();
const port = process.env.PORT || "8000";

//---------5th step-----------load router modules----------------
app.use("/vidyarthi", stu);
app.use("/sikshak", tea);

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

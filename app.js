import express from "express";
const app = express();
const port = process.env.PORT || "8000";

/*-------------------------8th step -------------------------*/
import web from "./routes/web.js";

// setup the directory where template files are located
//by default views set rhta isliye yee rhe na rhe koi fark nhi padega
//app.set('views', './views')

//--------iska use tb hoga jb viws file ka name change kr denge (myviews)
//app.set('views', './myviews')

/*------------------------9th step --------------use ejs-----------*/
// setup the template enginge to use
app.set('view engine', 'ejs')

/*------------------------10th step --------------load-----------*/
app.use("/", web);

// http://localhost:8000

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
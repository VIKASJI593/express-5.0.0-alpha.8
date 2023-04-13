import express from "express";
//static files path
import { join } from "path";
const app = express();
const port = process.env.PORT || "8000";

/*-------------------------8th step -------------------------*/
import web from "./routes/web.js";

//app.set('views', './views')

/*------------------------9th step --------------use ejs-----------*/
// setup the template enginge to use
app.set("view engine", "ejs");

//static files
app.use(express.static(join(process.cwd(), "public")));
/*------------------------10th step --------------load-----------*/
app.use("/", web);

// http://localhost:8000

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

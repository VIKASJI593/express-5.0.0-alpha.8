/*
import express from "express";
import { join } from "path"
const app = express();
const port = process.env.PORT || "8000";

import web from "./routes/web.js";

//path ko import krna hoga(import { join } from "path")
console.log(join(process.cwd(), 'public'));
app.use(express.static(join(process.cwd(), 'public')));

app.use("/", web)

// http://localhost:8000
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/
/*------------staic------------*/
import express from "express";
import { join } from "path";
const app = express();
const port = process.env.PORT || "8000";

import web from "./routes/web.js";

//path ko import krna hoga(import { join } from "path")
console.log(join(process.cwd(), "public"));
//isse path static ho jayega, static hamare file system me nhi hai 
// fir bhi unique banane ke liye static add kiya
//isse confliction nhi hoga. html me src me pehle static likhna hoga

app.use("/static", express.static(join(process.cwd(), "public")));
//app.use(express.static(join(process.cwd(), 'public')));

app.use("/", web);

// http://localhost:8000/about
// http://localhost:8000
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

import express from "express";
import { join } from "path";
const app = express();
const port = process.env.PORT || "8000";

import web from "./routes/web.js";

//path ko import krna hoga(import { join } from "path")
console.log(join(process.cwd(), "public"));

//specific path yani sirf kisi e hi file se import hoga dusre se nhi
//iske liye app.js me (sonam ke jagah kuchh bhilikh sakte hai whi css me dena)
//app.js me (public/css) jo hai ye file ka path hai {see readme for change}
app.use("/sonam", express.static(join(process.cwd(), "public/css")));

app.use("/", web);

// http://localhost:8000
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

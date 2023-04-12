import express from "express";
import { join } from "path";
const app = express();
const port = process.env.PORT || "8000";

import web from "./routes/web.js";

//--------------------------dotfiles--------------------//
//agar koi dot ke sath file hai to ignore kr diya jayega(see readme.md)
const options = {
  dotfiles: "allow",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "id",
  redirect: false, 
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  }
}
app.use(express.static(join(process.cwd(),'public'), options));

app.use("/", web);

// http://localhost:8000

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`)
});

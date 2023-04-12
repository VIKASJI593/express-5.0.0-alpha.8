import express from "express";
const app = express();
const port = process.env.PORT || "8000";

import web from "./routes/web.js";

// setup the directory where template files are located
//app.set('views', './views')

// setup the template enginge to use
app.set('view engine', 'ejs')

app.use("/", web);

// http://localhost:8000

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
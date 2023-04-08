/*
import express from "express";
//const express = require('express')
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/







/**************************ALL METHOD************************ */

/*
import express from "express";
//const express = require('express')
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.all("/sabkuchh", (req, res) => {
  res.send("All Method!");
});

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

//http://localhost:8000/sabkuchh
*/





/*----------------------PAGE NOT FOUND------------------------------*/
/*
import express from "express";
//const express = require('express')
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.all('*', (req, res) => {
  res.send("PAGE NOT FOUND !");
});
//http://localhost:8000/ISKE BAD KUCHH BHI DALO PAGE NOT FOUND AAYEGA



app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/



/*-----------------API PAGE NOT FOUND WITH PREFIX------------------ */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.all('/api/*', (req, res) => {
  res.send("API PAGE NOT FOUND !");
});
//http://localhost:8000/api/anyTHING

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/





/*----------------STRING PATH-------------ABOUT PAGE----------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.all('/about', (req, res) => {
  res.send("ABOUT PAGE !");
});
//http://localhost:8000/about

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/




/*----------------STRING PATH-------------ABOUT PAGE-----CONTACT PAGE------ */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.all('/about', (req, res) => {
  res.send("ABOUT PAGE !");
});
//http://localhost:8000/about

app.all('/contact', (req, res) => {
  res.send("CONTACT PAGE !");
});
// http://localhost:8000/contact

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/







/*----------------STRING PATH-------------ABOUT PAGE-----CONTACT PAGE------ */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.all('/about', (req, res) => {
  res.send("ABOUT PAGE !");
});
//http://localhost:8000/about

app.all('/contact', (req, res) => {
  res.send("CONTACT PAGE !");
});
// http://localhost:8000/contact

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/





/*----------------STRING PATTERN PATH ---------RESTRICT-------------- */
//THIS ROUTE PATH WILL MATCH ACD AND ABCD
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.all('/about', (req, res) => {
  res.send("ABOUT PAGE !");
});
//http://localhost:8000/about

app.all('/ab?cd', (req, res) => {
  res.send("THIS ROUTE PATH WILL MATCH ACD AND ABCD  !");
});
// http://localhost:8000/abcd
// http://localhost:8000/acd

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});




















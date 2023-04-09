/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get('/student/delete/1', (req, res) => {
  res.send('student delete!')
})

app.get('/student/delete/2', (req, res) => {
  res.send('student delete!')
})

app.get('/student/delete/3', (req, res) => {
  res.send('student delete!')
})
// http://localhost:8000/student/delete/2
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*-----dynamic--------id parameter-------give any id that give you output----------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get('/student/delete/:id', (req, res) => {
  res.send('student delete!')
})
//http://localhost:8000/student/delete/223sdb
// http://localhost:8000/student/delete/2
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*---------------params----------id print on node----------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/student/delete/:id", (req, res) => {
  //it gives id in node
  console.log(req.params);
  res.send("student delete!");
});
//http://localhost:8000/student/delete/223sdb
// http://localhost:8000/student/delete/2
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*----------dynamic id print in browser--------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/student/delete/:id", (req, res) => {
  console.log(req.params);
  //print on browser with id
  res.send(`student delete! ${req.params.id}`);
});
//http://localhost:8000/student/delete/223sdb
// http://localhost:8000/student/delete/2
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*-----------dynamic category and id-----print on node------ */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

//------------dynamic category and id-----------//
app.get("/student/:category/:id", (req, res) => {
  console.log(req.params);
  res.send(`product !`);
});
// http://localhost:8000/student/laptop/22
// http://localhost:8000/student/coding/4646
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*-----------dynamic category and id-----print on node and browser------ */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/student/:category/:id", (req, res) => {
  console.log(req.params);
//------------dynamic category and id-----------//
  res.send(`product category: ${req.params.category} and product id :${req.params.id}!`);
});
// http://localhost:8000/student/laptop/22
// http://localhost:8000/student/coding/4646
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*-----------dynamic category and id-----print on node and browser----destructured-- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/student/:category/:id", (req, res) => {
  console.log(req.params);
  //------------------destructured----------//
  const { category, id } = req.params;
  res.send(`product category: ${category} and product id: ${id}`);
});
// http://localhost:8000/student/laptop/22
// http://localhost:8000/student/coding/4646
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/product/:order/:year/and/:month", (req, res) => {
  console.log(req.params);
  //------------------destructured----------//
  const { year, month } = req.params;
  res.send(`Year : ${year} and  Month: ${month}`);
});
// http://localhost:8000/product/order/2021/and/oct
// http://localhost:8000/product/order/2021/and/NOV
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/
/*------------train ---to--from------------------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/train/:from-:to", (req, res) => {
  console.log(req.params);
  //------------------destructured----------//
  const { from, to } = req.params;
  res.send(`travelling From : ${from}  To: ${to}`);
});
// http://localhost:8000/train/ranchi-dhanbad

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*-----------------------------state--city----------------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/location/:state.:city", (req, res) => {
  console.log(req.params);
  //------------------destructured----------//
  const { state, city } = req.params;
  res.send(`travelling State : ${state}  City: ${city}`);
});
// http://localhost:8000/location/bihar.patna

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*----------------------without restriction---------------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/student/delete/:id", (req, res) => {
  console.log(req.params);
  
  res.send(`student deleted ${req.params.id}`);
});
// http://localhost:8000/student/delete/1hkh

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*--------with regx--------------with restriction---------------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";
//restriction within bracket
app.get("/student/delete/:id([0-9]{2})", (req, res) => {
  console.log(req.params);
  
  res.send(`student deleted ${req.params.id}`);
});
// http://localhost:8000/student/delete/11  //only two digit works
// http://localhost:8000/student/delete/1hkh

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*----------------type--article-----without restriction */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";
//restriction within bracket
app.get('/:type/:id', (req, res) => {
  console.log(req.params);
  res.send('Post OR Article');
});
// http://localhost:8000/blog/12
// http://localhost:8000/post/12
// http://localhost:8000/article/12

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*----------work only with type--article-----with restriction----- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";
//restriction within bracket
app.get('/:type(post|article)/:id', (req, res) => {
  console.log(req.params);
  res.send('Post OR Article');
});
// http://localhost:8000/post/12
// http://localhost:8000/article/12

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";
//restriction within bracket
app.get('/user/:id', (req, res) => {
  console.log("this is USER ID path");
  res.send('RESPONSE OK');
});
// http://localhost:8000/user/12

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*-----------------------app.param----- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.param("id", (req, res, next, id) => {
  console.log(`ID:${id}`);
  next();
});

app.get("/user/:id", (req, res) => {
  console.log("this is USER ID path");
  res.send("RESPONSE OK");
});
// http://localhost:8000/user/12
// http://localhost:8000/user/15


app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/


/*---------------------app.param called only once even other have same path---- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.param("id", (req, res, next, id) => {
  console.log(`Called only once ID:${id}`);
  next();
});

app.get("/user/:id", (req, res, next) => {
  console.log("this is USER ID path 1");
  next();
});

app.get("/user/:id", (req, res) => {
  console.log("this is USER ID path 2");
  res.send("RESPONSE OK");
});
// http://localhost:8000/user/12
// http://localhost:8000/user/15

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*------------app.param() ------array of route parameter---------------*/
// ye router.param() bhi ho skta hai jb module separate ho
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.param(['id',`page`], (req, res, next, value) => {
  console.log(`Called only once ID:${value}`);
  next();
});

app.get("/user/:id/:page", (req, res, next) => {
  console.log("this is USER ID path 2");
  res.send("RESPONSE OK");
});
// http://localhost:8000/user/24/sonam
// http://localhost:8000/user/343/mobie

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/




/*---------------------------------query string---------------- */

// question mark ? ke bad jo hota hai query hota hai yh path ka part nhi hota
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.param(['id',`page`], (req, res, next, value) => {
  console.log(`Called only once ID:${value}`);
  next();
});

app.get("/user/:id/:page", (req, res, next) => {
  console.log("this is USER ID path 2");
  res.send("RESPONSE OK");
});
// http://localhost:8000/user/24/sonam
// http://localhost:8000/user/343/mobie

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

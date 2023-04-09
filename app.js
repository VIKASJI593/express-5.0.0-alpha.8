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

/*Cannot set headers after they are sent to the client
    at new NodeError */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";



app.get("/student/all", (req, res) => {
  res.send("READ/RETREIVE STUDENT!");
});
//id two digit ki set kiya{2}----parameter [0-9] means 0 se  ke beech me
app.get("/student/delete/:id([0-9]{2})", (req, res) => {
console.log(req.params);
const {id} =req.params
console.log(id);
if(id ==10){
  //id 10 rhegi to ye execute hogi
  res.send("YE SONAM KI ID HAI 10 SO YE DELETE NHI HOGA");
}
// id 12 13 or any two digit rhne pr ye execute hoga
res.send(`STUDENT DELETE ${id}!`);
})
// http://localhost:8000/student/delete/10
// http://localhost:8000/student/delete/12
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/






import express from "express";
const app = express();
const port = process.env.PORT || "8000";



app.get("/student/all", (req, res) => {
  res.send("READ/RETREIVE STUDENT!");
});
//id two digit ki set kiya{2}----parameter [0-9] means 0 se  ke beech me
app.get("/student/delete/:id([0-9]{2})", (req, res) => {
console.log(req.params);
const {id} =req.params
console.log(id);
if(id ==10){
  //id 10 rhegi to ye execute hogi
  res.send("YE SONAM KI ID HAI 10 SO YE DELETE NHI HOGA");
}else{
// id 12 13 or any two digit rhne pr ye execute hoga
res.send(`STUDENT DELETE ${id}!`);
}
})
// http://localhost:8000/student/delete/10
// http://localhost:8000/student/delete/12
app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

<!-- 
//--APP.JS---
//When we use path then only that path gives me log on node
//APPLICATION LEVEL MIDDLEWARE
app.use('/about',myLogger);
 -->

<!-- 
//---logger-midleware.js---
var myLogger = (req, res, next) => {
  console.log("Logged");
  next();
};
export default myLogger; -->


Express Route Tester
https://forbeslindesay.github.io/express-route-tester/

npm i express@5.0.0-alpha.8

npm i -D nodemon

"type": "module",

npm run dev

npm init -y

node index.js

nodemon index.js

git init

git branch -M 26-middleware-path

git add .

git commit -m "MIDDLEWARE"

git push -u origin 26-middleware-path

git push -f -u origin 26-middleware-path

git branch

git remote add origin https://github.com/VIKASJI593/express-5.0.0-alpha.8.git

git remote -v

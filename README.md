npm install ejs

//-------------only index comes with app.set('view engine', 'ejs')------
app.js file
// setup the template enginge to use
app.set('view engine', 'ejs')

homecontroller.js file
const homeController = (req, res) => {
res.render('index')
------------------------//

//setup the directory where template files are located
app.set('views', './views') // specify the views directory

//setup the template enginge t use
app.set('view engine', 'ntl') // register the template engine
app.set('view engine', 'ejs')


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

git branch -M 15-ejs-index.ejs

git add .

git commit -m "ejs"

git push -u origin 15-ejs-index.ejs

git branch

git remote add origin https://github.com/VIKASJI593/express-5.0.0-alpha.8.git

git remote -v

git push -f -u origin 15-ejs-index.ejs

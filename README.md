const homeController = (req, res) => {
  //-------------varaible data---------------
  const data = {
    name: "sonam",
  };
  /*-----2nd step---------give path of index-----import index.ejs-- */
  res.render("index", data);
};

//index.ejs file me iska use krte hai
<h2><%= name %></h2>

<!-- creating variable data -----index.ejs file only->
    <% var i =10 %> 
    <!-- displaying variable data -->
    <%= i %>

    <!-- comment in ejs---------inspect me te show nhi krega------>
    <%# comment will not be present in the rendered html %>



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

git branch -M 19-ejs-variable

git add .

git commit -m "ejs"

git push -u origin 18-ejs-variable

git branch

git remote add origin https://github.com/VIKASJI593/express-5.0.0-alpha.8.git

git remote -v

git push -f -u origin 18-ejs-variable

ctrl+f5 se hard refresh krne ke baad show krega

// allow rehne par inspect network me staus code 200(success) show krega
dotfiles: "allow",

// ignore rehne par inspect network me staus code 404(not found) show krega, ndex.html me link rehne ke baad bhi 404 dikhega
//lekin agar dikhana hai to allow kre dotfiles
dotfiles: "ignore",


//css file import only
<link rel="stylesheet" href=".hello.css" />

//path
app.use(express.static(join(process.cwd(),'public'), options));

//--------------------------dotfiles--------------------//
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

git branch -M 13-dot-file

git add .

git commit -m "STATIC"

git push -u origin 13-dot-file

git branch

git remote add origin https://github.com/VIKASJI593/express-5.0.0-alpha.8.git

git remote -v

git push -f -u origin 13-dot-file

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

app.all('/ab?cd', (req, res) => {
  res.send("THIS ROUTE PATH WILL MATCH ACD AND ABCD  !");
});
// http://localhost:8000/abcd
// http://localhost:8000/acd

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*--------------REGULAR EXPRESSION------------------- */
//PATH ME JO TEXT RHEGA WO KISI BHI WORD ME MATCH HO JAYEGA TO SHI HAI
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get(/a/, (req, res) => {
  res.send("THIS IS A RELATED WORD  !");
});
//http://localhost:8000/about
// http://localhost:8000/bouta


app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*--------------------------CALLBACK------------------------ */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get('/cbexample1', (req, res) => {
  res.send("ONE CALLBACK EXAMPLE  !");
});
//http://localhost:8000/cbexample1


app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*-------------------SECOND CALLBACK NOT WORKING--------------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get('/cbexample2', (req, res) => {
  console.log("FIRST CALLBACK");
}, (req, res) => {
console.log("SECOND CALLBACK");
  res.send("MORE THAN ONE CALLBACK EXAMPLE  !");
});
//http://localhost:8000/cbexample2


app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*-------------------FIRST AND SECOND CALLBACK  WORKING----------WITH NEXT() CALL */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get('/cbexample2', (req, res,next) => {
  console.log("FIRST CALLBACK");
  next()
}, (req, res) => {
console.log("SECOND CALLBACK");
  res.send("MORE THAN ONE CALLBACK EXAMPLE  !");
});
//http://localhost:8000/cbexample2


app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*-----------ARRAY OF CALLBACK NOT WORKING------------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

const cb1 = (req, res) => {
  console.log("FIRST CALLBACK");
}

const cb2 = (req, res) => {
  console.log("SECOND CALLBACK");
}

const cb3 = (req, res) => {
  console.log("THIRD CALLBACK");
  res.send("AN ARRAY OF CALLBACK EXAMPLE  !");
}
app.get('/cbexample3',[cb1,cb2,cb3])
// http://localhost:8000/cbexample3

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*-----------ARRAY OF CALLBACK  WORKING------------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

const cb1 = (req, res, next) => {
  console.log("FIRST CALLBACK");
  next();
};

const cb2 = (req, res, next) => {
  console.log("SECOND CALLBACK");
  next();
};

const cb3 = (req, res) => {
  console.log("THIRD CALLBACK");
  res.send("AN ARRAY OF CALLBACK EXAMPLE  !");
};
app.get("/cbexample3", [cb1, cb2, cb3]);
//http://localhost:8000/cbexample3

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*-------COMBINATION OF INDEPENDENT FUNCTION AND ARRAY OF FUNCTION----------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.send("hello world!");
});

const cb1 = (req, res, next) => {
  console.log("FIRST CALLBACK");
  next();
};

const cb2 = (req, res, next) => {
  console.log("SECOND CALLBACK");
  next();
};

// const cb3 = (req, res) => {
//   console.log("3RD CALLBACK");
//   res.send("AN ARRAY OF CALLBACK EXAMPLE  !");
// };
app.get(
  "/cbexample4",
  [cb1, cb2],
  (req, res, next) => {
    console.log("THIRD CALLBACK");
    next();
  },
  (req, res) => {
    console.log("FOURTH CALLBACK");
    res.send("COMBINATION OF INDEPENDENT FUNCTION AND ARRAY OF FUNCTION  !");
  }
);
//http://localhost:8000/cbexample4

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

/*--------------------CHAINED ROUTE CALLBACK-------- */
/*
import express from "express";
const app = express();
const port = process.env.PORT || "8000";

// app.get("/student", (req, res) => {
//   res.send("ALL STUDENT!");
// });

// app.post("/student", (req, res) => {
//   res.send("ADD NEW STUDENT!");
// });

// app.post("/student", (req, res) => {
//   res.send("UPDATE NEW STUDENT!");
// });

app.route('/student')

.get((req, res) => {
  res.send("ALL STUDENT!");
})

.post((req, res) => {
  res.send("ADD NEW STUDENT!");
})

.post((req, res) => {
  res.send("UPDATE NEW STUDENT!");
})

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});
*/

import express from "express";
const app = express();
const port = process.env.PORT || "8000";

app
  .route("/student")

  .all((req, res, next) => {
    console.log("FIRST RUN THIS FOR ALL HTTP METHOD");
    next();
  })

  .post((req, res) => {
    console.log("POST METHOD");
    res.send("ADD NEW STUDENT!");
  })

  .get((req, res) => {
    console.log("GET METHOD");
    res.send("RETRIEVE STUDENT!");
  })

  .put((req, res) => {
    console.log("PUT METHOD");
    res.send("UPDATE NEW STUDENT!");
  })

  .patch((req, res) => {
    console.log("PATCH METHOD");
    res.send("UPDATE PARTIALLY NEW STUDENT!");
  })

  .delete((req, res) => {
    console.log("DELETE METHOD");
    res.send("DELETE STUDENT!");
  });

app.listen(port, () => {
  console.log(`Yupp! Express server listening at http://localhost:${port}`);
});

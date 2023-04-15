
/*-------------------------10th step-----+--app.js-------------- */
var myLogger = (req, res, next) => {
  console.log("Logged");
  next();
};
export default myLogger;

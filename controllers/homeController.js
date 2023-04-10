/*-------------------1st STEP------------- */
const homeController = (req, res) => {
  /*------------2nd step---------give path of index */
   res.sendFile('F:\\backend\\EXPRESS VIDEO\\ch2\\express-app\\views\\index.html');
   //res.sendFile('F:\\backend\\EXPRESS VIDEO\\ch2\\express-app\\views\\about.html')
};
/*--------3RD STEP----------EXPORT FUNCTION------ */
export { homeController };

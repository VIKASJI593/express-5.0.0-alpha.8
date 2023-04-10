/*-------------------1st STEP-------------FUNCTION */
const homeController = (req, res) => {
  
   res.sendFile('F:\\backend\\EXPRESS VIDEO\\ch2\\express-app\\views\\index.html');
   //res.sendFile('F:\\backend\\EXPRESS VIDEO\\ch2\\express-app\\views\\about.html')
};
/*--------2ND STEP----------EXPORT FUNCTION------ */
export { homeController };

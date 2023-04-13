/*-------------------1st STEP------------- */
const aboutController = (req, res) => {
  /*-----2nd step---------give path of index-----import index.ejs-- */
  res.render('about', { 'title': 'About' });
};
/*--------3RD STEP----------EXPORT FUNCTION------ */
export { aboutController };

/*-------------------1st STEP------------- */
const serviceController = (req, res) => {
  /*-----2nd step---------give path of index-----import index.ejs-- */
  res.render('services', { 'title': 'Service' });
};
/*--------3RD STEP----------EXPORT FUNCTION------ */
export { serviceController };

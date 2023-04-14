/*-------------------1st STEP------------- */
const contactController = (req, res) => {
    /*-----2nd step---------give path of index-----import index.ejs-- */
    res.render('contact', { 'title': 'Contact' });
  };
  /*--------3RD STEP----------EXPORT FUNCTION------ */
  export { contactController };

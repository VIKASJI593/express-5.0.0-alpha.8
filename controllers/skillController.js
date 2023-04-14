/*-------------------1st STEP------------- */
const skillController = (req, res) => {
    /*-----2nd step---------give path of index-----import index.ejs-- */
    res.render('skill', { 'title': 'Skill' });
  };
  /*--------3RD STEP----------EXPORT FUNCTION------ */
  export { skillController };
  
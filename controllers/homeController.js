/*-------------------1st STEP------------- */
const homeController = (req, res) => {
  /*------------2nd step---------give path of index */
    res.render('index')
};
/*--------3RD STEP----------EXPORT FUNCTION------ */
export { homeController };


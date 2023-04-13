/*-------------------1st STEP------------- */
const homeController = (req, res) => {
  //-------------varaible data---------------
  const data = {
    name: "sonam",
    id :10
  };
  /*-----2nd step---------give path of index-----import index.ejs-- */
  res.render("index", data);
};
/*--------3RD STEP----------EXPORT FUNCTION------ */
export { homeController };

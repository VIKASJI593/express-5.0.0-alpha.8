/*-------------------1st STEP------------- */
const homeController = (req, res) => {
  /*-----2nd step---------give path of index-----import index.ejs-- */
  res.render("index", { name: "sonam" });
};
/*--------3RD STEP----------EXPORT FUNCTION------ */
export { homeController };

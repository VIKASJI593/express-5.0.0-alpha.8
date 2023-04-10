/*-------------------1st STEP------------- */
import { join } from "path";
const homeController = (req, res) => {
  /*------------2nd step---------give path of index */
  //console.log(join(process.cwd(), "views", "index.html"));
  res.sendFile(join(process.cwd(), "views", "index.html"));
};
/*--------3RD STEP----------EXPORT FUNCTION------ */
export { homeController };


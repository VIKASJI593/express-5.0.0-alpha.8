/*-------------------1st STEP-------------join path */
import { join } from "path"
const aboutController = (req, res) => {
  /*-----------2nd step------path of about----- */
  console.log(join(process.cwd(), "views", "about.html"));
  res.sendFile(join(process.cwd(), "views", "about.html"));
};

/*--------3rd STEP----------EXPORT FUNCTION------ */
export { aboutController };

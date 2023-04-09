/*-------------------1st STEP-------------FUNCTION */
const allstudent = (req, res) => {
  res.send("ALL STUDENT");
};
/*-------------------1st STEP-------------FUNCTION */
const deleteStudent = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  if (id == 10) {
    res.send("YE SONAM KI ID HAI 10 SO YE DELETE NHI HOGA");
  } else {
    res.send(`student delete ${id}`);
  }
};

/*--------2ND STEP----------IMPORT FUNCTION------ */
export { allstudent, deleteStudent };
// // module.exports = { allstudent, deleteStudent }

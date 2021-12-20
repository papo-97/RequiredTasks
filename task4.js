function gradeLabs(Labs) {
  try {
    for (let student of Labs) {
      if (student.runlab) {
        return true;
      } else throw new Error("Student is canceled");
    }
  } catch (e) {
    return e.name;
  }

  return Labs;
}
let studentLabs = [
    {
      student: "Carly",
      runLab: function (num) {
        return Math.pow(num, num);
      },
    },
    {
      student: "Erica",
      runLab: function (num) {
        return num * num;
      },
    },
  ];
  
  gradeLabs(studentLabs);
  console.log(gradeLabs(2))//"TypeError"
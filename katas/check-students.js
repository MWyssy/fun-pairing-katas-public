/*
  The function checkStudents should take a list of students and a cohort and return true if all 
  students are in the given cohort and false if any students are not in the given cohort.
  E.g. checkStudents([
    {name: 'Ben', cohort: 'October'},
    {name: 'Amanda', cohort: 'April'},
    {name: 'Matt', cohort: 'April'}
  ], 'April')
  --> false
*/

function checkStudents(studentsArray, cohort) {
  if (studentsArray.length === 0) return false;

  const checkTruth = [];

  for (let i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].cohort === cohort) {
      checkTruth.push(true);
    } else {
      checkTruth.push(false)
    };
  };

  return checkTruth.indexOf(false) < 0;
}

module.exports = checkStudents;

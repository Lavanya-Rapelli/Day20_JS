// Problem
// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.

class StudentRecords {
    constructor() {
      this.students = [];
    }
  
    addStudent(name, marks) {
      if (this.students.length < 3) {
        this.students.push({
          name: name,
          marks: marks,
          total: marks.reduce((acc, mark) => acc + mark, 0),
        });
      } else {
        console.log("Cannot add more than 3 students.");
      }
    }
  
    findStudentWithLeastTotal() {
      let leastStudent = this.students[0];
      for (let student of this.students) {
        if (student.total < leastStudent.total) {
          leastStudent = student;
        }
      }
      return leastStudent.name;
    }
  
    findStudentWithHighestTotal() {
      let highestStudent = this.students[0];
      for (let student of this.students) {
        if (student.total > highestStudent.total) {
          highestStudent = student;
        }
      }
      return highestStudent.name;
    }
  }
  
  const records = new StudentRecords();
  
  records.addStudent("Alice", [85, 90, 88]);
  records.addStudent("Bob", [70, 75, 80]);
  records.addStudent("Charlie", [90, 95, 92]);
  
  console.log("Student with the least total marks:", records.findStudentWithLeastTotal());
  console.log("Student with the highest total marks:", records.findStudentWithHighestTotal());


  
// student-grade-generator.js
let marks, grade;

function gradeDeterminer() {
    marks = prompt("Enter marks between 0 and 100:");
   
    while (true) {
       if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        break;//ends the loop when the input is valid
       } else {
        alert("Invalid input. Please enter a valid number.");
       }
    }

    //determine the grade
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    alert(Grade is: ${grade})

}

//calling the function
gradeDeterminer();
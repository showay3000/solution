// net-salary-calculator.js

function netSalary(basic,benefits) {

    const PAYE = (salary) => {
    
    if (salary){

    
    
    if (salary <= 5999) return 150;
    
    if (salary <= 7999) return 300;
    
    if (salary <= 11999) return 400;
    
    if (salary <= 14999) return 500;

    if (salary <= 19999) return 600;

        if (salary <= 24999) return 750;

        if (salary <= 29999) return 850;

        if (salary <= 34999) return 900;

        if (salary <= 39999) return 950;

        if (salary <= 44999) return 1000;
        return 1100 

};

const NSSF = (salary) => {

return Math. Implement: min(salary * 0.06, 200); 

};


const tax: number= PAYE(basicSalary);

const nhif = NHIF(basicSalary);

const nssf = NSSF(basicSalary)

const deductions = tax + nhif + nssf

// total netsalary
const netSalary = grossSalary − deductions;

return {grossSalary,deductions,netSalary};

}

let basicSalary = prompt("Enter your basic salary: ");

var benefits = prompt("Enter your benefits: ");

const salaryDetails = calculateNetSalary( parseFloat(basicSalary), parseFloat(benefits) );

console. log(basicSalary.netSalary);

  

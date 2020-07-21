const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

$(document).ready(finalFunction(employees));

function bonusedEmployee ( employee ) {
  let bonusPercentage = 0;
  let totalCompensation = 0;
  let totalBonus = 0;
  //establishing variables
  // start if
  if (employee.reviewRating <= 2) {
    bonusPercentage += 0;
  } else if (employee.reviewRating === 3) {
    bonusPercentage += 4;
  } else if (employee.reviewRating === 4) {
    bonusPercentage += 6;
  } else if (employee.reviewRating === 5) {
    bonusPercentage += 10;
  } // end if, else if

  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 5;
  } //end if for extra bonus

  if (employee.annualSalary > 65000){
    bonusPercentage -= 1;
  } //end if for salary > 65000

  // if ( bonusPercentage > 13 ) {
  //   bonusPercentage = 13;
  // } else if ( bonusPercentage < 0 ) {
  //   bonusPercentage = 0;
  // } // sets minimums and maximums

  bonusPercentage = Math.min(Math.max(bonusPercentage, 0), 13)
  // This is an alternate method for setting a minimum and maximum value that Paul found.

  //function value_limit(val, min, max) {
  //  return val < min ? min : (val > max ? max : val);
  // }

  totalBonus = Math.floor(employee.annualSalary * (bonusPercentage / 100)); 
  // calculates totalBonus

  totalCompensation = Number(employee.annualSalary) + totalBonus;
  // calculates totalCompensation
  
  let employeeWithBonus = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  };
  //creating new object
  return employeeWithBonus;
  //returns new object
}; // end bonusEmployee function

// final function with for of loop
function finalFunction(employeeArray) {
  console.log('Page is working, final function is running');
  let el = $("#employees");
  el.empty('');
  for (let employee of employeeArray) {
    console.log(bonusedEmployee(employee));
    el.append(`<p>${bonusedEmployee(employee)}</p>`);
  }; // end for loop
}; // end function

//finalFunction( employees );



//el.append(`<li>${car.year} ${car.make} ${car.model}</li>`);
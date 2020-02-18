

const countTotalSalary = function(employees) {

let total = 0;

let sumOfSalaries = Object.values(employees);

for (let key of sumOfSalaries) {

	total += key;
	
}

return total;

}

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
    brooks: 1000,
  }))
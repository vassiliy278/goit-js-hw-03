

const findBestEmployee = function(employees) {
  
let max = 0;

let name;

const keys = Object.keys(employees);

for (i = 0; i < keys.length; i += 1) {

	if (employees[keys[i]] > max) {

		max = employees[keys[i]];

		name = keys[i];
	}
}

return name;

}

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }));
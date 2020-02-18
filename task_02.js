

const countProps = function(obj) {

  	const entries = Object.entries(obj);

	console.log(`Количество свойств объекта: ${entries.length}`)

};

countProps({ name: 'Mango', age: 2 });

countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
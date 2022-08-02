const { Go, GoFunc } = require("../turu");

//GO FUNCTION EXAMPLE
console.log("Hello World");
Go(3000);
console.log("Hello World Setelah 3 Detik");

//GOFUNC FUNCTION EXAMPLE
GoFunc(3000, function () {
	console.log("Hello World Setelah 3 Detik");
});

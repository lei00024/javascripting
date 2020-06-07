const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = [];
const filtered = numbers.filter(function evenNumbers(num){
	if(num % 2 === 0){
		a.push(num);
	}
	return a;
});
console.log(a);

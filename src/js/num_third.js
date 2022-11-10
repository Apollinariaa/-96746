/*jshint esversion: 8 */
class Figure {
	constructor(a, b = a) {
		this.a = a;
		this.b = b;
	}
	square() {
		return this.a*this.b;
	}
}

class Square extends Figure {
	constructor(a) {
		super(a);
	}
	square() {
		return this.a**2;
	}
}

class Rectangle extends Figure {
	constructor(a, b=a) {
		super(a, b);
	}
}

class Circle extends Figure {
	constructor(a) {
		super(a);
	}
	square() {
		return this.a**2*3.14;
	}
}

class Triangle extends Figure {
	constructor(a,b=a) {
		super(a, b);
	}
	square() {
		return this.a*this.b*0.5;
	}
}

const triangle = new Triangle(2).square();
console.log(triangle);

const circle = new Circle(1).square();
console.log(circle);

const square = new Square(10).square();
console.log(square);

const rectangle = new Rectangle(10,5).square();
console.log(rectangle);

function calsFunc(arr) {
	let sumSquare = 0;
	arr.forEach((figure) => {
		sumSquare += figure.square();
	});
	return sumSquare;
}

const sumSquare = calsFunc([new Rectangle(10,5),new Square(10),new Triangle(2)]);
console.log(`Сумма всех площадей фигур = ${sumSquare}`);

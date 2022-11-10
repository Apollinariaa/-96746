/*jshint esversion: 8 */


// класс калькулятор, который находит сумму всех площадей
class Calculator {
	constructor(array){
		this.array = array;
	} 
	sum() {
		return this.array.reduce((sum, figure) => sum + figure.square(),0);
	}
}

// базовый класс фигура
class Figure {
	constructor(a, b = a) {
		this.a = a;
		this.b = b;
	}
	square() {
		return this.a*this.b;
	}
}

// классы фигур, которые наследуются от Figure
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

const calc = new Calculator([new Rectangle(10,5),new Square(10)]);
console.log(calc.sum());

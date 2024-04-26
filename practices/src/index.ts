// let a: string = "23";
// let namea: number = 4;

// let a2 = <string>"234";

// let check: any;

// let surname: string | number; //union type with or

// // type keyword
// type UserName = (a: number, b: number) => number;
// const func: UserName = (a, b) => {
// 	console.log(a, b);
// 	return a * b;
// };

// arrays method 1
const arr: number[] = [12, 45, 56, 62];
const arr2: string[] = ["12", "45", "56", "62"];
// method 2
const arr3: Array<string | number> = [12, "45", 56, 62];

// objects method
// type Obj = {
// 	height: number;
// 	weight: number;
// 	gender?: string;
// };
interface Obj {
	height: number;
	weight: number;
	gender?: string;
}

type funcType = (a: number, b: number) => void;

interface newObj extends Obj {
	scolar: boolean;
	func: funcType;
}

const r: newObj = {
	height: 23,
	weight: 3,
	scolar: true,
	func: (a, b) => {
		console.log(a * b);
	},
};

r.func(2, 9); // r.func(2, 9); // remove ? from function for solve remove ? from function for solve

const obj: Obj = {
	height: 23,
	weight: 100,
	gender: "Male",
};
const obj1: Obj = {
	height: 23,
	weight: 100,
};

// function with object

interface Product {
	name: string;
	stock: number;
	price: number;
	photo?: string;
	readonly id: string;
}

type GetDataType = (product: Product) => void;

const getDate: GetDataType = (product) => {
	return product;
};

const product: Product = {
	id: "34",
	name: "asd",
	stock: 23,
	price: 24234,
};

getDate(product);

// --------------------------------------------------------------
// classes

class Player {
	private secret = "sangam";

	constructor(public height: number, public weight: number, protected username: string) {}

	mySecret = () => {
		return this.secret;
	};

	getMyHeight = () => this.username;
}

const san = new Player(200, 588, "sa");
console.log(san.mySecret());
console.log(san);
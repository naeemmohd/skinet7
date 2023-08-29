//TYpeScript Concepts

/*
let data: number | string; //data can be number or a string
data = '42'; //ok
data = 10; //ok

let dataEx1 : any //used any type
dataEx1 = '42'; //ok
dataEx1 = 10; //ok

let dataEx2 : number  //used number type
dataEx2 = '42'; //not ok
dataEx2 = 10; //ok

let dataEx3 : string  //used string type
dataEx3 = '42'; //ok
dataEx3 = 10; //not ok


//objects and interfaces

interface ICar{
    color: string;
    model: string;
    topSpeed?: number //optional property
}

const car1: ICar = {
    color: 'blue',
    model: 'bmw'
};

const car2: ICar = {
    color: 'red',
    model: 'mercedes',
    topSpeed: 100
};

//ok
const multiply1 = (x: number, y: number): number =>{
    return x*y;
};

//not ok
const multiply2 = (x: number, y: number): string =>{
    return x*y;
};

// ok
const multiply3 = (x: number, y: number): string =>{
    return (x*y).toString();
};

//ok
const multiply4 = (x: number, y: number): void =>{
    x*y;
};
*/
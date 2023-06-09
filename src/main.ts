//Typescript built in types

//Arrays
//impliscitly show the type annotation for empty arrays
let numbers: number[] = [];

// leave out the type annotation when the array is of a specific type i.e ages(number)
let ages = [10, 23, 54, 5];

//Tuples
// a tuple is a fixed length array where each element has a specific type
let user: [string, number] = ["eugy", 12];

//enums
//enums are used to set global constants
//eg intead o declaring three separate constants for sizes small,large and medium we can use enums
//use pascal case for enums i.e every starting letter should be uppercase
//initialize enums with const to let the ts compiler produce more optimised js
const enum Size {
  Small = 5,
  Large,
  Medium,
}
let mySize: Size = Size.Large;
console.log(mySize);

// functions
// add a question mark infront of a parameter to make it optional or you can assign a specific value
function addNums(f: number, d = 3): number {
  return f * d;
}
function calculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(20_000);

//Objects
// use the readonly keyword to make a value readonly and not editable
//this is a sketchier way of writing objects use aliases instead
let employees: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "eugy",
  retire: (date: Date) => {
    console.log(date);
  },
};


//Aliases (type)
// Aliases allows types to be easily shared between different variables/objects.

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "eugy",
  retire: (date: Date) => {
    console.log(date);
  },
};

//union Types
//these are used to give a parameter more than a type
function kgToLbs(weight: string | number): number {
  //narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

//intersection Types
//An intersection type combines multiple types into one. 
//This allows you to add together existing types to get a single type that has all the features you need.
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UiWidget = Draggable & Resizable;

let textBox : UiWidget = {
  drag: () => {},
  resize: () => {}
}

//literal Types (exact or specific)
//literal types can be both strings or numbers
type Quantity = 100 | 50
type Metric = 'cm' | 'inch'
let quantity: Quantity = 100

//Nullable Types
// gives you the ability to pass in null and undefined as parameters
function greet(name:string | null | undefined) {
    if (name)
      console.log(name);
    else
      console.log('hola');
      
}

greet(null)

//Optional Chaining
type Customer  = {
    birthday? : Date
}

function getCustomer(id:number):Customer | null | undefined {
        return id===0 ? null : { birthday : new Date()}
}

let customer = getCustomer(1)
// if (customer !==null && customer !==undefined)
// optional property access operator (?)

    console.log(customer?.birthday?.getFullYear());

//optional element access operator
// customer?.[0]

// optional call operator
let log:any = null;
log?.('a')

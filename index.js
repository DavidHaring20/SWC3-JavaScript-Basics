
//variables ---------------------------
console.log("variables ----------------");
let name = "Tomas";
console.log(name);
console.log(typeof name);

name = 12;
console.log(name);
console.log(typeof name);

const constantVariable = 0.3;

//this is not possible:
//constantVariable = 1;

let boolVariable = false;
console.log(typeof boolVariable);

let undefinedVariable;
console.log(typeof undefinedVariable);

let nullVariable = null;
console.log(typeof nullVariable);


//objects: --------------------------------
console.log("objects ----------------");

let person = {
    name: "Tomas",
    age: 50
}

console.log(typeof person);
console.log(person);
console.log(person.name);
console.log(person["name"]);

//object[field] syntax is useful if we dont know the field until the runtime:
let selection = "name";
console.log(person[selection]);


//arrays:
console.log("arrays ----------------");
let selectedColors = ["red", "blue"];
console.log(selectedColors);
console.log(selectedColors[0]);

//array can store different data types
selectedColors[1] = "string"
console.log(typeof selectedColors[1]);
console.log(selectedColors);

//array size can change
selectedColors[2] = "green";
console.log(selectedColors);

//you can jump over some indexes
selectedColors[5] = "blue";
console.log(selectedColors);

console.log(selectedColors.length);


//functions -------------------------
console.log("functions ----------------")

function greet(){
    console.log("hello there");
}

greet();

console.log(typeof greet);


//operators: ----------------------------------------
//--------------------------------------------------
console.log("operators ----------------");

let x = 10;
let y = 3;

console.log(x % y); //modulo
console.log(x ** y); //power ... x^y

console.log(x++);
console.log(++x);
console.log(--x);

x += 3;
x *=3;
x /=3;

//strict equality operator
x = 1;

console.log(x === 1);
console.log("1" === 1);
console.log(true ===1);

//lose eqality
console.log(x == 1);
console.log("1" == 1);
console.log(true ==1);

//ternary operator:
let points = 120;
let type = (points > 100) ? "gold" : "silver";
console.log(type)

//logical operators:
console.log(true && true);
console.log(!true && true);
console.log(!true || true);

//logical operators with non-booleans:
console.log(false || true);
console.log(false || "Bob");
console.log(false || 1);

//falsy expression: (kind of like a boolean false)
//undefined
//null
//0
//false
//""
//NaN - Not a Number ... special value in JavaScript, not a valid number

// truthy ... anythong that is not falsy

//we can chain the expression, it will return the first truthy:
console.log(false || false || true);
console.log(false || false || 1);
console.log(false || "Bob" || 1);

//example:
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log("current color: " + currentColor);

userColor = undefined;
currentColor = userColor || defaultColor;
console.log("current color: " + currentColor);

//operators precedence:
console.log(2 + 3 * 4);


//control flow ----------------------------------
//-------------------------------------------------
console.log("control flow ----------------");

//for loop:
let limit = 5;
for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
  }

//if else:
if (limit > 10)
    console.log("limit > 10")
else
    console.log("limit < 10");

//switch case:
let role = "moderator";

switch (role){
    case "guest":
        console.log("guest user");
        break;
    case "moderator":
        console.log("moderator");
        break;
    default:
        console.log("unknown user");
}

//while:
let i = 0;

while(i<3)
    console.log(i++);

//do while: It will run at least once
i = 10;
do{
    console.log("false condition");
} while (i < 5);

//for-in:
person = {
    name: "Tomas",
    age: 50,
    address: "some charlottenlund"
}

for(let key in person)
    console.log(key);

for(let key in person)
    console.log(key +": "+ person[key]);

//for-of: for arrays

let colors = ["blue", "red", "green"];

for(let color of colors)
    console.log(color);

//break:
i = 0;
while(i<10){
    console.log(i++);
    if(i === 2) break;
}

//continue:
i = 0;
while(i++<10){
    if(i % 2 !== 0) continue;
    console.log(i);
};


//objects----------------------------------
//-------------------------------------------------
console.log("objects ----------------");

//string:
name = "John";
const message = "Hi " + name + ',\n ...';
const anotherMessage =
`
Hi ${name},
Thank you for...

Regards
Tomas.
`;

console.log(message);
console.log(anotherMessage);


//getters and setters:

person = {
    firstName: "Tomas",
    lastName: "Pesek",
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'John Smith';
console.log(person);















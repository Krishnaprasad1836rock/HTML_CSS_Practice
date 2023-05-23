//in-line comment
/*this is a
multipline comment */
//printing on javascript
//Use Sections individidually to test each section
console.log("HELLO")
//variable declaration
 var i=2;
 i=3;
 var a = "Hello";
 a = a +"Hi";
 // backslash notation
 var b=' I am \\f "doubl"';
 console.log(a);
 var sum = 66/0;
 // String concat
 c ="First";
 c+="Last";
console.log(c);
// string length
var d = c.length;
console.log(d);
// barcket notation
var t = c[0]
console.log(t)
//string concatenation practice using functions
function join (adjective, noun, verb, adverb){
  res="";
  res+= "A " + adjective +" " + noun +" "+ verb + " to the moon "+adverb; 
  return res;
}
console.log(join("Clever","Human","ran","fastly"));
//Array Practice
var arr = ["Krishna",18];
var nested_arr =[["Krishna",18],["Haripriya",36]]; //Nested array
console.log(arr[0]); //access array data with indexes
arr[0]="Krishna Prasad"; //modify array data with indexes
console.log(arr[0]); 
console.log(nested_arr[0][1]); //access multi-dimensional arrays with indexes
arr.push(36); //pushing an element at last in array = arr.push(element)
console.log(arr)
arr.pop() //removing last element in array = arr.pop()
console.log(arr)
arr.shift() //removing first element in array = arr.shift()
console.log(arr)
arr.unshift("Krishna") //adding first element in array = arr.unshift(element)
console.log(arr)
//Functions
/*
function function_name(arguments){
  return value;
}
function_name(arguments);
*/
// Function example
function subtract(a,b){
  return a-b;
}
var c = subtract(30,10);
console.log(c);
/*
Local Variable = Variable declared inside a function is in scope of function only
Global Variable = Variable declared outside a function is in scope for all functions
 */
/*
if (condition){statements;}
Everything is similar to python except one change i.e {}.
 */
function isequal(a,b){
  if(a==b){
    return "Equal";
  }
  return "Not Equal";
}
console.log(isequal(10,12));
/* Strict Equal 
3=='3' => Returns True as it converts both to same datatype
3 === '3' => Returns False as it is Strict Equal To
and operator => In python keyword and is used. In JS, && is used.
or operator => In python keyword or is used. In JS, || is used.
*/
/*Else if
In python we use elif, here we use else if
*/
function gradecalculator(grade){
  if(grade>90){
    return "A grade";
  }
  else if(grade>70){
    return"Distinction";
  }
  else if(grade>30){
    return "Pass";
  }
  else{
    return "Fail";
  }
}
console.log(gradecalculator(91));
/* Switch Statements */
/* switch(number){
  case 1:
    statement;
    break;
  case 2:
    statement;
    break;
    default:
      statement;
      break;
}
*/
var st = 1;
switch(st){
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer ="Beta";
    break;
  case 3:
    answer = "gamma";
    break;
  default:
    answer = "Normal Number";
    break;
}
console.log(answer)
//Returning boolean value from functions
function isless(a,b){
  if(a<b){
    return true;
  }
  else{
    return false;
  }
}
console.log(isless(30,20));
/* Javascsipt Objects 
Similar to arrays, but they have key value pairs like python dictionary.
Value is accessed using dot notation.
var object_name{
  "property_name_1":"value",
  "property_name_1":"value"
};
*/
var mydog = {
  "name":"Tiny",
  "legs":4,
  "tails":1,
};
//Object element accessing using dot notation.
var name = mydog.name;
console.log(name);
//Object element accessing using backet notation.
var legs = mydog["legs"];
console.log(legs);
//Changing Object element accessing using dot notation.
mydog.name="Happy Tiny";
console.log(mydog);
//Adding Object element accessing using dot notation. - add property and value
mydog.friends = ["Blackie","Brownie","Cutie"];
console.log(mydog);
//deleting objects using dot notataion - delete keyword
delete mydog.friends;
console.log(mydog);
//to check if object has a property = .hasOwnProperty
console.log(mydog.hasOwnProperty("name"));
// array of objects
var arr_obj = [
  {
    "dog1":"Tiny",
    "legs":4,
    "Tails":1
  },
  {
    "dog2":"Brownie",
    "legs2":3,
    "Tails2":2
  }
]
console.log(arr_obj[1].legs2); //Accessing - For Array - [], For Object - .
console.log(arr_obj[1])
/* While loop => Everything is same as python , except {}
For loop => Everything is same as python , except {}
*/
var i=0;
arr=[];
while(i<6){ 
  arr.push(i);
  i++;
}
console.log(arr)
prr1=[]
for(var i=1;i<=5;i+=1){
  prr1.push(i)
}
console.log(prr1)
/* Looping through nested array using for loops*/
nested_arr = [[1,2,3],[4,5,6],[7,8,9]];
sum=0;
for(var i=0;i<nested_arr.length;i++){
  for(var j=0;j<nested_arr[i].length;j++){
    sum+=nested_arr[i][j]
  }
}
console.log(sum);
/* Do while Loop = Similar to while loop. Add while at last and start with do.
i=0;
do {
  console.log(i);
  i=i+1;
}while (i<=5)*/
/* Create Look Up Table */
var table=[
  {
    "name":"Krishna",
    "number": "9876543210",
    "id":"123"
  },
  {
    "name":"Harris",
    "number":"0123456789",
    "id":"456"
  },
  {
    "name":"Ross",
    "number":"3216549870",
    "id":"789"
  }
]
function lookup(name,property){ //Returns number of a name.
  for(var i=0;i<table.length;i++){
    if (table[i].name == name){
      if(table[i][property]){
        return  table[i][property];
      }
      else{
        a = "Invalid Property";
      }
    }
    else{
      a =  "Name not present";
    }
  }
  return a;
}
console.log(lookup("Harris","number"));
/*
Random Numbers generation
For random decimal b/w 0 and 1 => Math.random()
For random number less than a number(Here 20) = > Math.floor(Math.random()*20)
For random number within range(Here 10 - 20) = > Math.floor(Math.random()* (max-min+1))+min 
*/
console.log(Math.floor(Math.random() * 10)) //random below a number
function random_within_range(min,max){ //random no within a range
  return Math.floor(Math.random()*(max-min+1))+min
}
console.log(random_within_range(10,20))
/* parseInt Function 
To convert string to number = parseInt(str)
To convert string(binary) to number = parseInt(str, 2) Similar for other radix
*/
console.log(parseInt("123"));
console.log(parseInt("1011",2));
/* Ternary Operator 
(condition)?If True statements: If False Statements;
*/
var a=5;
console.log(a>0?"positive":a<0?"negative":"zero")
/*
Difference between let and var => Declaring variables 
1. Advantage of let over var => It lets user to declare a variable only once.
a. let a = 5;
   let a = 7; Gives error
b. var a = 5;
   var a = 7; Doesn't give error
2. Disadvantage of let over var => It's scope is within braces only unlike var.
3. A variable declared using const is read only and cannot be rechanged. 
*/
/* Constant array mutation */
const arr_const = [2,5,3];
arr_const[0]=3;
arr_const[1]=2;
arr_const[2]=5;
console.log(arr_const) //Here const value is changed.
Object.freeze(arr_const) 
arr_const[0]=2;
arr_const[1]=5;
arr_const[2]=3;
console.log(arr_const) // To prevent array mutation, use Object.freeze method.
/* Arrow Functions To Shorten function
var m = function(){
  return a;
}
var m => () => a;
var function_name =  (arguments) => return; To remember -> NAR
*/
var concat_array = (arr1,arr2) => arr1.concat(arr2);
console.log(concat_array([1,2],[3,4,5]));
/* Find Square of only positive integers in an array */
var square_positive = (arr) => arr.filter(num => Number.isInteger(num) && num>0).map(x => x *x);
console.log(square_positive([1,2,3,-4,5,6,0.23]))
/* Spread Operator */
arr1 = [1,2,3,4];
arr2 = arr1;
arr1[0]=2;
console.log(arr2) // Here arr2 also changes inspite of changes only made arr1
// To prevent this use spread operator
arr1 = [1,2,3,4];
arr2 = [...arr1]; // This means arr2 copies only contents of arr1
arr1[0]=2;
console.log(arr2); //Now arr2 doesn't change
/* Destruction= Easy way to store values from object */
// Without Destruction
var obj ={a:34, b:36,c:38};
a = obj.a;
b = obj.b;
c = obj.c;
// Faster Method
var {a : v, b:v1, c:v2} = obj; // Just copy of part of Object you want to access
console.log(v2)
//Destruction for array
var [x,y,,,z]=[1,2,3,4,5]
console.log(x,y,z)
// Destruction To Remove elements
arr1 = [1,2,3,4,5]
var [,,...arr] = arr1; // Using Destruction and spread to remove 1st 2 elements in an array
console.log(arr)
/* Advantages of using BACK Tick for strings 
a. Seperate Lines
b. Accessing Object values using ${}
*/
var obj1={name:"KP",age:"100"};
var ss = `My name is ${obj1.name} and my age is ${obj1.age}
Hello Guys!!!!`
console.log(ss)
/* 
Constructor
var object = new class(attribute_of_object)
*/
class Vegetable{
  constructor(name){
    this.name = name;
  }
}
var a = new Vegetable('carrot');
console.log(a);
/* Constructor, getter and setter */
class temp_C{
  constructor(temp_F){
    this._temp = (5/9)*(temp_F-32);
  }
  get temperature(){ // to get value use different name, eg- ._temp can be accessed using .temperature
    return this._temp 
  }
  set temperature(temp_F){ //To set value using different name, eg- here ._temp is replaced by .temperature
    this._temp = temp_F;
  }
}
var a = new temp_C('32');
var b = a.temperature;
console.log(a,b)
a.temperature = 26;
console.log(a)
/* To import function from another file 
Put export to function to be imported by another file
import {function_name}  from {file_name}
*/





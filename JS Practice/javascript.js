//in-line comment
/*this is a
multipline comment */
//printing on javascript
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
    answer = "Normal Number"
}
console.log(answer)
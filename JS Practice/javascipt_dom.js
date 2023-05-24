console.log("Hello");
/* 1. DOM Manipulation 
1. getElementById() => Easiest way to get element
const title = document.getElementById('ID');

2. getElementByClassName() =>Returns all elements defined with a specified class name
const items = getElementByClassName('Class name');
Returns all elements with the specified class name in an array

3. getElementsByTagName() => Returns all elements with a particular tag name.
const list = getElementByTagName('li');
 Returns all elements with the specified tag name in an array

4. querySelector() => To select 1st item that matches the selector given. 
It can accept all CSS style selectors allowing selection using tag/class/id
const container = document.querySelector('div');
For Id => const container = document.querySelector('#id');
For Class => const container = document.querySelector('.class-name');

5. querySelectorAll()=> To select all item that matches the selector given. 
It can accept all CSS style selectors allowing selection using tag/class/id
const container = document.querySelectorAll('div');
*/ 

/* 2. To apply style to a particular element
const title = document.querySelector('#main-heading');
title.style.color = 'red' => Use style and css attribute you wish to change

To apply style to a many elements with a particular condition
const list-items = document.querySelectorAll('li');
for(i=0; i<list-iems.length;i++){
  list-iems[i].style.fontSize = 5;
}

To Remember In JS -> font-size in CSS is replaced by fontSize in JS
*/

/* 3. Creating Elements 
eg :- Adding Rahul To List
For list
<ul>
<li class="li_style">Narendra<span>Modi</span></li>
<li class="li_style">Yogi</li>
<li class="li_style">Mamata</li>
</ul>

const ul = document.querySelector('ul'); // to access ul
const li = document.createElement('li'); // To create li item
ul.append(li)
li.innerText = 'Rahul'
li.setAttribute("class","li_style") => it assigns class to a given element
Another way => li.classList.add('class-name')
To check if li belongs to particular class=> li.classList.contains('class-name') 

//Modifying the text . To Remember=> inner wear
const t = document.querySelector('.li-style')
t.innerText => Narendra Modi
t.textContent => Narendra
               Modi
t.innerHTML => Narendra<span>Modi</span>

// To remove element -> li.remove()

*/

/* 4. Traverse the DOM - 3 major => parent, child, sibling

//Traverse The DOM

//Parent Node Traversal
let ul =document.querySelector('ul');
console.log(ul.parentNode) 

//Child Node Traversal
let ul =document.querySelector('ul');
console.log(ul.childNodes) or ul.children for only elements  => Stores all Child Nodes in an array
console.log(ul.firstElementChild) => Returns First Child Node
console.log(ul.lastElementChild) => Returns Last Child Node

//Sibling Node Traversal
let ul =document.querySelector('ul');
console.log(ul.previousElementSibling); 
console.log(ul.nextElementSibling);
 */

/*5. Event Listners

*/
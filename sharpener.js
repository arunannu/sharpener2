// console.log(document.URL)
// console.log(Document.title)
// document.title=123;
// console.log(document.Type)
// console.log(document.head)
// console.log(document.boby)
// console.log(document.all)
// console.log(document.all[15])
// console.log(document.forms[0])
//  console.log(document.links)
//  console.log(document.images)
//  //getelementid
 //console.log(document.getElementById('header-title'))
//   var headerTitle=document.getElementById('header-title')
//   var header = document.getElementById('main-header')
//   console.log(headerTitle)
//  headerTitle.textContent='Arun';
 // headerTitle.innerText='kushwaha';
//  console.log(headerTitle.innerText);
//headerTitle.innerHTML="<h3>hello</h3>";
// headerTitle.style.borderBottom='solid 3px #000';
 
// for(vari=0;i<Items.length;i++)
// {
   // item[i].style.backgroundColor='black';

// }
//getElementbytagname
// //items[1].style.backgroundColor='yellow';
//getelementbyclassname
// var items=document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1]);
// items[3].style.fontWeight='bold'
// items[2].style.backgroundColor = 'yellow';
// items[2].style.backgroundColor = '#f4f4f4';
//}
//queryselecter//
// var  header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';
// var input=document.querySelector('input');
// input.value='Hello world';
// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND"
// var item=document.querySelector('.list-group-item');
// item.style.color='green'
// var secondItem =document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color='coral';
// var thirdItem =document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.color='red';

// var thirdItem =document.querySelector('.list-group-item:nth-child(4)')
// thirdItem.style.color='yellow';
//quiryselectorall
// var titles=document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent='shubhi'
// titles[1].textContent='Arun'
// var headers=document.querySelectorAll('header')
// console.log(headers)
// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++)
// {
//    odd[i].style.backgroundColor='green'
// }
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<even.length;i++)
// {
//    even[i].style.backgroundColor='yellow'
// }
//traveling the DOM
var item=document.querySelector('#items');
console.log(item.parentNode);
item.parentNode.style.backgroundColor='#003'
console.log(item.parentNode.parentNode)
item.parentNode.parentNode.style.backgroundColor='red';
//PARENTELEMENT
//var item=document.querySelector('#items');
console.log(item.parentElement);
item.parentElement.style.backgroundColor='#003'
console.log(item.parentElement.parentElement)
item.parentElement.parentElement.style.backgroundColor='red';

//CHILDNODE
//var item=document.querySelector('#items');
console.log(item.childNodes);
item.childNodes.style.backgroundColor='#003'
console.log(item.childNodes.childNodes)
item.childNodes.childNodes.style.backgroundColor='red';
console.log(item.children)
console.log(item.children[0])
console.log(item.children[1])
console.log(item.children[2])
console.log(item.children[3])
item.children[3].style.backgroundColor='yellow';
//FRISTCHILD
console.log(item.firstChild)
//FIRSTELEMENTCHILD
console.log(item.firstElementChild)
item.firstElementChild.textContent='a'
//LASTCHILD
console.log(item.lastChild)
LASTELEMENTCHILD
console.log(item.lastElementChild);
item.lastElementChild.textContent='HELLO 2'
NEXTSIBLING
console.log(item.nextSibling)
//NEXTELEMENTSIBLING
console.log(item.nextElementSibling)
//PREVIOUSSIBLING
console.log(item.previousSibling)
//PREVIOUSELEMENTSIBLING
console.log(item.previousElementSibling)
item.previousElementSibling.style.backgroundColor='green'

// CREATE A DIV
var newDiv=document.createElement('div')
//Add class
newDiv.className='shubhi'
// add id
newDiv.id='Kushwaha'
// Addatrr
newDiv.setAttribute('title','Hello Div');


//console.log(newDiv)
//CREATE TEXT NODE
var newDiv=document.createTextNode('Hello World')
//Add text to div
newDiv.appendChild(newDivText);
console.log(newDiv)







// // function squarenumber(a,b){

// //     function square(num){

// //         return num*num;
// //     }

// //         const sa= square(a);
// //     const sb= square(b);

// //     return sa + sb;
// // }


// // console.log(squarenumber(4,3));


// const greet = (count) =>{ for(let a=1; a<=count;a++){console.log('Hello World ->',a)};
// }

// greet(4);


// // const great = (count) => for(let a=1; a<=count;a++) console.log('Hello Brother -> ',a)
// // const great = (count) => count*count;

// // console.log(great(5));

// const calculate = (a,b,operation) => {

//     return operation(a,b);
// }

// const result = calculate(4,5,function(num1,num2){
//     return num1+num2;
// });

// console.log(result);


// // subtraction
// const subtraction = (a,b) => a-b;
// const subresult = calculate(8,4,subtraction);

// console.log(subresult)

// const heading = document.querySelectorAll('.show');

// let currentIndex = 0;

// document.getElementById('btn').addEventListener('click', function(){

//     if(currentIndex < heading.length){
//         heading[currentIndex].style.visibility = 'visible' ;
//         currentIndex++;
//     }else{
//         alert('Everything is Visible Now');
//     }
// });


// --------------------------------------

// function cheese(callback){
//     setTimeout(()=>{
//         const cheese= "🧀";
//         console.log('Here is the Cheese', cheese);
//         callback(cheese);
//     },2000)

// }

// function callback(){
//     console.log('Got Your Cheese', cheese)
// }

// const form = document.getElementById('form');
// const tablebody = document.querySelector('#outputTable tbody')
//  let serialNum = 1;

// form.addEventListener('submit', function(event){
//     event.preventDefault();  // Stop Page to Reload

// // Getting Values
// const productname = document.getElementById('product_name').value;
// const hsn = document.getElementById('hsn').value;
// const qty = document.getElementById('qty').value;
// const rate = document.getElementById('rate').value;
// const tax = document.getElementById('tax').value;
// const amount= (rate*qty)+(rate*qty)*tax/100;



// // Creatie NEW Row 

// const newRow  =document.createElement('tr')

// newRow.innerHTML = `

// <td>${serialNum++}</td>
//         <td>${productname}</td>
//         <td>${hsn}</td>
//         <td>${qty}</td>
//         <td>${rate}</td>
//         <td>${tax}</td>
//         <td>${amount}</td>
// `
// // Append the Row

// tablebody.appendChild(newRow);


// form.reset(); // optional

// });


// ----------------------------
// let phoneNum = "917017308838";

// let name= document.querySelector('#formbox');
// let personname = document.getElementById('name').value;

// let message = "Your name is ${personname}";
// let encodedMessage = encodeURIComponent(message);

// let url = `https://wa.me/${phoneNum}?text=${encodedMessage}`;

// formbox.addEventListner('submit',
// window.open(url)

// );


// let formbox = document.querySelector('#formbox');
// const Person = new Object();

// formbox.addEventListener('submit', function(e) {
//   e.preventDefault();

//   //let personname = document.getElementById('name').value;
//   Person.firstname = document.getElementById('name').value;
//   let phoneNum = document.getElementById("number").value;
//   let message = `Your name is ${Person.firstname}`;
//   let encodedMessage = encodeURIComponent(message);
//   let url = `https://wa.me/${phoneNum}?text=${encodedMessage}`;

//   window.open(url);
// });

console.log("Hello World")
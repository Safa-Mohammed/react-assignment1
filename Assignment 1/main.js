/*
js quick review :
-module (block of code)
-arrow fun

*/


// import * as workData from './hr.js'

// console.log(workData.breakHr); // 1

// import test1 from './hr.js';

// test1(); 

// arrow fn >> solve issue this , elementation reduce code

// let test =( name) =>{
//   return  console.log(`hello ${name}`);

// }
// test('safa')
// //elementation reduce code in above code

// let test2 = name =>{
//     console.log(`hello ${name}`);

// }
// test2('safwa')




//new str /arr method

// let username ='safamohammed';
// console.log(username.endsWith('g')); // F
//console.log(username.startsWith('s')); //t
// console.log(username.includes('g')); ;// f not contain f

// map

// let friends = [ 'Sara','Safa','amany','hadeer']
// console.log(friends.map((friend)=> {return ` <li>${friend}</li>` })); // op is : (4) [' <li>Sara</li>', ' <li>Safa</li>', ' <li>amany</li>', ' <li>hadeer</li>']


// let numbers = [1, 2, 3, 4];
// console.log(numbers.map((number) => { return `<li>${number * 2}</li>` }));


// filter 


// spread operator
// let salaries = [3333, 4322];

// function calcsal(x, y) {
//     console.log(y + x);
// }

// calcsal(...salaries); // Output: 7655


//destructing استخرج حاجة من اوبجكت
// let username = {
//     name: 'sada',
//     age: '22',
//     child: {
//         namech: 'ali',
//         agech: '12'
//     }
// }

// // Destructuring from username.child
// let { agech, namech } = username.child;

// console.log(namech); // ali
// console.log(agech);  // 12

// // let {name,age} = username; 



//template litral

// let test =(name)=>{
//     return `hello ${name}`
// }
// console.log(test('fs'));


// fetch ,async , await


// let test1=()=>{
//     console.log('test1');
// }

// let test2=()=>{
//     console.log('test2');
// }



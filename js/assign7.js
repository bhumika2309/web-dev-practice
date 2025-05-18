// question1
let nums = [1,3,5,7,9];
 const square = nums.map( (num) => num*num );
 console.log(square);

 let sum = square.reduce((sum,el) => sum+el);
 console.log(sum);

 let avg = sum/nums.length;
 console.log(avg)
 
//question 2
let array = [1,3,5,8,0];
let newArry = array.map((num) => num+5);
console.log(newArry);

//question 3 
let string = "apnacollege";
let uperArry= string.toUpperCase();
array = [...uperArry];
console.log(array);
//or 
let strings = ["bob","emily","katherine"];
console.log(strings.map((el) => el.toUpperCase()) );

//question 4
const doubleAndReturnArgs = (arr,...args) =>[
    ...arr,
    ...args.map((v)=>v*2)
];

//question 5
const mergeObjects = (obj1,obj2) =>({...obj1,...obj2});
mergeObjects({a:1,b:2},{c:3,d:4});
 


// functions
function hello(){
    console.log("hello everyone");
}

//hello();

function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}

//print1to5();

function isAdult(){
    age = 18;
    if(age<=18){
        console.log("is Adult");
    }
    else{
        console.log("not adult")
    }
}

isAdult();

//practice quetion
function printPoem(){
    console.log("When some people talk about money",
        "They speak as if it were a mysterious lover",
        "Who went out to buy milk and never",
       " Came back, and it makes me nostalgic",
        "For the years I lived on coffee and bread,",
        "Hungry all the time, walking to work on payday",
        "Like a woman journeying for water",
        "From a village without a well, then living",
        "One or two nights like everyone else",
        "On roast chicken and red wine.")
    }
    printPoem();

    //practice question
    function rollDice(){
        number = Math.floor(Math.random()*6)+1;
        console.log(number)
    }
    rollDice();

    // passing aguements 
    function personInfo(pname,age){
      console.log(`${pname}'s age is ${age}`);
    }
    personInfo("bhumika",20);
    personInfo("Apoora",20);

    function sum(a,b){
        console.log(a+b);
    }
    sum(2,3);
    sum(2,7);
    sum(8,3);
    sum(2,0);

//praqctice question
function avg(a,b,c){
    console.log((a+b+c)/3);
}   
avg(2,2,2); 

//practice question
function table(number){
    for(let i=1; i<=10; i++){
        console.log(i*number);
    }
}
table(5);
//return 
function sum(a,b){
    return a+b;
}
console.log(sum(2,4));

function isAdult(age){
    if(age>=18){
        return "is adult";
    }
    else{
        return "not adult"
    }
    console.log("bye bye");
}
console.log(isAdult(23));

//practice question 
function nsum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum+i;
    }
    return sum;
}
console.log(nsum(23));

//practice quetion 
let str = ["hi","hello","i","am","bhumika"];
function concat(str){
    let result="";
    for(let i=0; i<str.length ; i++){
        result=result+str[i];
    }
    return result;
}
console.log(concat(str));

//scope
let suum = 54; // global scope 
function calSum(a,b){
    let suum = a+b; //function scope 
    console.log(suum);
}
 calSum(1,3);
 //there can be same name of two inside and outside the function 
 //global can be used anywhere  but function scope can be used only inside the function

//blockscope
for (let i=1; i<=5; i++){
    console.log(i) 
}
// in block scope the var defined inside the block can be acessed inside the block only 
//if we use "var" keyword than it can be accessed outside the block also 
{
    var a = 1;
}
console.log(a);
let page = 25;
if(page>=18){
    let strr = "is adult";
    console.log(strr);
}
//console.log(strr);
//lexical scope
function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(y);
    }
    
    innerFunc();
}
outerFunc();
//in lexical scope we can ise the outside functions in inside function but vice versa cannot be possible
//the inner function are also "function scope "so we cannot use the inner functions outside

let variable = function(a,b){
    return a+b;
}
console.log(variable(1,5));

let helloo = function(){
    return "hello";
}
console.log(helloo());
//higher order function 
function multipleGreet(func, count){
    for(let i=1; i<=count;i++) {
         func();
    }
}
let greet = function(){
    console.log("hello");
}
multipleGreet(greet,1000);

//higher order function return 
function oddEvenFactory(request){
  if(request=="odd"){
    return function(n){
        console.log(!(n%2 == 0));
    }
}
    else if(request=="even"){
        return function(n){
            console.log(n%2 == 0);
        }
        
  }
  else {
    console.log("invalid request")
  }
}
let request = "odd";
let func = oddEvenFactory(request);
func(5);

//methods
const calculator = {
    num: 55,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};





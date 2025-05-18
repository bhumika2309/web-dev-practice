 let name = "bhumika";
 console.log(name.length);
 console.log(name[name.length-1]);
 let ab="apnacollage"+123;
 console.log(ab);
 let emp = ""
 console.log(emp.length);
 let emp2 = " "
 console.log(emp2.length);
 let color = "green";
 if(color == "red"){
    console.log("stop");
 }
if(color == "yellow"){
    console.log("wait");
}
if(color == "green"){
    console.log("go");
}
let size = "XL";
if(size == "XL"){
    console.log("price is 250");
}
else if(size == "L"){
    console.log("price is 200");
}
else if(size == "M"){
    console.log("price is 100");
}
else{
    console.log("price is 50");
}
let string = "good string";
if(string[0]==="a" && string.length >= 3){
    console.log("good");
}
else{
    console.log("bad");
}
let num = 200;
if(num%10 === 0){
    console.log("good");
}
else{
    console.log("bad");
}
// let username = prompt("enter your name:");
// let age = prompt("enter your age:");
// alert(`${username} is ${age} years old`);
let month = "quater 1";
switch(month){
case  "quater 1":
console.log("january , feb , march");
break;
case "quater 2":
console.log("april,may,june");
break;
case"quater 3":
console.log("july ,aug, sep");
break;
case "quater 4":
console.log("oct,nov,dec");
break;
}

let msg = "help!     ";
console.log(msg.trim().toUpperCase());
let arr = ['january','july','march','august']
arr.splice(0,2,'june','july');
console.log(arr);
let ex = [['x',null,'0'],[null,'x',null],['o',null,'x']];
console.log(ex);
console.log(ex[1][0]= 'o');
let aray = [7,9,0,-2];
let n = 3;
console.log(aray.slice(0,n));
console.log(aray.slice(1,n+1));
let stringg= "";
if(stringg==""){
    console.log("blank");
}
for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}
// let movie= "avatar";
// let guess = prompt("enter the movie:");
// while(guess != movie){
//     guess = prompt("enter the movie:"); 
//     if(guess == movie){
//         console.log("u win")
//      }
//      break;
// }

// if(guess === "quit"){
//     console.log("u quit");
// }
let arry = [1,2,3,4,5,6,2,3];
for(i=0; i<arry.length+1; i++){
    if(arry[i] === 2){
        arry.splice(i,1);
    }
}
console.log(arry);
let number = 287152;
count = 0;
let sum = 0;
let copy = number;
while(copy>0){
    count++
    digit = copy%10
    copy = Math.floor(copy/10);
    sum = digit + sum; 
}
console.log(sum);
console.log(count);

let no = 6 ;
fact = 1
for (i=1;i<=6;i++){
   fact = fact*i;
}
console.log(fact);

arrr = [1,5,6,89,0];
largest = 0 
for(i=1;i<=arrr.length;i++){
    if(arrr[i]>largest){
        largest = arrr[i];
    }
}
console.log(largest);

let dice= Math.floor(Math.random()*5)+1
console.log(dice);

const car ={
    carname:"maruti suzuki",
    model:"celerio",
    color:"white"
};
console.log(car.carname);

function printPoem(){
    console.log("jonny jonny yes papa",
        "eating sugsr no papa","telling lie no papa",
        "open your mouth hahahah!"
    )
}
function rollDice(){
    console.log(Math.floor(Math.random()*6)+1);
}

function avg(a,b,c){
    sum = a+b+c;
    avg = sum/3;
    console.log(avg);
}
avg(4,4,4);

function table(n){
    for (i=1;i<=10;i++){
        console.log(n*i);
    }
}
table(7);
let str = ["hi","hello","i","am","bhumika"];
function concat(str){
    let result="";
    for(let i=0; i<str.length ; i++){
        result=result+str[i];
    }
    return result;
}
console.log(concat(str));

let element = [23,56,78,90];
let value = 45;
function larger(element,value){
       for(i=0;i<element.length;i++){
        if(element[i]>value){
            console.log(element[i]);
        }
       }
}
larger(element,value);

let sttr = "abcdabcdefgggh";
function unique(sttr){
    let ans = "";
    for(i=0;i<sttr.length;i++){
         let currChar = sttr[i];
        if(ans.indexOf(currChar)==-1){
            ans += currChar;
        }
    }
    return ans;
}
unique(sttr);








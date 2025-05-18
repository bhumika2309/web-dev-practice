console.log("hello world")
console.log("apna collage")
let a=5;
let b = 3;
console.log("sum is :",a+b)
let pencilPrice = 23;
let penPrice = 14;
let output = "The Total price is :" + (pencilPrice+penPrice)+"ruppes.";
let outputt = `the Total price is : ${pencilPrice+penPrice}ruppees.`
console.log(outputt);
console.log(output);
//in js the comparison operator does not see the type of the value but only see the value for eg 5="5"
console.log(5 =="5");
console.log(5 === '5')
console.log("before")
let age = 15 ;
if(age >= 18){
    console.log("you can vote")
}
else{
    console.log("you caanot vote")
}
console.log("after")
let color = "red";

if(color == "red"){
    console.log("stop");
}
if(color == "green"){
    console.log("go")
}
if (color == "yellow"){
    console.log("wait");
}
// let marks = 55;
// if(marks >= 80){
//     console.log("A+")
// }
// else if (marks >=60){
//     console.log("B+")
// }
// else if (marks >=50){
//     console.log("C+")
// }
//practice question
let size = "M"
if (size == "XL"){
    console.log("price is 250rs");
}
else if (size == "L"){
    console.log("Price is 200rs");
}
else if (size == "M"){
    console.log("preice is 150rs");
}
else {
    console.log("Price is 50rs");
}
 let marks = 90;
 if(marks >= 33){
    console.log("pass") 
    if (marks >= 80){
     console.log("grade is O")
    }
    else{
        console.log("grade is A")
    }
 } 
 else {
    console.log("better luck next time")
 }
 // practice question
 let str = "good string"
 if(str[0]==="a" && str.length>=3){
    console.log("good")
 }
 else{
    console.log("bad")
 }
//false ,0,-0,0n(BigInt value),"",null,undifined,NaN have falsy values and rest other have truthy values
//switch statements
let colour = "red"
switch (colour){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("wait");
        break;
    case "green" :
        console.log("go");
        break;
    default :
         console.log("broken light");
         break;
         
}
//practice questions
let day = "4";
switch (day){
    case "1" :
        console.log("monday");
        break;
    case "2" :
         console.log("tuesday");
        break;
    case "3" :
        console.log("wednesday");
        break;
    case "4" :
        console.log("thursday");
        break;
    case "5" :
        console.log("friday");
        break;
    case "6" :
        console.log("saturday");
        break;
     case "7" :
        console.log("sunday");
        break;
    default :
        console.log("invalid");     
}
 //alert("alert!");
 console.error("error");
 console.warn("warn");
 let firstname = prompt("enter your firstname:");  
 console.log(firstname);
 let lastName = prompt("enter your lastName:");
 console.log(lastName);
 console.log(firstname+" "+lastName);
 


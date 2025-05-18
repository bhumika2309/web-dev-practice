let num = 100;
if(num%10 == 0){
    console.log("good");
}
else{
    console.log("bad");
}
let namme= prompt("name:");
let age = prompt("age :");

alert(`${namme} is ${age} years old`);
let months = "quater1";
switch (months){
    case "quater1":
        console.log("January ,Feb,March");
        break;
    case "quater2":
        console.log("April,May,June");
        break;
    case "quater3":
        console.log("July,Auguat,Sep");
        break;
    case "quater4":
        console.log("oct,nov,dec");
        break;
}
str = "apple";
if((str[0]==="A"||str[0]==="a")&& str.length >= 5){
    console.log("good");
}
else{
    console.log("bad");
}
let num1 = 10;
let num2 = 12;
let num3 = 50; 
if(num1>num2){
    if(num1>num3){
        console.log("num1 is >est");
    }
    else{
        console.log("num2 is >est");
    }
}
else{
    if(num3>num2){
        console.log("num3 is >est");
    }
    else{
        console.log("num2 is greatest");
    }
}
let numb1 = "12345"
let numb2 = "39"
if (numb1[numb1.length-1] === numb2[numb2.length-1]){
    console.log("same");
}
else{
    console.log("not same");
}
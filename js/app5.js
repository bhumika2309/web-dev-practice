const student={
    namme : "bhumika",
    age: 23,
    marks:94.5
}
const item={
    namee:"chocolates",
    price: 5,
    color: ["pink","yellow"]
}
 const post={
    username:"@bhumikasahu",
    content:"This is my #firstpost",
    likes: 150,
    reposts:5,
    tags:["@apnacollage","@delta"]
 }
console.log(student.marks);
console.log(item["color"]);
let repost="likes";
console.log(post[repost]);
const props = {
    1:"a",
    2:"b",
    null:"c",
    undefined:"d",
    true:"e",
}
console.log(props.null);
console.log(props[1]);
//so if we make keyword a key in object then js first convert it into a string then compile it
//so there will no error
const passenger = {
    pname:"bhumika sahu",
    paddress:"123 shanti nagar",
    seatno:"LB1",
    city:"jagdalpur"
}
passenger.seatno = "UB1";
console.log(passenger);
passenger.phoneno = 1234;
console.log(passenger);
delete passenger.phoneno;

classInfo = {
    aman : {
     grade:"A+" ,
     marks:94 ,
     city: "pune",
    },
    bhumika :{
        grade:"b+" ,
        marks:95 ,
        city: "jaipur", 
    },
    apoorva:{
        grade:"C+" ,
     marks:92 ,
     city: "mumbai",
    }
}
console.log(classInfo.aman.marks);
console.log(classInfo.apoorva.grade = "a++");

classInfo2 = [
    {
        cname:"aman",
        grade:"A+" ,
        marks:94 ,
        city: "pune",
       },
       {
           cname:"bhumika",
           grade:"b+" ,
           marks:95 ,
           city: "jaipur", 
       },
        {
            cname:"apoorva",
           grade:"C+" ,
           marks:92 ,
           city: "mumbai",
       }
]
console.log(classInfo2);
console.log(classInfo2[0].city);
console.log(classInfo2[2].grade = "a++");

// Math.functions
console.log(Math.abs(-19))//it converts the -ve no. in +ve and +ve in +ve only
console.log(Math.pow(2,4))
console.log(Math.floor(2.9022))//converts into nearst small no 
console.log(Math.ceil(5.5))// converts into nearst larger no.
console.log(Math.random())


// generate random no. from 1 to 10
let random = Math.floor(Math.random()*10)+1;
//console.log(random);

//PRACTICE QUESTIONS
let random2 = Math.floor(Math.random()*100)+1;
//console.log(random2);

let random3 = Math.floor(Math.random()*5)+1;

//guessing game
const number = prompt("Enter the max number:");
console.log(number);
const ranValue = Math.floor(Math.random()*number)+1;
console.log(ranValue);
let guess = prompt("guess the number: ")
while (true){
    if(guess == "quit"){
        console.log("user quit")
        break;
    }
     else if(guess == ranValue){
        console.log("right")
        break;
     }
     else if(guess < ranValue){
        console.log("hint : too small ,try again:")
    }
     else{
        guess = prompt(" hint : too large ,try again : ")
     }
 }


















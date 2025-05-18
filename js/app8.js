//for each function
let arr = [1,2,3,4,5];
let print = function (el){
    console.log(el);
};

arr.forEach(print);

arr.forEach((el) => {
    console.log(el);
});

arr.forEach(function (el) {
    console.log(el);
});

let info = [{
    name : "bhumika",
    marks : 90
},{
    name : "apoorva",
    marks : 98
},{
    name : "hurvashi",
    marks : 96
}];

info.forEach((info) =>{
    console.log(info.name);
});

//map ()
let gpa = info.map((el) =>{
    console.log(el.marks/10);
}
);

//filter()
let nums = [1,2,3,4,5,6,7];
let ans = nums.filter((el) =>{
    return el%2 == 0;
})

// every function 
let elmnt = [2,4,6,7];
elmnt.every((el) => elmnt%2 == 0 );

//reduce function
let numss = [2,3,4,5,6,7];
let result = nums.reduce((max,el) => {
     if(el>max){
        return el;
     }
     else{
        return max;
     }
})

//practice question
 let numbers = [10,34,40,70,78];
  numbers.every((el)=> numbers%10 == 0);

let numbs = [1,2,3,4,5,6,7,8]
let mimimum = numbs.reduce((min,el) =>{
    if(min>el){
        return el;
    }
    else{
        return min;
    }
});


//default parameter 
function sum(a,b=2){
    return a+b;   
}
// if we try to assign the value to first no. thes it will because when we will pass the parameter it will be assigned to fist no and 2nd will be undefined 
//spread (): gives individual value
let arraay = [0,2,3,4,5,6,7,8,9,-1];
let min = Math.min(...arraay);
console.log(min);

console.log(..."apnacollage");

let arr1=[1,3,5,7];
let arr2 = [2,4,6,8];
let mergedArr = [...arr1,...arr2];
console.log(mergedArr);

const data = {
    name: "bhumika sahu",
    email: "bhumikasahu0923@gmail.com"
}
const dataCopy = {...data,id:123,country:"india"};
console.log(dataCopy);

let obj2 = {..."helloeveryone"};

//rest ()
function sum(...args){
    for(i = 0; i< args.length; i++){
        console.log("you gave us:",args[i]);
    }
}

 function minn() {
    console.log(arguments);
}

function sumNum(...numbs){
    return numbs.reduce((sum,el) => sum+el);
}
// this will error because arguements is not a varible it only collects values basically collection of values

function minNum(...arggs){
    return arggs.reduce((min,el) =>{
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    })
}

//destructuring
let names = ["hurvashi","apoorva","vaibhav","ishan","saurabh","bhumika"]
let [winner,runnerup,...others] = names;
console.log(winner,runnerup,others);

const student = {
    name :"bhumika sahu",
    age : 14,
    class : 9,
    subjects :["english","maths","computer science","biology","hindi"],
    username :"karan@123",
    password: "abcd",
    city :"pune"
}
let {password:secret,username,city = "mumbai"} = student;
















// this keyword
const student = {
    name:"shradha",
    age:23,
    math:79,
    eng:90,
    phy:89,
    getAvg(){
        console.log(this);
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks ${avg}`);
    }

}
function getAvg() {
    console.log(this);
}

//try and catch 
console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);
} catch (err){
      console.log("there is an error");
      console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
console.log("hello2");

//arrow function 
const sum = (a,b) => {
    console.log(a+b);
};
const pow = (a,b) => {
    console.log(a**b);
};
const cube = n => {
    console.log(n*n*n);
};
const hello= () => {
    console.log("hello world");
};

//arrow function erturn type
const squ = n => n**2;

//setTimeOut()
console.log("hie There");
setTimeout(() => {
    console.log("Apna college");
},4000);
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");

//setInterval
let id = setInterval(() => {
    console.log("Apna college");
},2000);
console.log(id);
let id2 = setInterval(() => {
    console.log("hie there");
},2000);
console.log(id2)

// in function the scope is same as the scope of calling object
// but in arrow function the scope is same sa the scope of parent object
const person = {
      name: "aman",
      marks: 95,
      prop: this ,
      getname: function (){
            console.log(this); // parents
            return this.name; 
},
getMarks: () => {
    console.log(this);
    return this.marks;
}

};

// in this if we call getname function with object person the scope will be of object so output will be "student"
// but in arrow function we call function with object then the scope will of parents like the output will ne "window "
//practice question 
const square = (n) => n*n;
console.log(square(4)); 

let hw = setInterval(() =>{
    console.log("hello world")
},2000);
console.log(hw);
setTimeout(()  => {
    clearInterval(hw);
    console.log("cleared ")
},10000);


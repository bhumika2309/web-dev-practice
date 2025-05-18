// question 1
const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total += number;
    }
  return total / arr.length;
};

let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));

//question 2
const isEven = (n) =>{
    if (n%2 == 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

//question 3
const object = {
    message:"hello,world!",

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage,1000);



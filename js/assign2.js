//QUESTION 1
let array = [7,9,0,-2];
let n = 3;
console.log(array.slice(0,3));

//QUESTION 2
let array2 = [7,9,0,-2];
console.log(array2.slice(1,array2.length+1))

//QUESTION 3
let str = "bhumika";
if (str == null)
    {
        console.log("string is empty ");
    } 
else{
    console.log("not empty");
}    

//  QUESTION 4 
let str2 = "BHumika";
let lcstr = str2.toLowerCase();
if (str2 == lcstr){
    console.log("same");
}
else{
    console.log("not same")
}

// QUESTION 5
let variable = "         hello         ";
console.log(variable.trim());

// QUESTION 6
let array3 = [1 , 2 , 4 , 6];
let item = 4;
if (array3.indexOf(item) != -1  ){
    console.log("exists");
}
else{
     console.log('not exsits');
}


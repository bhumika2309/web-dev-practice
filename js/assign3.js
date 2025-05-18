// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//QUESTION 1
let arr=[1,2,3,4,5,6,2,3]
let num = 2;
for(let i=0; i<arr.length; i++){
 if(arr[i] == num){
  arr.splice(i,1);
 }
}
console.log(arr);

//QUESTION 2
let number1=287152;
let count1=0;
let copy1 = number1;
while(copy1 > 1){
    count1++;
    copy1 = Math.floor(copy/10);
}
console.log( count1);

//QUESTION 3 
let number2=287152;
sum = 0;
let copy2=number;
while(copy2>0){
    digit=copy2%10;
    sum+=digit;
    copy2=Math.floor(copy2/10);
}
console.log(sum)

//QUESTION 4
let num2=prompt("enter the number: ");
let fact = 1;
for(let i=1;i<=num2;i++){
     fact*=i
}
console.log(fact)

//QUESTION 5
let arr2=[5,7,89,4,6,2];
let largest = 0;
for(let i=0;i<=arr2.length; i++) {
    if(largest < arr2[i]){
        largest = arr2[i];
    }
}
console.log(largest);
















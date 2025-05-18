// Online Javascript Editor for free  
// Write, Edit and Run your Javascript code using JS Online Compiler

for(let i = 1; i<=5; i++){
    console.log(i);
}

for(let i=5; i>=1; i--){
    console.log(i);
} 
 //print all odd numbers
 for(let i=1; i<=15; i+=2){
     console.log(i);
 }
 //print all even numbers from 2 to 10
 for(let i=2; i<=10; i+=2){
     console.log(i);
 }
 //infinite loop
 for(let i=1; ; i++){
     console.log(i);
 }
// multiplication table of 5
 for(k=5; k<=50; k+=5){
     console.log(k);
 }
 console.log("table of 5");
 let n = prompt("write a number:");
 n = parseInt(n);
 for(i=n; i<=n*10; i+=n){
     console.log(i);
 }
for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}
let ii=1;
while(ii<=5){
    console.log(i);
    ii++;
}
let i=20;
while(i>=0){
    console.log(i);
    i--;
}
//fav movie game
let fav="avatar";
let guess=prompt("enter the movie name:");
while(fav!=guess){
    if (guess =="quit"){
        console.log("u quit");
        break;
    }
    console.log("wrong");
     guess=prompt("enter the movie name:");
}
if(fav==guess){
console.log("correct");
 }
//loops for arrays
let fruitts = ["mango","litchi","banana","apple","guava"];
for(let i=0; i<fruitts.length; i++){
    console.log(i,fruitts[i]);
}
 let fruits = ["mango","litchi","banana","apple","guava"];
 for(let i=fruits.length-1; i>=0; i--){
     console.log(i,fruits[i]);
 }
let actors = [["sid","kartik","rajkumar"],["shradha","kriti","deepika"]];
for(let i=0; i<actors.length; i++){
    console.log(i,actors[i]);
    for(j=0;j<actors[i].length; j++){
        console.log(j,actors[i][j]);
    }
}
//for of loop
let fruittts = ["mango","litchi","banana","apple","guava"];
for(fruittts of fruits){
  console.log(fruitttts);     
}
let actores = [["sid","kartik","rajkumar"],["shradha","kriti","deepika"]];
for(list of actores){
    for(name of list){
        console.log(name);
    }
}
//todo app
let todo =[];
let req = (prompt("enter the task: "));
while (true){
    if(req == "quit"){
        console.log("quiting app");
        break;
    }

    else if (req == "list" ){
    console.log("________")
    for(let i=0; i<todo.length; i++){
        console.log(i, todo[i]);
    }
  console.log("__________") 
  }

    else if (req == "add"){
    let task= prompt("enter the task: ");
    todo.push(task);
    console.log("added");
    }
    else if (req == "delete"){
    let index= prompt("enter the task index: "); 
    todo.splice(index,1);
    // console.log()
    }
    req = (prompt("enter the task: "));
}
  














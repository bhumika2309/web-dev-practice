// async functions
async function greet() {
    return "hello everyone";
    
    throw("page not found");
}
greet()
.then((result) =>{
    console.log("poromise resolved");
    console.log(result)
})
.catch((error) =>{
    console.log("promise rejected");
    console.log(error)
})

// let demo = async () =>{
//     return 5;
// }
// await 
function getNum(){
    return new Promise((resolve, reject) =>{
         setTimeout(() =>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve()
         },1000)
    }) 
    
}
async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}
demo();

h1= document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject) =>{
       setTimeout(() =>{
        let num2 = Math.floor(Math.random()*10)+1
        if(num2 >5){
            reject("promise rejected")
        }
          h1.style.color =color;
          resolve("color changed");
       },delay)
    })
}
async function change(){
    try{

    
       await changeColor("red",1000);
       await changeColor("yellow",1000);
       await changeColor("yellowgreen",1000);
       changeColor("pink",1000);
    }
    catch(err){
        console.log(err);
    }

    a = 4;
sum = a + 4;
console.log(sum);
    

}



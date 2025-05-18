// function one(){
//     return 1;
// }
// function two(){
//     return one() + one()
// }
// function three(){
//     let ans= two() + one() 
//     console.log(ans)
// }
// three();
// let a = 25 
// console.log(a)
// let b = 10;
// console.log(b)
// console.log(a+b);
// //synchronus nature

// setTimeout(() => {
//     console.log("hello");
// }, 5000);
// setTimeout(() => {
//     console.log("everyone");
// }, 5000)

// console.log("hello everyone")
// // asynchronus nature

h1= document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        h1.style.color = color;
        resolve("color changed");
    },delay );
})
}
changeColor("red",1000)
.then(()=>{
    console.log("color changed");
    return changeColor("yellow",1000);
})
.then(() =>{
    console.log("color changed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("color changed");
})


// changeColor("red",1000, ()=>{
//     changeColor("orange",1000, ()=>{ 
//         changeColor("green",1000, ()=>{
//             changeColor("yellow",1000, ()=>{
//                 changeColor("blue",1000, ()=>{

//                 })
//             })
//         })
//     })
// })

 function saveToDb(Data,success,failure) {
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if (internetSpeed > 4){
        success();
    } else {
        console.log("weak connection.data not saved");
    }
}

saveToDb("apna colloage",()=>{
    console.log("your data is saved");
    saveToDb("bhumika sahu",()=>{
        console.log("data 2 saved");
         saveToDb("sahardha",()=>{
            console.log("data 3 asved");
        // },() => {
        //    // console.log("fail3")
         }
    )
    },
    // () => {
    //     //console.log("fail 2");
    // }
)
},//() =>{
    //console.log("fail 1");
//}
)
// function saveToDb(Data) {
//     return new Promise((resolve , reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if (internetSpeed > 4){
//             resolve("data is saved");
//         }
//         else{
//             reject("weak connection ")
//         }
//     });
    
    
// }
// saveToDb("apnacollage")
// .then((result) =>{
//     console.log("data1 saved")
//     console.log(result)
//     return saveToDb("bhumika");

// })
// .then((result) =>{
//     console.log("data 2 was saved");
//     console.log(result)
//     return saveToDb("sahu");
// })
// .then((result)=>{
//      console.log("data 3 was saved");
//      console.log(result)
// })
// .catch((error) =>{
//     console.log("promise was rejected")
//     console.log(error)
// })


// let img = document.getElementsByClassName("oldImg");
// for(i=0;i<img.length;i++){
//     img[i].src = "assets/spiderman_img.png";
//     console.log(`valeue of ${i} is changed`);
// }
// document.getElementsByTagName("p");
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("p"));
// console.dir(document.querySelectorAll("p"));
// let heading = document.querySelector("h1");
// heading.innerHTML = `<u>${heading.innerText}</u>`;
// let para= document.querySelector("p");
// para.innerText = "Hi i am Peter Parker";
// let imgg= document.querySelector("img");
// imgg.getAttribute("id");
// //imgg.setAttribute('id','spidermanImg');

// let links= document.querySelectorAll(".box a");
// for(let i=0; i<links.length; i++){
//     links[i].style.color ="green";
// }
// heading.classList.add("green");
// heading.classList.add("underline");
// heading.classList.remove("underline");
// heading.classList.contains("underline");
// heading.classList.toggle("underline");
// let box = document.querySelector(".box");
// box.classList.add("yellowBg");
// let h4 =document.querySelector("h4"); 

let para1 = document.createElement("p");
para1.innerText="hey I'm red";
document.querySelector("body").appendChild(para1);
para1.style.color="red";
let heading1 = document.createElement("h3");
heading1.innerText="hey I'm blue 3";
document.querySelector("body").appendChild(heading1);
heading1.style.color="blue";
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");
h1.innerText = "i am div";
para2.innerText = "me too ";
document.querySelector("body").appendChild(div);
div.append(h1);
div.append(para2);
div.classList.add("box")

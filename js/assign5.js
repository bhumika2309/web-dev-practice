//question 1
let arr=[1,4,5,7,8,9,10];
let num = 5;
function getElements(arr,num){
  for (i=1;i<=arr.length;i++){
      if (arr[i]>num){
        console.log(arr[i]);
    }
 }
}
getElements(arr,num);

//question 2
str = "abcdabcdefgggh"
function unicar(str){
    let ans = "";
    for(i=0;i<str.length;i++){
     let currchar = str[i];
     if (ans.indexOf(currchar)==-1){
        ans = ans + currchar;        
     }
    }
    return ans;
}
unicar(str);

//qustion 3
let country = ["Australia","Germany","United States of America"];
function getLongest(country){
    let ansIdx = 0 ;
    for(i=0; i<country.length;i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
                }
                
    }
    return country[ansIdx];
}
getLongest(country);

//question 4
stringg = "bhumikasahu"
function countVowel(stringg){
    count = 0;
    for(i=0;i<stringg.length;i++){
        if(stringg.charAt(i)  == "i" ||
           stringg.charAt(i) == "o"||
           stringg.charAt(i) == "u"||
           stringg.charAt(i) == "a"||
           stringg.charAt(i) == "e"
    ){
            count= count + 1;
        }
    }
    return count;
}
countVowel(stringg);

// question 5

let start = 100;
let end = 200;
function generateRandom(start,end){
    let diff = end - start;
    return Math.floor(Math.random()* diff )+start;
}
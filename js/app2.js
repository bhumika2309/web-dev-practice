let str = "       hello          ";
console.log(str);
let newPass = str.trim();
console.log(newPass);
//strings are immutable in JS
let name = "ApnaCollage";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
let msg = "ILoveCoding";
console.log(msg.indexOf("ve"));
newMsg = msg.trim().toUpperCase();
console.log(newMsg)
console.log(msg.slice(3));
console.log(msg.slice(3,5));
console.log(msg.slice(-5)); //11-5=>6
console.log(msg.replace("Love","do"));
console.log(msg.replace("o","d"));
//first occurance will only replace 
let msg2 = "apna apnaapna";
console.log(msg2.replace("apna","sabka"));
console.log(msg.repeat(5));
//Practice question
let msg3 = "      help!";
console.log(msg3.trim().toUpperCase());
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna","Our"));
console.log(name.slice(4,11).replace("l","t").replace("l","t"))
let students = ["apoorva","bhumika","hurvashi"];
console.log(students);
let nums=[2,3,4,5];
console.log(nums);
console.log(nums[2]);
let arr = ["shardha",23.7,4,"s"]; //mixed array
console.log(arr);
let emparr = [];
console.log(emparr);
console.log(arr[0][5]);
arr[0]="bhumika";
console.log(arr);//arrays are mutable
arr[12]="apoorva";
console.log(arr);
console.log(arr.length);
//when in array we put first four elements and then the 12 elements by default the remaining places get filled by emppty value and lenght changes
let cars = ['maruti','BMW','toyota','ferrari'];
console.log(cars);
cars.push ('porshe');
console.log(cars);
cars.pop();
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift('volvo');
console.log(cars);
cars.shift();
console.log(cars);
let month = ['january','july','march','august'];
console.log(month);
console.log(month.shift());
month.shift();
month.unshift('june');
month.unshift('july');
console.log(month);
console.log(month.indexOf('august'));
console.log(month.indexOf('september'));
console.log(month.includes('august'));
console.log(month.concat(cars));
console.log(cars.concat(month));
console.log(cars.reverse());
console.log(cars.slice(1));
console.log(cars.slice(1,2));
console.log(cars.slice());
console.log(cars.slice(-2));
let colors = ['blue','green','orange','red','purple','yellow'];
console.log(colors.splice(3));
//it will return the values of index starting from 3 which are deleted from array
console.log(colors);
colors.push('black');
colors.push('grey')
console.log(colors)
console.log(colors.splice(0,4));
//it will return the values deleting from 0 index
console.log(colors.splice(0,4,"black","voilet"));
//it will delete the value from 0 index and will add the the valus from zero index
console.log(colors)
//console.log( month.sort());
let numbers = [100,34,5897,88];
console.log(numbers.sort());
let letters = ['a','q','r','h','v'];
console.log(letters.sort());
//practice question
let months = ["january","july","march","august"];
console.log(months.splice(0,1));
console.log(months)
console.log(months.splice(0,1,"june"));
console.log(months)
let lang = ['c','c++','html','javascript','pyhon','java','c#','sql']
console.log(lang)
console.log(lang.reverse().indexOf('javascript'));
let arr1 = [1];
let arr2 = [1];
//both have same values but when we compared their values it is not same beacuse both have different address 
//but if we compare the arr1 and arr2 they have the same values 
let arrr = ['q','w','r'];
let arrcopy = arrr;
console.log(arrcopy)
arrcopy.push('b');
console.log(arrr);
//in this case if the values then the address will also be copied and then if we change something in new array then same will be changed in array 
const aray = [1,2,3,4];
console.log(aray);
aray.pop()
aray.push('8');
console.log(aray)
//in consant array if we add or delete the element it can be possible but if we change the complete array it cant be possible 
let nestedarr = [[1,2],[3,4],[5,6]]
console.log(nestedarr);
console.log(nestedarr[1][0]);
//PRACTICE QUESTION
let ex = [['x',null,'o'],[null,'x',null],['o',null,'x']];
console.log(ex);
console.log(ex[0][1]='o');



















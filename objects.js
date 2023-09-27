 //objects
 var ourDog = {
    "name":"bruno",
    "legs": 9,
    "tails": 2,
    "friends":["none"],
    16: "Montana"
};
ourDog.name = "Bosko";
ourDog.bark = "bow-wow";
delete ourDog.tails
ourDog.hasOwnProperty("friends");
var frog = ourDog.name;
var crocodile = ourDog["legs"];
var player = 16;
var playerr = ourDog[player];
console.log(frog);
console.log(crocodile);
console.log(ourDog);
console.log(playerr);
//nested object
var myStorage = {
    "car" : {
        "inside" :{
            "glove box" : "maps",
            "passenger seat": "crumbs",

        },
        "outside": {
            "trunk": "jack",
            }
        }
}
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//while loops-while a specified condition is true
var myArray= [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);
//for loop
var sasa = [];
for(var i = 1; i <50; i+=2) {
    sasa.push(i);
}
console.log(sasa);

var sasaa = [];
for(var i = 10; i >0; i-=2) {
    sasaa.push(i);
}
console.log(sasaa);

var Arr = [9,10,11,12];
var total = 0;
for (var i =0; i<Arr.length; i++){
    total+= Arr[i];
}
console.log(total);

//do...while do something while a certain condition stays true
var aye = [];
var i = 10;
do {
    aye.push(i);
    i++;
}while (i<5)
console.log(i, aye)
// let --- scope is limited to the block statement declraed with
function checkScope(){
    "use strict"// checks common coding mistakes and unsafe action
    let i = "function scope"
    if (true){
        let i = "block scope"
        console.log("Block scope i is :" , i );
        }
    console.log("Block scope i is :" , i );
    return i;


}
checkScope()

 //arrow function
  var myConcat = (arr1,arr2) => arr1.concat(arr2);
  console.log(myConcat([1,2],[3,4,5])); 
  //rest operator (...)
  const sum = (function(){
    return function sum(...args) {
        return args.reduce((a,b)=> a+b, 0);

    };
  }
  )();
  console.log(sum(1,2,3,4));
//spread operator...same as rest operator but it speads/expands an already existing array
// const arr1 = ['Jan', 'Feb','mARCH','APRIL','MAY'];
// let arr2;
// (function(){
//     arr2 =arr1;
//     arr1[0] = 'potato'
// }
// )();
// console.log(arr2);


const arr1 = ['Jan', 'Feb','mARCH','APRIL','MAY'];
let arr2;
(function(){
    arr2 =[...arr1];
    arr1[0] = 'potato'
}
)();
console.log(arr2);
// Destructing an assignment
var voxel = { x:3.6, y:4.2,z:8.9};
var x = voxel.x;
var y = voxel.y;
var z= voxel.z;//old way

const {x:a,y:b,z:c} = voxel;//new way.. get the field of x from object voxel and copy to value a

const AVG_TEMP = {
    today : 77.5,
    tommorrow:79
};
function get_temp(avg){
    "use strict"
    const { tommorrow:leo} = avg;
    return leo;

}
console.log(get_temp(AVG_TEMP));

const TEMP = {
    today : {MIN : 77.5, MAX : 77.9},
    tommorrow:{ MIN : 79, MAX : 88.9}
};
function get_tempp(avgg){
    "use strict"
    const { tommorrow : { MAX: jana}} = avgg;
    return jana;

}
console.log(get_tempp(TEMP));
//destructring an array ---goes in order
const [t,w, ,s]= [1,2,3,4,5,6];
console.log(t,w,s);

let alo=8,ale=9;
(() => {
    "use strict";
    [alo,ale] = [ale,alo];//switch places of array elements

})();
console.log(alo,ale);

//creating strings using temlate literals
const person={
    name : "Madegwa",
    age: 99
};
  const greeting = ` hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting)

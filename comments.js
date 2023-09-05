// they are completely ignored by the browser
// used for explanation purposes
/*  types of data types-undefined, null, boolean, string, symbol, number , object 
Declaring a variable - var myName - "Madesh" , const = 3.14 , let ourName ="OTONGOLO"*/

var a;
const pi = 3.14;
let myName = "Madesh";

var b = 2;
console.log(a);
a= 7;
b=a;
console.log(b);
var sum = 10 + 10;
console.log(sum)
var myStr= "I am a\"double quoted\" string inside\"double quotes\"";
console.log(myStr)

var firstNameLength = 0;
var firstName = "Madegwa"
firstNameLength = firstName.length;
console.log(firstNameLength)
var giant = "Giant"
var fiant ;
fiant = giant[2];
console.log(fiant)
var array = ["Madesh", "Vihiga", 2000];
array.push("kisumu");
console.log(array)


function timesFive(num){
    return num*5;
  
}
console.log(timesFive(5));

function caseSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer= "alpha";
            break;
        case 2:
            answer= "beta";
            break;
        case 3:
            answer= "gamma";
            break;
        case 4:
            answer= "delta";
            break;  
        default:
            answer = "chiplichipli";
            break;              
    }
    return answer;
}
console.log(caseSwitch(3));

function isLess(a,b){
    return a<b;
}
console.log(isLess(10,15))
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

  
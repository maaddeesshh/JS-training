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

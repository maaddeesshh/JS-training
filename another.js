function chipliChipli(maxi){
    var mpoa = "";
    switch(maxi){// name
        case 1:
            mpoa= "maxi alikulana akahepa";
            break;// toka kwa loop
        case 2:
            mpoa= "Maxi alitekwa";
            break;
        case 3:
            mpoa="Maxi hakupeform";
            break;
        case 4:
            mpoa= "Maxi alipeform";
            break;
        default:
            mpoa= "Maxi aliomba maureen";
            break;                

    }
    return mpoa;
    
}
console.log(chipliChipli(9));



function ChipliChipli(maxi){
    var mpoa = "";
    switch(maxi){// name
        case 1:
        case 2:
        case 3:
            mpoa="Maxi hakupeform";
            break;
        case 4:
        case 5:
        case 6:          
            mpoa= "Maxi aliomba maureen";
            break; 
        case 7:
        case 8:
        case 9:
            mpoa = "Maxi alinyimwa";
        default:
            mpoa = "ndakusekiseki mbachwe";
            break;                               

    }
    return mpoa;
    
}
console.log(ChipliChipli(9));


var ochungulo = 10;
var manchester =[];
do {
    manchester.push(ochungulo);
    ochungulo++;
}while(ochungulo<=10)
console.log(manchester);
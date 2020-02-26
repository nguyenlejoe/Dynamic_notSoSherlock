var mainCrime;
var mainHouse;
var mainCulprit;
var houseNum;

var globalCrime;
var globalHouse;
var globalCulprit;


var crimes = {
    inductiveCrimes:[
        {
            title:"Cookie crime",
            clues:[
                "Ladder",
                "FootPrints",
                "Empty Cookie jar"   
            ],
            choices: [
                "Murder",
                "Stolen Cookies",
                "Stolen Game"
            ]
        },
        {
            title:"Stolen Game",
            clues:[
                "Ladder",
                "FootPrints",
                "Empty Cookie jar"   
            ],
            choices: [
                "Murder",
                "Stolen Cookies",
                "Stolen Game"
            ]
        },
        {
            title:"Murder",
            clues:[
                "Ladder",
                "FootPrints",
                "Empty Cookie jar"   
            ],
            choices: [
                "Murder",
                "Stolen Cookies",
                "Stolen Game"
            ]
        },
    ]
}

var townsPeople = {
    people:[
        {
            name: "Henry",
            desc: "Muddy Footprints",
        },
        {
            name: "Alex",
            desc: "Muddy Footprints",
        },
        {
            name: "Noah",
            desc: "Muddy Footprints",
        },
    ]
}

var town = {
    houses:[
        {
            owner: "Henry",
            crime: "",
        },
        {
            owner: "Alex",
            crime: "",
        },
        {
            owner: "Noah",
            crime: "",
        },
    ]
}



function questionRandom(){
    var culprit = Math.floor(Math.random() * 3);
    var crime =  Math.floor(Math.random() * 3);
    var house = Math.floor(Math.random() * 3);
     
    mainCulprit = townsPeople.people[culprit].name;
    mainCrime = crimes.inductiveCrimes[crime].title;
    mainHouse = town.houses[house].owner;
    console.log("culprit is " + mainCulprit + " and the crime is " + mainCrime + " is in " + mainHouse + " house" );

}

function keepData(){
    localStorage.setItem('crimeKey', mainCrime);
    localStorage.setItem('houseKey', mainHouse);
    localStorage.setItem('culpritKey', mainCulprit);
    console.log("The crime is " + globalCrime + " and it is in " + globalHouse +"'s house"+ " the culprit is " + globalCulprit);
}

function checkHouse(houseNum){
   globalCrime = localStorage.getItem('crimeKey');
   globalHouse = localStorage.getItem('houseKey');
   globalCulprit = localStorage.getItem('culpritKey');
    switch(houseNum){
        case 1:
        if(globalHouse === "Henry"){
            alert("You have found the crime!");
        }
        else{
            alert("There seems to be nothing here");
        }
        break;

        case 2:
        if(globalHouse === "Alex"){
            alert("You have found the crime!");
        }
        else{
            alert("There seems to be nothing here");
        }
        break;

        case 3:
        if(globalHouse === "Noah"){
            alert("You have found the crime!");
        }
        else{
            alert("There seems to be nothing here");
        }
        break;

        default:
        break;
    }
}

function enterHouse(houseNum){
    switch(houseNum){
        case 1:
        window.location="testHouse1.html";
        break;

        case 2:
        window.location="testHouse2.html";
        break;

        case 3:
        window.location="testHouse3.html";
        break;

        default:
        break;
    }
}
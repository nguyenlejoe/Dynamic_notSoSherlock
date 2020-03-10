var mainCulprit;
var mainCrime;
var mainHouse;
var newMainCrime;
var newMainHouse;
var repeat = true;
var firstNight = true;



//////////////////////////OBJECT START///////////////////////////////
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
            ],
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

//////////////////////////OBJECT END///////////////////////////////

var culprit = Math.floor(Math.random() * townsPeople.people.length);
var crime =  Math.floor(Math.random() * crimes.inductiveCrimes.length);
var house = Math.floor(Math.random() * town.houses.length);

function gameGen(){
    //Random Generation of number between 0-2 for each object
    // var culprit = Math.floor(Math.random() * townsPeople.people.length);
    // var crime =  Math.floor(Math.random() * crimes.inductiveCrimes.length);
    // var house = Math.floor(Math.random() * town.houses.length);

    //Grabbing properties from object depending on the number
    if(firstNight === true){
        mainCulprit = townsPeople.people[culprit].name;
        mainCrime = crimes.inductiveCrimes[crime].title;
        mainHouse = town.houses[house].owner;
    firstNight = false;
    console.log("culprit is " + mainCulprit + " and the crime is " + mainCrime + " is in " + mainHouse + " house" );
    }
    else{
        newMainCrime = crimes.inductiveCrimes[crime].title;
        newMainHouse = town.houses[house].owner;  
    }

    
}



function checkRepeat(){
    
do{
    gameGen()
        if(newMainCrime === mainCrime || newMainHouse === mainHouse){
            crimes.inductiveCrimes.splice(crime,1);
            town.houses.splice(house,1);  
            console.log("repeat" + crimes.inductiveCrimes[crime].title + "and<br>" +town.houses[house].owner);
        }
        else{
            console.log("culprit is " + mainCulprit + " and the crime is " + newMainCrime + " is in " + newMainHouse + " house");
            repeat = false;
        }
}while(repeat === true);

}

gameGen();
document.writeln("culprit is " + mainCulprit + " and the crime is " + mainCrime + " is in " + mainHouse + " house");

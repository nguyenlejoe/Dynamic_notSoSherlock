var mainCulprit;
var mainCrime;
var mainHouse;

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

function gameGen(){
    //Random Generation of number between 0-2 for each object
    var culprit = Math.floor(Math.random() * 3);
    var crime =  Math.floor(Math.random() * 3);
    var house = Math.floor(Math.random() * 3);

    //Grabbing properties from object depending on the number
    mainCulprit = townsPeople.people[culprit].name;
    mainCrime = crimes.inductiveCrimes[crime].title;
    mainHouse = town.houses[house].owner;

    console.log("culprit is " + mainCulprit + " and the crime is " + mainCrime + " is in " + mainHouse + " house" );
}

gameGen();

document.writeln("culprit is " + mainCulprit + " and the crime is " + mainCrime + " is in " + mainHouse + " house");


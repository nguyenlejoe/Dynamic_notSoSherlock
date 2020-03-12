var mainCulprit;
var mainCrime;
var mainHouse;
var firstNight = true;

//////////////////////////OBJECT START///////////////////////////////
var dayState = {
    crimeTrack : ["Cookie Crime", "Stolen V-Bucks", "Stolen Toys", "Stolen Candy", "Broken Nerf gun"],
    houseTrack : ["Henry", "Alex", "Noah", "Joe", "Aksel"],
    culpritTrack : ["Henry", "Alex", "Noah", "Joe", "Aksel"]
}


var officalCrimes = {
    inductiveCrimes:[
        {
            title:"Cookie Crime",
            clues:[
                {
                   clueTitle : "Ladder",
                   desc : "Test",
                },
                {
                    clueTitle : "Muddy Footprints",
                    desc : "Test",
                 },
                 {
                    clueTitle : "Hole in wall",
                    desc : "Test",
                 },
                 
            ],
            choices: [
                "Murder",
                "Stolen Cookies",
                "Stolen Game"
            ],
        },
        {
            title:"Stolen Toys",
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
            title:"Stolen V-Bucks",
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
            title:"Stolen Candy",
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
            title:"Broken Nerf gun",
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

    if(firstNight === true){
        //Random Generation of number between 0-2 for each object
        var culpritNum = Math.floor(Math.random() * dayState.culpritTrack.length);
        var crimeNum =  Math.floor(Math.random() * dayState.crimeTrack.length);
        var houseNum = Math.floor(Math.random() * dayState.houseTrack.length);

        //Grabbing properties from object depending on the number
        mainCulprit = dayState.culpritTrack[culpritNum];
        mainCrime = dayState.crimeTrack[crimeNum];
        mainHouse = dayState.houseTrack[houseNum];

        firstNight = false;

        console.log("culprit is " + mainCulprit + " and the crime is " + mainCrime + " is in " + mainHouse + " house" );
    }
    else{
        crimeNum =  Math.floor(Math.random() * dayState.crimeTrack.length);
        houseNum = Math.floor(Math.random() * dayState.houseTrack.length);

        mainCrime = dayState.crimeTrack[crimeNum];
        mainHouse = dayState.houseTrack[houseNum];

        dayState.crimeTrack.splice(crimeNum,1);
        dayState.houseTrack.splice(houseNum,1);

    }
    
}

gameGen();

document.writeln("culprit is " + mainCulprit + " and the crime is " + mainCrime + " is in " + mainHouse + " house");

console.log(officalCrimes.inductiveCrimes[0].clues[0]);

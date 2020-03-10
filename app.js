var hamStatus = false;

var mainCrime;
var mainHouse;
var mainCulprit;
var houseNum;

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
    console.log("The crime is " + mainCrime + " and it is in " + mainHouse +"'s house"+ " the culprit is " + mainCulprit);
}

function checkHouse(houseNum){
    switch(houseNum){
        case 1:
        if(mainHouse === "Henry"){
            console.log("its working");
            alert("You have found the crime!");
        }
        else{
            alert("There seems to be nothing here");
        }
        break;

        case 2:
        if(mainHouse === "Alex"){
            alert("You have found the crime!");
        }
        else{
            alert("There seems to be nothing here");
        }
        break;

        case 3:
        if(mainHouse === "Noah"){
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



function hamButton(){
    if(hamStatus === false){
        document.querySelector("#menuPopup").style.left = "0";
        hamStatus = true;
    }
    else{
        document.querySelector("#menuPopup").style.left = "-80%";  
        hamStatus = false;
    }
}

function slide(){
    document.querySelector("#test").style.opacity = "0";
    document.querySelector("#backHome").style.display = "inline";
    console.log("test");
    keepData();
}

function slideBackHome(){
    hamButton();
    document.querySelector("#test").style.opacity = "100%";
}

questionRandom();
var hamStatus = false;
var lTheme = false;

//Hamburger menu function
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

var LthemeS = new Audio();
LthemeS.src = "./Assets/Death Note - (L's Theme A) Music.mp3";


function playLTheme(){
    if(lTheme === false){
        var LthemeS = new Audio();
        LthemeS.src = "./Assets/Death Note - (L's Theme A) Music.mp3";
        console.log("play");
    }
    else{
        var LthemeS = new Audio();
        LthemeS.src = "none";
        console.log("stop");
    }
}

var houseState = true;

function displayHouses(houseLetter){

        document.querySelector("#houseA").innerHTML = "<img src='" + town.houses[0].imgFile + "' />";
        document.querySelector("#houseB").innerHTML = "<img src='" + town.houses[1].imgFile + "' />";
        document.querySelector("#houseC").innerHTML = "<img src='" + town.houses[2].imgFile + "' />";
        document.querySelector("#houseD").innerHTML = "<img src='" + town.houses[3].imgFile + "' />";
        document.querySelector("#houseE").innerHTML = "<img src='" + town.houses[4].imgFile + "' />";



}

function displayHouseGray(houseGrayNum){
    switch(houseGrayNum){
        case 1:
            document.querySelector("#houseA").innerHTML = "<img src='" + town.houses[houseNum].imgFileGray + "' />";
            break;
        case 2:
            document.querySelector("#houseB").innerHTML = "<img src='" + town.houses[houseNum].imgFileGray + "' />";
            break;
        case 3:
            document.querySelector("#houseC").innerHTML = "<img src='" + town.houses[houseNum].imgFileGray + "' />";
            break;
        case 4:
            document.querySelector("#houseD").innerHTML = "<img src='" + town.houses[houseNum].imgFileGray + "' />";
            break;
        case 5:
            document.querySelector("#houseE").innerHTML = "<img src='" + town.houses[houseNum].imgFileGray + "' />";
            break;
    }
    
}
displayHouses();

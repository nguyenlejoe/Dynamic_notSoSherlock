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

function playLTheme(){
    if(lTheme === flase){
        document.getElementById(".lThemeSong").play();
    }
    else{
        document.querySelector(".lThemeSong").pause();
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

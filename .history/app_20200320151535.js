var hamStatus = false;

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

function displayHouses(){
    document.querySelector("#houseA").innerHTML = "<img src='" + town.houses[0].imgFile + "' />";
    document.querySelector("#houseB").innerHTML = "<img src='" + town.houses[1].imgFile + "' />";
    document.querySelector("#houseC").innerHTML = "<img src='" + town.houses[2].imgFile + "' />";
    document.querySelector("#houseD").innerHTML = "<img src='" + town.houses[3].imgFile + "' />";
    document.querySelector("#houseE").innerHTML = "<img src='" + town.houses[4].imgFile + "' />";
}
displayHouses();

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
    document.querySelector("#houseA").innerHTML = "<img src='" + town.houses[1].imgFile "' />";
}
displayHouses();

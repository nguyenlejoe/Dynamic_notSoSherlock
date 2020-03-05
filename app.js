var hamStatus = false;


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
}

function slideBackHome(){
    hamButton();
    document.querySelector("#test").style.opacity = "100%";
}
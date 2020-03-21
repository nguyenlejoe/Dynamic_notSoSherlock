var openBox = false;

function suggestionPop(){
    if(openBox === false){
        document.querySelector("#suggestion").style.right = "0";
        document.querySelector("#suggestion p").innerHTML = "How not to be idiot";
        openBox = true;
    }
    else{
        document.querySelector("#suggestion").style.right = "-30%";
        openBox = false;
    }

}
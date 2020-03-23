var openBox = false;

function suggestionPop(type, clueNum){

    if(type === "answer"){
       
        if(openBox === false){
            document.querySelector("#suggestion").style.right = "0";
            document.querySelector("#suggestion p").innerHTML = "Inductive reasoning is when you make conclusions based on your experiences and observations.";
            openBox = true;
        }
        else{
            document.querySelector("#suggestion").style.right = "-20em";
            openBox = false;
        }
    }
    else if (type === "clue"){
        
        if(openBox === false){
            document.querySelector("#suggestion").style.right = "0";
            document.querySelector("#suggestion p").innerHTML = officalCrimes.inductiveCrimes[crimeNum].clues[clueNum].desc;
            openBox = true;
        }
        else{
            document.querySelector("#suggestion").style.right = "-20em";
            openBox = false;
        }
    }

}

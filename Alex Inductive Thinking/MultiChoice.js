



///////////////////////////  OBJECTS  /////////////////////////
var Clues =[ 
    {
    item: "Muddy Footprints",
    description: "It seems like the culprit left muddy footprints upon the floor! ",
    multiChoice: [
        choiceA = ["A. Cookie theft", 1],
        choiceB = ["B. Stolen V-bucks", 2],
        choiceC = ["C. Making a Mess", 3],
        ],

    },
    
    {
        item: "Ladder",
        description: "I'm curious as to why is this ladder next to the counter!",
        multiChoice: [
            choiceA = ["A. Cookie theft", 1],
            choiceB = ["B. Stolen V-bucks", 2],
            choiceC = ["C. Making a Mess", 3]
            ],
    },

    {
        item: "Cookie Jar",
        description: " Hmmm intriguing, this cookie jar seems rather empty I wonder where all the cookies went? ",
        multiChoice: [
            choiceA = ["A. Cookie theft", 1],
            choiceB = ["B. Stolen V-bucks", 2],
            choiceC = ["C. Making a Mess", 3]
            ],
    }
]
   /* var multiChoice = [
        {a: "Cookie theft"},
        {b: "Stolen V-bucks"},
        {c: "Making a Mess"},
    ],
] */
///////////////////////////  MULTI CHOICE QUESTION  /////////////////////////


function addChoices(){
    // document.querySelector("#buttonA").innerHTML =  Clues[0].multiChoice[0][0];
    // document.querySelector("#buttonB").innerHTML =  Clues[0].multiChoice[1][0];
    // document.querySelector("#buttonC").innerHTML =  Clues[0].multiChoice[2][0];

    switch(mainCrime){
        case "Cookie Crime" :
            for(var i = 0; i <= 2; i++){
                document.querySelector("#button"+i).innerHTML =  officalCrimes.inductiveCrimes[0].choices[i].choice; 
                document.querySelector("#clue"+i).innerHTML = officalCrimes.inductiveCrimes[0].clues[i].clueTitle;
            }
        break;
        case "Stolen Toys" :
            for(var i = 0; i <= 2; i++){
                document.querySelector("#button"+i).innerHTML =  officalCrimes.inductiveCrimes[1].choices[i].choice; 
                document.querySelector("#clue"+i).innerHTML = officalCrimes.inductiveCrimes[1].clues[i].clueTitle;
            }
            break;
        case "Stolen V-Bucks" :
            for(var i = 0; i <= 2; i++){
                document.querySelector("#button"+i).innerHTML =  officalCrimes.inductiveCrimes[2].choices[i].choice; 
                document.querySelector("#clue"+i).innerHTML = officalCrimes.inductiveCrimes[2].clues[i].clueTitle;
            }
            break;
        case "Stolen Candy" :
            for(var i = 0; i <= 2; i++){
                document.querySelector("#button"+i).innerHTML =  officalCrimes.inductiveCrimes[3].choices[i].choice; 
                document.querySelector("#clue"+i).innerHTML = officalCrimes.inductiveCrimes[3].clues[i].clueTitle;
            }
            break;
        case "Broken Nerf gun" :
            for(var i = 0; i <= 2; i++){
                document.querySelector("#button"+i).innerHTML =  officalCrimes.inductiveCrimes[4].choices[i].choice; 
                document.querySelector("#clue"+i).innerHTML = officalCrimes.inductiveCrimes[4].clues[i].clueTitle;
            }
            break;
          

    }


}



///////////////////////////  ADDING CLUES  /////////////////////////


// function addClues(){
//     document.querySelector("#clue1").innerHTML = Clues[0].item;
//     document.querySelector("#clue2").innerHTML = Clues[1].item;
//     document.querySelector("#clue3").innerHTML = Clues[2].item;
// }
// addClues()

///////////////////////////  CLUE DETAIL DISPLAY  /////////////////////////

function displayClue1(){
    alert(Clues[0].description);
}

function displayClue2(){
    alert(Clues[1].description);
}

function displayClue3(){
    alert(Clues[2].description);
}



///////////////////////////  CHECK ANSWER    /////////////////////////
/* var evidence = document.getElementsByClassName("InductiveChoice");

switch(evidence){
    case 1: 
        console.log("You are Correct");
        break;
    case "2":
        console.log("You are Incorrect");
        break;
    case "3":
        console.log("You are Incorrectish");
        break;
}
*/

var A = Clues[0].multiChoice[0][1];
var B = Clues[0].multiChoice[1][1];
var C = Clues[0].multiChoice[2][1];

function answerA(){
    if (A == 1){
        var Thinking = prompt("You are Correct Mr.Holmes! Did you use Inductive or Deductive Thinking?");
            if (Thinking == "inductive"){
                alert("You are truly A genius Mr.Holmes!");
            } else {
                alert("Hmmmmm it seems you haven't grasped it yet Mr. Holmes, Inductive thinking is...");
            }
    }
}

function answerB(){
    if (B == 1){
        var Thinking = prompt("You are Correct Mr.Holmes! Did you use Inductive or Deductive Thinking?");
            if (Thinking == "inductive"){
                alert("You are truly A genius Mr.Holmes!");
            } else {
                alert("Hmmmmm it seems you haven't grasped it yet Mr. Holmes, Inductive thinking is...");
            }
    } else if (B == 2){
        alert("You are incorrect Mr.Holmes!");
            }
    if (B == 1){
        alert("You are incorrect Mr.Holmes!");
    }
}

function answerC(){
    if (C == 1){
        var Thinking = prompt("You are Correct Mr.Holmes! Did you use Inductive or Deductive Thinking?");
            if (Thinking == "inductive"){
                alert("You are truly A genius Mr.Holmes!");
            } else {
                alert("Hmmmmm it seems you haven't grasped it yet Mr. Holmes, Inductive thinking is...");
            }
    } else if (C == 2){
        alert("You are incorrect Mr.Holmes!");
            }
    if (C == 3){
        alert("You are incorrect Mr.Holmes!");
    }
}
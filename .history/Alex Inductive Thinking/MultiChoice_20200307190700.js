



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
    document.querySelector("#buttonA").innerHTML =  Clues[0].multiChoice[0][0];
    document.querySelector("#buttonB").innerHTML =  Clues[0].multiChoice[1][0];
    document.querySelector("#buttonC").innerHTML =  Clues[0].multiChoice[2][0];
}
addChoices();


///////////////////////////  ADDING CLUES  /////////////////////////


function addClues(){
    document.querySelector("#clue1").innerHTML = Clues[0].item;
    document.querySelector("#clue2").innerHTML = Clues[1].item;
    document.querySelector("#clue3").innerHTML = Clues[2].item;
}
addClues()

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
var C = Clues[0].multiChoice[0][1];

function AnswerA(){
    if (A == 1){
        var Thinking = prompt("You are Correct Mr.Holmes! Did you use Inductive or Deductive Thinking?");
            if (Thinking = "inductive"){
                alert("You are truly A genius Mr.Holmes!")
            } else {
                alert("Hmmmmm it seems you haven't grasped it yet Mr. Holmes, Inductive thinking is...")
            }
    }
}

function AnswerB(){
    if (B == 2){
        var Thinking = prompt("You are incorrect Mr.Holmes! Did you use Inductive or Deductive Thinking?");
            if (Thinking = "inductive" || "Inductive"){
                alert("You are truly A genius Mr.Holmes!")
            }
    }
}

function AnswerC(){
    if (C == 1){
        alert("You are incorrect Mr.Holmes!");
    }
}
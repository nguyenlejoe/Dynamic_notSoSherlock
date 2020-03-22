

//UNUSED -- KEPT FOR PROOF OF WORK --  GOODJOB ALEX :)
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

//UNUSED -- KEPT FOR PROOF OF WORK --  GOODJOB ALEX :)
   /* var multiChoice = [
        {a: "Cookie theft"},
        {b: "Stolen V-bucks"},
        {c: "Making a Mess"},
    ],
] */
///////////////////////////  MULTI CHOICE QUESTION  /////////////////////////

//Function to add choices to the page
function addChoices(){
    //UNUSED -- KEPT FOR PROOF OF WORK --  GOODJOB ALEX :)
    // document.querySelector("#buttonA").innerHTML =  Clues[0].multiChoice[0][0];
    // document.querySelector("#buttonB").innerHTML =  Clues[0].multiChoice[1][0];
    // document.querySelector("#buttonC").innerHTML =  Clues[0].multiChoice[2][0];

    //Switch statement to grab clues and choices that are related to the current crime
    switch(mainCrime){
        //If string matches case then run code
        case "Stolen Cookies" :
            //For loop to grab each item in array for both choices and clues
            //Changes innerHTML for button and clues
            for(var i = 0; i <= 2; i++){
                document.querySelector("#button"+i).innerHTML =  officalCrimes.inductiveCrimes[crimeNum].choices[i].choice; 
                document.querySelector("#clue"+i).innerHTML = "<img src='" + officalCrimes.inductiveCrimes[crimeNum].clues[i].imgFile + "'/ >";
            }
        break;
        case "Robbery" :
            for(var i = 0; i <= 2; i++){
                document.querySelector("#button"+i).innerHTML =  officalCrimes.inductiveCrimes[crimeNum].choices[i].choice; 
                document.querySelector("#clue"+i).innerHTML =  "<img src='" + officalCrimes.inductiveCrimes[crimeNum].clues[i].imgFile + "'/ >";
            }
            break;
        case "Unfinished Homework" :
            for(var i = 0; i <= 2; i++){
                document.querySelector("#button"+i).innerHTML =  officalCrimes.inductiveCrimes[crimeNum].choices[i].choice; 
                document.querySelector("#clue"+i).innerHTML = "<img src='" + officalCrimes.inductiveCrimes[crimeNum].clues[i].imgFile + "'/ >";
            }
            break;
        case "Bullying" :
            for(var i = 0; i <= 2; i++){
                document.querySelector("#button"+i).innerHTML =  officalCrimes.inductiveCrimes[crimeNum].choices[i].choice; 
                document.querySelector("#clue"+i).innerHTML = "<img src='" + officalCrimes.inductiveCrimes[crimeNum].clues[i].imgFile + "'/ >";
            }
            break;
        case "Fraud" :
            for(var i = 0; i <= 2; i++){
                document.querySelector("#button"+i).innerHTML =  officalCrimes.inductiveCrimes[crimeNum].choices[i].choice; 
                document.querySelector("#clue"+i).innerHTML = "<img src='" + officalCrimes.inductiveCrimes[crimeNum].clues[i].imgFile + "'/ >";
            }
            break;
          
    }

}


//UNUSED -- KEPT FOR PROOF OF WORK --  GOODJOB ALEX :)
///////////////////////////  ADDING CLUES  /////////////////////////


// function addClues(){
//     document.querySelector("#clue1").innerHTML = Clues[0].item;
//     document.querySelector("#clue2").innerHTML = Clues[1].item;
//     document.querySelector("#clue3").innerHTML = Clues[2].item;
// }
// addClues()

///////////////////////////  CLUE DETAIL DISPLAY  /////////////////////////

//Function to display hints if user clicks on a certain clue
function displayClue(cluenum){

    switch(cluenum){
        case 1: 
        alert(officalCrimes.inductiveCrimes[crimeNum].clues[0].desc);
        break;
        case 2: 
        alert(officalCrimes.inductiveCrimes[crimeNum].clues[1].desc);
        break;
        case 3: 
        alert(officalCrimes.inductiveCrimes[crimeNum].clues[2].desc);
        break;
    }
}

//UNUSED -- KEPT FOR PROOF OF WORK --  GOODJOB ALEX :)
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

var A;
var B;
var C;
//UNUSED -- KEPT FOR PROOF OF WORK --  GOODJOB ALEX :)
// var A = officalCrimes.inductiveCrimes[crimeNum].choices[0].number;
// var B = officalCrimes.inductiveCrimes[crimeNum].choices[1].number;
// var C = officalCrimes.inductiveCrimes[crimeNum].choices[2].number;


//CHECKING IF USER HAS CHOSEN CORRECT ANSWER
//Each crime has choices and each choice has a set of numbers from 1-3
//1 indicating correct

function answerA(){

    if (A == 1){
        var Thinking = prompt('You are Correct Mr.Holmes! Did you use "inductive" or "deductive" Thinking?');
            if (Thinking == "inductive"){
                //Next page does not require scrolling so turn overflow off
                appOverFlow = false;
                //Starts carousel function -- function found in "carousel.js"
                startCarousel();
                alert("You are truly A genius Mr.Holmes!");
                pageSlide('clueStage','gatherPeople' );
            } else {
                alert("Hmmmmm it seems you haven't grasped it yet Mr. Holmes, Inductive thinking is...");
            }
            
    }
        else if (A == 2){
            suggestionPop('answer');
    }
        if (A == 3){
            suggestionPop('answer');
}
}

function answerB(){

    if (B == 1){
        var Thinking = prompt("You are Correct Mr.Holmes! Did you use Inductive or Deductive Thinking?");
            if (Thinking == "inductive"){
                appOverFlow = false;
                startCarousel();
                alert("You are truly A genius Mr.Holmes!");
                pageSlide('clueStage','gatherPeople' );
            } else {
                alert("Hmmmmm it seems you haven't grasped it yet Mr. Holmes, Inductive thinking is...");
            }
    } else if (B == 2){
        suggestionPop('answer');

            }
    if (B == 3){
        suggestionPop('answer');
    }
}

function answerC(){

    if (C == 1){
        var Thinking = prompt("You are Correct Mr.Holmes! Did you use Inductive or Deductive Thinking?");
            if (Thinking == "inductive"){
                appOverFlow = false;
                startCarousel();
                alert("You are truly A genius Mr.Holmes!");
                pageSlide('clueStage','gatherPeople' );
            } else {
                alert("Hmmmmm it seems you haven't grasped it yet Mr. Holmes, Inductive thinking is...");
            }
    } else if (C == 2){
        suggestionPop('answer');
            }
    if (C == 3){
        suggestionPop('answer');
    }
}

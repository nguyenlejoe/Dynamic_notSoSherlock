
///////////////////////////  OBJECTS  ////////////////////////////
var Clues =[ 
    {
    item: "Muddy Footprints",
    description: " it seems like the culprit left muddy footprints upon the floor! ",
    multiChoice: [
        "A. Cookie theft", 
        "B. Stolen V-bucks",
        "C. Making a Mess",
       ],

    },
    
    {
        item: "Ladder",
        description: "Why is this ladder next to the counter!",
        multiChoice: [
            "A. Cookie theft", 
            "B. Stolen V-bucks",
            "C. Making a Mess",
           ],
    },

    {
        item: "Cookie Jar",
        description: " Hmmm, this cookie jar seems rather empty I wonder where all the cookies went? ",
        multiChoice: [
            "A. Cookie theft", 
            "B. Stolen V-bucks",
            "C. Making a Mess",
           ],
    }
]
   /* var multiChoice = [
        {a: "Cookie theft"},
        {b: "Stolen V-bucks"},
        {c: "Making a Mess"},
    ],
] */
///////////////////////////  END OFF OBJECTS  /////////////////////////


function addChoices(){
    document.querySelector("#buttonA").innerHTML =  Clues.multiChoice[0];
    ocument.querySelector("#buttonB").innerHTML =  Clues.multiChoice[1];
    ocument.querySelector("#buttonC").innerHTML =  Clues.multiChoice[2];
}

addChoices();
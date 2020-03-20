
//Offical object that stores most of the data
var officalCrimes = {
  
    inductiveCrimes:[
            {
            //Cookie Crime
            title:"Stolen Cookies",
            clues:[
                {
                    clueTitle : "Ladder",
                    desc : "I'm curious as to why is this ladder next to the counter!",
                },
                {
                    clueTitle : "Muddy Footprints",
                    desc : "It seems like the culprit left muddy footprints upon the floor!",
                 },
                 {
                    clueTitle : "Empty Cookie Jar",
                    desc : "Hmmm intriguing, this cookie jar seems rather empty I wonder where all the cookies went?",
                 }, 
            ],
            //Choices
            choices: [
                {
                    choice: "Unfinished Assignment",
                    number: 3
                },
                {
                    choice: "Stolen Cookies",
                    number: 1
                },
                {
                    choice: "Stolen Game",
                    number: 2
                },
            ],

            Keytrait: "Muddy footprints",

            Keydesc: "Lorem Ipsum"
        },

        {
            //Robbery
            title:"Robbery",
            clues:[
                {
                    clueTitle : "Empty Wallet",
                    desc : "Interesting… Why does a wallet meant for carrying money contain none at all?",
                },
                {
                    clueTitle : "Lanyard Missing Keys",
                    desc : "This lanyard is missing its heavy half? I don’t know about you, but I typically carry keys on my lanyard!",
                 },
                 {
                    clueTitle : "Empty Food Cans",
                    desc : "Oh boy! I am starving, where did all of their food go?!",
                 }, 
            ],
            //Choices
            choices: [
                {
                    choice: "Robbery",
                    number: 1
                },
                {
                    choice: "Delusion",
                    number: 3
                },
                {
                    choice: "Borrowed items",
                    number: 2
                },
            ],

            Keytrait: "Muddy footprints",

            Keydesc: "Lorem Ipsum"
        },

        {
            //I'm so sorry henry
            title:"Unfinished Homework",
            clues:[
                {
                    clueTitle : "Homework",
                    desc : "The top of the page says it was due yesterday and none of the questions were filled out.",
                },
                {
                    clueTitle : "Puddle of Tears",
                    desc : "It seems like someone was crying… a lot.",
                 },
                 {
                    clueTitle : "Half Eaten bag of Cheetos",
                    desc : "It seems like whoever was here had a bad night.",
                 }, 
            ],
            //Choices
            choices: [
                {
                    choice: "Gluttony",
                    number: 3
                },
                {
                    choice: "Wastefulness",
                    number: 2
                },
                {
                    choice: "Unfinished Assignment",
                    number: 1
                },
            ],

            Keytrait: "Muddy footprints",

            Keydesc: "Lorem Ipsum"
        },

        {
            //Bullying
            title:"Bullying",
            clues:[
                {
                    clueTitle : "Messages",
                    desc : "Those are not a kind things to say to someone...",
                },
                {
                    clueTitle : "T-Shirt",
                    desc : "That’s a rather unpleasant piece of attire.",
                 },
                 {
                    clueTitle : "Skateboard",
                    desc : "Oh my… Never before have I ever seen a two-piece skateboard.",
                 }, 
            ],
            //Choices
            choices: [
                {
                    choice: "Earthquake",
                    number: 3
                },
                {
                    choice: "Bullying",
                    number: 1
                },
                {
                    choice: "Prank",
                    number: 2
                },
            ],

            Keytrait: "Muddy footprints",

            Keydesc: "Lorem Ipsum"
        },

        {
            //Fraud
            title:"Fraud",
            clues:[
                {
                    clueTitle : "Credit Card",
                    desc : "This credit card has a suspicious sounding name on it… Have you ever met a person named Peculiar Prawn?",
                },
                {
                    clueTitle : "Bags filled with diamonds",
                    desc : "What sane person would buy a bag filled with diamonds?",
                 },
                 {
                    clueTitle : "Two Passports",
                    desc : "Why would anyone have two passports in two different names!",
                 }, 
            ],
            //Choices
            choices: [
                {
                    choice: "Fraud",
                    number: 1
                },
                {
                    choice: "Acting",
                    number: 3
                },
                {
                    choice: "Multiple Personality Disorder",
                    number: 2
                },
            ],

            Keytrait: "Muddy footprints",

            Keydesc: "Lorem Ipsum"
        },
    ]

    
};

var townsPeople = {
  people: [
    {
      name: "Henry",
      desc: "Muddy Footprints",
      trait: "Wrong"
    },
    {
      name: "Alex",
      desc: "Muddy Footprints",
      trait: "Wrong"
    },
    {
      name: "Noah",
      desc: "Muddy Footprints",
      trait: "Wrong"
    },
    {
      name: "Joe",
      desc: "Muddy Footprints",
      trait: "Wrong"
    },
    {
      name: "Aksel",
      desc: "Muddy Footprints",
      trait: "Wrong"
    }
  ]
};

var town = {
  houses: [
    {
      owner: "Henry",
      crime: ""
    },
    {
      owner: "Alex",
      crime: ""
    },
    {
      owner: "Noah",
      crime: ""
    },
    {
        owner: "Joe",
        crime: ""
    },
    {
        owner: "Aksel",
        crime: ""
      }
  ]
};

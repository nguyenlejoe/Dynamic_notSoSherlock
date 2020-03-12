var dayState = {
    crimeTrack : ["Cookie Crime", "Stolen V-Bucks", "Stolen Toys", "Stolen Candy", "Broken Nerf gun"],
    houseTrack : ["Henry", "Alex", "Noah", "Joe", "Aksel"],
    culpritTrack : ["Henry", "Alex", "Noah", "Joe", "Aksel"]
}


var officalCrimes = {
    inductiveCrimes:[
            {
            //Cookie Crime
            title:"Cookie Crime",
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
                    choice: "Murder",
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
            ]
        },

        {
            //Stolen V-Bucks
            title:"Stolen V-Bucks",
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
                    choice: "Murder",
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
            ]
        },

        {
            //Stolen Toys
            title:"Stolen Toys",
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
                    choice: "Murder",
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
            ]
        },

        {
            //Stolen Candy
            title:"Stolen Candy",
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
                    choice: "Murder",
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
            ]
        },

        {
            //Broken Nerf gun
            title:"Broken Nerf gun",
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
                    choice: "Murder",
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
            ]
        },
    ]

    
}

var townsPeople = {
    people:[
        {
            name: "Henry",
            desc: "Muddy Footprints",
        },
        {
            name: "Alex",
            desc: "Muddy Footprints",
        },
        {
            name: "Noah",
            desc: "Muddy Footprints",
        },
    ]
}

var town = {
    houses:[
        {
            owner: "Henry",
            crime: "",
        },
        {
            owner: "Alex",
            crime: "",
        },
        {
            owner: "Noah",
            crime: "",
        },
    ]
}
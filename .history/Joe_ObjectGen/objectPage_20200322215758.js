//Offical object that stores most of the data
var officalCrimes = {
  inductiveCrimes: [
    {
      //Cookie Crime
      title: "Stolen Cookies",
      clues: [
        {
          clueTitle: "Ladder",
          desc: "I'm curious as to why is this ladder next to the counter!",
          imgFile: "./Assets/clues/cookieCrime_ladder.svg"
        },
        {
          clueTitle: "Muddy Footprints",
          desc:
            "It seems like the culprit left muddy footprints upon the floor!",
          imgFile: "./Assets/clues/cookieCrime_footPrints.svg"
        },
        {
          clueTitle: "Empty Cookie Jar",
          desc:
            "Hmmm intriguing, this cookie jar seems rather empty I wonder where all the cookies went?",
          imgFile: "./Assets/clues/cookieCrime_cookieJar.svg"
        }
      ],
      //Choices
      choices: [
        {
          choice: "Unfinished Assignment",
          number: 3,
        },
        {
          choice: "Stolen Cookies",
          number: 1,
        },
        {
          choice: "Stolen Game",
          number: 2,
        }
      ],

      Keytrait: "Those shoes like particularily muddy!",

      Keydesc: "Muddy footprints"
    },

    {
      //Robbery
      title: "Robbery",
      clues: [
        {
          clueTitle: "Empty Wallet",
          desc:
            "Interesting… Why does a wallet meant for carrying money contain none at all?",
          imgFile: "./Assets/clues/Robbery_wallet.svg"
        },
        {
          clueTitle: "Lanyard Missing Keys",
          desc:
            "This lanyard is missing its heavy half? I don’t know about you, but I typically carry keys on my lanyard!",
          imgFile: "./Assets/clues/Robbery_keychain.svg"
        },
        {
          clueTitle: "Empty Food Cans",
          desc: "Oh boy! I am starving, where did all of their food go?!",
          imgFile: "./Assets/clues/Robbery_can.svg"
        }
      ],
      //Choices
      choices: [
        {
          choice: "Robbery",
          number: 1,
        },
        {
          choice: "Delusion",
          number: 3,
        },
        {
          choice: "Borrowed items",
          number: 2,
        }
      ],

      Keytrait: "They are suspiciously wealthy.",

      Keydesc: "Treated friends to dinner."
    },

    {
      //I'm so sorry henry
      title: "Unfinished Homework",
      clues: [
        {
          clueTitle: "Homework",
          desc:
            "The top of the page says it was due yesterday and none of the questions were filled out.",
          imgFile: "./Assets/clues/unfinHomework_homework.svg"
        },
        {
          clueTitle: "Puddle of Tears",
          desc: "It seems like someone was crying… a lot.",
          imgFile: "./Assets/clues/unfinHomework_tears.svg"
        },
        {
          clueTitle: "Half Eaten bag of Cheetos",
          desc: "It seems like whoever was here had a bad night.",
          imgFile: "./Assets/clues/unfinHomework_cheetos.svg"
        }
      ],
      //Choices
      choices: [
        {
          choice: "Gluttony",
          number: 3,
        },
        {
          choice: "Wastefulness",
          number: 2,
        },
        {
          choice: "Unfinished Assignment",
          number: 1,
        }
      ],

      Keytrait: "Those fingers look rather orange.",

      Keydesc: "why do they smell like cheese?"
    },

    {
      //Bullying
      title: "Bullying",
      clues: [
        {
          clueTitle: "Messages",
          desc: "Those are not a kind things to say to someone...",
          imgFile: "./Assets/clues/bullying_messages.svg"
        },
        {
          clueTitle: "T-Shirt",
          desc: "That’s a rather unpleasant piece of attire.",
          imgFile: "./Assets/clues/bullying_tShirt.svg"
        },
        {
          clueTitle: "Skateboard",
          desc: "Oh my… Never before have I ever seen a two-piece skateboard.",
          imgFile: "./Assets/clues/bullying_skateboard.svg"
        }
      ],
      //Choices
      choices: [
        {
          choice: "Earthquake",
          number: 3,
        },
        {
          choice: "Bullying",
          number: 1,
        },
        {
          choice: "Prank",
          number: 2,
        }
      ],

      Keytrait: "They have paint on their hands",

      Keydesc: "They won't stop laughing"
    },

    {
      //Fraud
      title: "Fraud",
      clues: [
        {
          clueTitle: "Credit Card",
          desc:
            "This credit card has a suspicious sounding name on it… Have you ever met a person named Peculiar Prawn?",
          imgFile: "./Assets/clues/IDFraud_creditCard.svg"
        },
        {
          clueTitle: "Bags filled with diamonds",
          desc: "What sane person would buy a bag filled with diamonds?",
          imgFile: "./Assets/clues/IDFraud_jewels.svg"
        },
        {
          clueTitle: "Two Passports",
          desc: "Why would anyone have two passports in two different names!",
          imgFile: "./Assets/clues/IDFraud_passports.svg"
        }
      ],
      //Choices
      choices: [
        {
          choice: "Fraud",
          number: 1
        },
        {
          choice: "Acting",
          number: 3,
        },
        {
          choice: "Multiple Personality Disorder",
          number: 2,
        }
      ],

      Keytrait: "Why would someone need a wallet that big?!",

      Keydesc: "They have a gigantic wallet"
    }
  ]
};

var townsPeople = {
  people: [
    {
      name: "Angela Anger",
      desc: "But she always seems mad!",
      trait: "She seems angry.",
      imgFile:

        "url('./Assets/suspects/Characters_Angela Anger.svg') no-repeat center"
    },
    {
      name: "Billy Bad",
      desc: "What a cool mustache!",
      trait: "His eyes seem shifty",
      imgFile:
        "url('./Assets/suspects/Characters_Billy Bad.svg') no-repeat center"
    },
    {
      name: "Charlie Crying",
      desc: "His face covered in tears",
      trait: "Why is his fist clenched?!",
      imgFile:
        "url('./Assets/suspects/Characters_Charlie Crying.svg') no-repeat center"
    },
    {
      name: "Daniel Dead",
      desc: "When was the last time he moved?",
      trait: "Daniel Looks stone cold ",
      imgFile:
        "url('./Assets/suspects/Characters_Daniel Dead.svg') no-repeat center"
    },
    {
      name: "Eric Evil",
      desc: "and that Monicle is very old school",
      trait: "Eric has a scary grin on his face!",
      imgFile:
        "url('./Assets/suspects/Characters_Eric Evil.svg') no-repeat center"
    }
  ]
};

var town = {
  houses: [
    {
      owner: "Henry",
      crime: "",
      imgFile: "./Assets/outerHouses/House-01.svg",
      imgFileGray: "./Assets/outerHouses/houseGrayScale-01.svg",
    },
    {
      owner: "Alex",
      crime: "",
      imgFile: "./Assets/outerHouses/House-02.svg",
      imgFileGray: "./Assets/outerHouses/houseGrayScale-02.svg",
    },
    {
      owner: "Noah",
      crime: "",
      imgFile: "./Assets/outerHouses/House-03.svg",
      imgFileGray: "./Assets/outerHouses/houseGrayScale-03.svg",
    },
    {
      owner: "Aksel",
      crime: "",
      imgFile: "./Assets/outerHouses/House-04.svg",
      imgFileGray: "./Assets/outerHouses/houseGrayScale-04.svg",
    },
    {
      owner: "Joe",
      crime: "",
      imgFile: "./Assets/outerHouses/House-05.svg",
      imgFileGray: "./Assets/outerHouses/houseGrayScale-05.svg",
    }
  ]
};

//Store current culprit/crime/house
var mainCulprit;
var mainCrime;
var mainHouse;

//Keeps track if it is the first night
var firstNight = true;

//Randomized values stored for each night
var culpritNum;
var crimeNum;
var houseNum;


// Game generation
// First night = will generate random numbers and pull culprit, crime and house
// will store chosen objects into main variables to remember throughout the game

// After first night = will generate new numbers for only crime and house and
// culprit will stay constant throughout the game

function gameGen() {
  //Checks if it is first night (first turn)
  if (firstNight === true) {
    //Random Generation of number between 0-array.length for each object
    culpritNum = Math.floor(Math.random() * townsPeople.people.length);
    crimeNum = Math.floor(Math.random() * officalCrimes.inductiveCrimes.length);
    houseNum = Math.floor(Math.random() * town.houses.length);

    //Grabbing properties from object depending on the number
    mainCulprit = townsPeople.people[culpritNum].name;
    mainCrime = officalCrimes.inductiveCrimes[crimeNum].title;
    mainHouse = town.houses[houseNum].owner;

    //Grabs correct answers from the object.. will be used later in the "MultiChoice.js"
    A = officalCrimes.inductiveCrimes[crimeNum].choices[0].number;
    B = officalCrimes.inductiveCrimes[crimeNum].choices[1].number;
    C = officalCrimes.inductiveCrimes[crimeNum].choices[2].number;


    firstNight = false;

    //Console log to keep track of variables
    console.log(  "culprit is " +  mainCulprit +   " and the crime is " +   mainCrime +   " is in " +    mainHouse +    " house"   );
  } 
  // If it is not the first night (next turn)
  else {


    //Generates new set of numbers for only crime and house
    crimeNum = Math.floor(Math.random() * officalCrimes.inductiveCrimes.length);
    houseNum = Math.floor(Math.random() * town.houses.length);

    //New crime and house stored in the main variables
    mainCrime = officalCrimes.inductiveCrimes[crimeNum].title;
    mainHouse = town.houses[houseNum].owner;

        //Grabs answers from object
        A = officalCrimes.inductiveCrimes[crimeNum].choices[0].number;
        B = officalCrimes.inductiveCrimes[crimeNum].choices[1].number;
        C = officalCrimes.inductiveCrimes[crimeNum].choices[2].number;


    console.log(  "culprit is " +  mainCulprit +   " and the crime is " +   mainCrime +   " is in " +    mainHouse +    " house"   );
  }
}

function removeObject(){
  officalCrimes.inductiveCrimes.splice(crimeNum, 1);
  town.houses.splice(houseNum, 1);
}

gameGen();




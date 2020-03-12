var mainCulprit;
var mainCrime;
var mainHouse;
var firstNight = true;


function gameGen(){

    if(firstNight === true){
        //Random Generation of number between 0-2 for each object
        var culpritNum = Math.floor(Math.random() * dayState.culpritTrack.length);
        var crimeNum =  Math.floor(Math.random() * dayState.crimeTrack.length);
        var houseNum = Math.floor(Math.random() * dayState.houseTrack.length);

        //Grabbing properties from object depending on the number
        mainCulprit = dayState.culpritTrack[culpritNum];
        mainCrime = dayState.crimeTrack[crimeNum];
        mainHouse = dayState.houseTrack[houseNum];

        firstNight = false;

        console.log("culprit is " + mainCulprit + " and the crime is " + mainCrime + " is in " + mainHouse + " house" );
    }
    else{
        crimeNum =  Math.floor(Math.random() * dayState.crimeTrack.length);
        houseNum = Math.floor(Math.random() * dayState.houseTrack.length);

        mainCrime = dayState.crimeTrack[crimeNum];
        mainHouse = dayState.houseTrack[houseNum];

        dayState.crimeTrack.splice(crimeNum,1);
        dayState.houseTrack.splice(houseNum,1);

    }
    
}

gameGen();


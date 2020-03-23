var checkedHouse = [];

var openBox = false;

// function suggestionPop2(type, houseNum) {
//   if (type === "answer") {
//     if (openBox === false) {
//       document.querySelector("#suggestion").style.right = "0";
//       document.querySelector("#suggestion p").innerHTML = "How not to be idiot";
//       openBox = true;
//     } else {
//       document.querySelector("#suggestion").style.right = "-20em";
//       openBox = false;
//     }
//   } else if (type === "clue") {
//     if (openBox === false) {
//       document.querySelector("#suggestion").style.right = "0";
//       document.querySelector("#suggestion p").innerHTML = "Lorem Ipsum";
//       openBox = true;
//     } else {
//       document.querySelector("#suggestion").style.right = "-20em";
//       openBox = false;
//     }
//   }
// }

//Checks if user has picked the house that the crime has occured in

function checkCrimeHouse(houseNum) {
  switch (houseNum) {
    case 1:
      if (mainHouse === "Henry") {
        //Next page will involve scrolling so turn overflow on
        appOverFlow = true;
        alert("Crime has been found!");
        //Lets users know crime has been found if correct
        pageSlide("townPage", "clueStage");

        //Adds choices to the page -- function found in "MultiChoice.js"
        addChoices();

        displayHouseGray(1);
      } else {
        //If user picks a house that does not have a crime in it
        alert("No crime here!");
        // suggestionPop2("Nothing");
      }
      break;

    case 2:
      if (mainHouse === "Alex") {
        appOverFlow = true;
        alert("Crime has been found!");
        pageSlide("townPage", "clueStage");
        addChoices();
        displayHouseGray(2);
      } else {
        alert("No crime here!");
        // suggestionPop2("Nothing");
      }
      break;

    case 3:
      if (mainHouse === "Noah") {
        appOverFlow = true;
        alert("Crime has been found!");
        pageSlide("townPage", "clueStage");
        addChoices();
        displayHouseGray(3);
      } else {
        alert("No crime here!");
      }
      break;

    case 4:
      if (mainHouse === "Joe") {
        appOverFlow = true;
        alert("Crime has been found!");
        pageSlide("townPage", "clueStage");
        addChoices();
        displayHouseGray(4);
      } else {
        alert("No crime here!");
        // suggestionPop2("Nothing");
      }
      break;

    case 5:
      if (mainHouse === "Aksel") {
        appOverFlow = true;
        alert("Crime has been found!");
        pageSlide("townPage", "clueStage");
        addChoices();
        displayHouseGray(5);
      } else {
        alert("No crime here!");
        // suggestionPop2("Nothing");
      }
      break;
  }
}

// window.onload = suggestionPop2();

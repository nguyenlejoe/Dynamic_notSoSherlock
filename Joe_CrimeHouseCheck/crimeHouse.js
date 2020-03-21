var checkedHouse = [];

//Checks if user has picked the house that the crime has occured in

function checkCrimeHouse(houseNum) {
  switch (houseNum) {
    case 1:
      if (mainHouse === "Henry") {
        //Next page will involve scrolling so turn overflow on
        appOverFlow = true;
        //Lets users know crime has been found if correct
        pageSlide("townPage", "clueStage");
  
        //Adds choices to the page -- function found in "MultiChoice.js"
        addChoices();

        displayHouseGray(1);

      } else {
        //If user picks a house that does not have a crime in it
        alert("Nothing");
      }
      break;

    case 2:
      if (mainHouse === "Alex") {
        appOverFlow = true;
        pageSlide("townPage", "clueStage");
        addChoices();
        displayHouseGray(2);
      } else {
        alert("Nothing");
      }
      break;

    case 3:
      if (mainHouse === "Noah") {
        appOverFlow = true;
        pageSlide("townPage", "clueStage");
        addChoices();
        displayHouseGray(3);
      } else {
        alert("Nothing");
      }
      break;

    case 4:
      if (mainHouse === "Joe") {
        appOverFlow = true;
        pageSlide("townPage", "clueStage");
        addChoices();
        displayHouseGray(4);
      } else {
        alert("Nothing");
      }
      break;

    case 5:
      if (mainHouse === "Aksel") {
        appOverFlow = true;
        pageSlide("townPage", "clueStage");
        addChoices();
        displayHouseGray(5);
      } else {
        alert("Nothing");
      }
      break;
  }
}


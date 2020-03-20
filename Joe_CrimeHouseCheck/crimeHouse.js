//Checks if user has picked the house that the crime has occured in

function checkCrimeHouse(houseNum) {
  switch (houseNum) {
    case 1:
      if (mainHouse === "Henry") {
        //Next page will involve scrolling so turn overflow on
        appOverFlow = true;
        //Lets users know crime has been found if correct
        alert("The crime has been found!");
        //Transition to "MultiChoice.js" or clueStage
        pageSlide("townPage", "clueStage");
        //Adds choices to the page -- function found in "MultiChoice.js"
        addChoices();
      } else {
        //If user picks a house that does not have a crime in it
        alert("seems to be nothing here");
      }
      break;

    case 2:
      if (mainHouse === "Alex") {
        appOverFlow = true;
        alert("The crime has been found!");
        pageSlide("townPage", "clueStage");
        addChoices();
      } else {
        alert("seems to be nothing here");
      }
      break;

    case 3:
      if (mainHouse === "Noah") {
        appOverFlow = true;
        alert("The crime has been found!");
        pageSlide("townPage", "clueStage");
        addChoices();
      } else {
        alert("seems to be nothing here");
      }
      break;

    case 4:
      if (mainHouse === "Joe") {
        appOverFlow = true;
        alert("The crime has been found!");
        pageSlide("townPage", "clueStage");
        addChoices();
      } else {
        alert("seems to be nothing here");
      }
      break;

    case 5:
      if (mainHouse === "Aksel") {
        appOverFlow = true;
        alert("The crime has been found!");
        pageSlide("townPage", "clueStage");
        addChoices();
      } else {
        alert("seems to be nothing here");
      }
      break;
  }
}

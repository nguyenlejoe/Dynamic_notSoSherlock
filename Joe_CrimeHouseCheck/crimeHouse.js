function checkCrimeHouse(houseNum) {
  switch (houseNum) {
    case 1:
      if (mainHouse === "Henry") {
        appOverFlow = true;
        alert("The crime has been found!");
        pageSlide("townPage", "clueStage");
        addChoices();
      } else {
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

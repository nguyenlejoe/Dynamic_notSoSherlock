//UNUSED -- KEPT FOR PROOF OF WORK --  GOODJOB NOAH :)

function Criminal(name, age, bio, image, num) {
  this.name = name;
  this.traits = age;
  this.bio = bio;
  this.image = image;
  this.num = 0;
}

var crim1 = new Criminal(
  "Angela Anger",
  "Muddy Boots",
  "Lorem Ipsum",
  "http://placekitten.com/100/100",
  0
);

var crim2 = new Criminal(
  "Billie Bad",
  "Gold Necklace",
  "Lorem Ipsum",
  "http://placekitten.com/200/200",
  1
);

var crim3 = new Criminal(
  "Charlie Crying",
  "Torn Jeans",
  "Lorem Ipsum",
  "http://placekitten.com/300/300",
  2
);

var crim4 = new Criminal(
  "Daniel Dread",
  "Diamond Watch",
  "Lorem Ipsum",
  "http://placekitten.com/400/400",
  3
);

var crim5 = new Criminal(
  "Eric Evil",
  "Bucket of Salt",
  "Lorem Ipsum",
  "http://placekitten.com/500/500",
  4
);

//Array to keep track of checked culprits that the user has chosen in previous nights
var checkedCulprit = [];
//Slide counter and CurrentCrim variable to help keep track on which person is being viewed currently
var slideCounter = 0;
var currentCrim;

//Firstcheck and nightCounter to prevent buttons from being disabled
var firstCheck = true;
var nightCounter = 0;


//Function to reset carousel to original position
function startCarousel() {
  document.querySelector("#they_did_it").disabled = false;
  slideCounter = 0;
  currentCrim = testCheck1(slideCounter);
  townsPeople.people[culpritNum].trait = officalCrimes.inductiveCrimes[crimeNum].Keytrait;
  document.querySelector(".content__crim--name").innerHTML = townsPeople.people[slideCounter].name;
  document.querySelector("#content__crim--age").innerHTML = townsPeople.people[slideCounter].trait;
  document.querySelector(".content__crim--bio").innerHTML = townsPeople.people[slideCounter].desc;
  console.log(slideCounter);
  checkRecycle();
}

//Switches to next person in list
function next_slide() {
  if (slideCounter <= 3) {
    slideCounter++;
    document.querySelector(".content__crim--name").innerHTML = townsPeople.people[slideCounter].name;
    document.querySelector("#content__crim--age").innerHTML = townsPeople.people[slideCounter].trait;
    document.querySelector(".content__crim--bio").innerHTML = townsPeople.people[slideCounter].desc;
    console.log(slideCounter);
  } else {
    slideCounter = 0;
    document.querySelector(".content__crim--name").innerHTML = townsPeople.people[slideCounter].name;
    document.querySelector("#content__crim--age").innerHTML = townsPeople.people[slideCounter].trait;
    document.querySelector(".content__crim--bio").innerHTML = townsPeople.people[slideCounter].desc;
    console.log(slideCounter);
  }
  document.querySelector("#they_did_it").disabled = false;
  currentCrim = testCheck1(slideCounter);
  checkRecycle();
}



function last_slide() {
  if (slideCounter > 0) {
    slideCounter--;
    document.querySelector(".content__crim--name").innerHTML = townsPeople.people[slideCounter].name;
    document.querySelector("#content__crim--age").innerHTML = townsPeople.people[slideCounter].trait;
    document.querySelector(".content__crim--bio").innerHTML = townsPeople.people[slideCounter].desc;

    console.log(slideCounter);
  } else if (slideCounter <= 0) {
    slideCounter = 4;
    document.querySelector(".content__crim--name").innerHTML = townsPeople.people[slideCounter].name;
    document.querySelector("#content__crim--age").innerHTML = townsPeople.people[slideCounter].trait;
    document.querySelector(".content__crim--bio").innerHTML = townsPeople.people[slideCounter].desc;
    console.log(slideCounter);
  }
  document.querySelector("#they_did_it").innerHTML = "They did it!";
  document.querySelector("#they_did_it").disabled = false;
  currentCrim = testCheck1(slideCounter);
  checkRecycle();
}

//Function to check if user has picked the right culprit
function check_culprit() {
  //Main variable compared to the one chosen by user
  if (mainCulprit === townsPeople.people[slideCounter].name) {
    alert("Right!");
    //User is correct and will be directed to win screen
    pageSlide('carousel','nextNightWin');
  } 
  else{
    //User is wrong and will be directed back to lose screen
      alert("wrong!");
      nightCounter++;
      
      //Check if it is last night
      if(nightCounter < 4){
      //gameGen will run so the next night will continue
      //removes current crime and house to avoid repeat
      removeObject();
      gameGen();
      pageSlide('carousel','nextNightLose');
      
      //Adds chosen culprit to array
      checkedCulprit.push(townsPeople.people[slideCounter].name);
      }
      else{
        alert("There are no more suspects! The criminal has won!");
        pageSlide('carousel','startingPage');
      }
  }
}
  

//Checks current viewed culprit
function testCheck1(slideCounter){
  switch(slideCounter){
    case 0:
      return("Henry");
    case 1:
      return("Alex");
    case 2:
      return("Noah");
    case 3:
      return("Joe");
    case 4:
      return("Aksel");
  }
}

//Function used after the first night
//Checks if users have chosen the culprit in the previous night and disables button
function checkRecycle(){

  if (firstCheck === false){
    for(var c = 0; c <= checkedCulprit.length; c++){
      if(currentCrim === checkedCulprit[c]){
        document.querySelector("#they_did_it").disabled = true;
      }
    }
}
  else{
    if(nightCounter >= 0){
      firstCheck = false;
  }
}



}




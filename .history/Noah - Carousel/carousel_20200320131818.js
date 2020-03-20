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

function test() {
  document.querySelector("h1").innerHTML = crim1.name;
  crim1.printName;
}
// ^Click on "Criminal" it will change to crim1's name^

var slideCounter = 0;



function startCarousel() {
  townsPeople.people[culpritNum].trait = officalCrimes.inductiveCrimes[culpritNum].Keytrait;
  document.querySelector(".content__crim--name").innerHTML = townsPeople.people[slideCounter].name;
  document.querySelector("#content__crim--age").innerHTML = townsPeople.people[slideCounter].trait;
  document.querySelector(".content__crim--bio").innerHTML = townsPeople.people[slideCounter].desc;
  document.querySelector("#slide current").body.style.background = townsPeople.people[slideCounter].imgFile;
  console.log(slideCounter);
}

function next_slide() {
  if (slideCounter <= 3) {
    slideCounter++;
    document.querySelector(".content__crim--name").innerHTML = townsPeople.people[slideCounter].name;
    document.querySelector("#content__crim--age").innerHTML = townsPeople.people[slideCounter].trait;
    document.querySelector(".content__crim--bio").innerHTML = townsPeople.people[slideCounter].desc;
    document.querySelector("#slide current").body.style.background = townsPeople.people[slideCounter].imgFile;
    console.log(slideCounter);
  } else {
    slideCounter = 0;
    document.querySelector(".content__crim--name").innerHTML = townsPeople.people[slideCounter].name;
    document.querySelector("#content__crim--age").innerHTML = townsPeople.people[slideCounter].trait;
    document.querySelector(".content__crim--bio").innerHTML = townsPeople.people[slideCounter].desc;
    document.querySelector("#slide current").body.style.background = townsPeople.people[slideCounter].imgFile;
    console.log(slideCounter);
  }
}

// document.querySelector(".slide").innerHTML = crim.image + 1;

function last_slide() {
  if (slideCounter > 0) {
    slideCounter--;
    document.querySelector(".content__crim--name").innerHTML = townsPeople.people[slideCounter].name;
    document.querySelector("#content__crim--age").innerHTML = townsPeople.people[slideCounter].trait;
    document.querySelector(".content__crim--bio").innerHTML = townsPeople.people[slideCounter].desc;
    document.querySelector("#slide current").body.style.background = townsPeople.people[slideCounter].imgFile;

    console.log(slideCounter);
  } else if (slideCounter <= 0) {
    slideCounter = 4;
    document.querySelector(".content__crim--name").innerHTML = townsPeople.people[slideCounter].name;
    document.querySelector("#content__crim--age").innerHTML = townsPeople.people[slideCounter].trait;
    document.querySelector(".content__crim--bio").innerHTML = townsPeople.people[slideCounter].desc;
    document.querySelector("#slide current").body.style.background = townsPeople.people[slideCounter].imgFile;
    console.log(slideCounter);
  }
}

function check_culprit() {
  if (mainCulprit === townsPeople.people[slideCounter].name) {
    alert("Right!");
    pageSlide('carousel','nextNightWin');
  } else {
    alert("wrong!");
    gameGen();
    pageSlide('carousel','nextNightLose');
  }
}
  

startCarousel();



console.log(townsPeople.people[0].trait);

// if this,um == 4

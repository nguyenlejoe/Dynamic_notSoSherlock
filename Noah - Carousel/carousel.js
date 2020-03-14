function Criminal(name, age, bio, image, num) {
  this.name = name;
  this.age = age;
  this.bio = bio;
  this.image = image;
  this.num = 0;
}

var crim1 = new Criminal(
  "Angela",
  "99",
  "Lorem Ipsum",
  "http://placekitten.com/500/500",
  0
);

var crim2 = new Criminal(
  "Bob",
  "12",
  "Lorem Ipsum",
  "http://placekitten.com/500/500",
  1
);

function test() {
  document.querySelector("h1").innerHTML = crim1.name;
  crim1.printName;
}

function Criminal(name, gender, age, bio, image) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.bio = bio;
  this.image = image;
  this.num = 0;
  this.adder = function() {
    this.num++;
  };
  this.subtract = function() {
    this.num--;
  };
}

var crim1 = new Criminal("bob", "male", 15);

var crim2 = new Criminal("joe", "male", 10);

function test() {
  document.querySelector("h1").innerHTML = crim1.name;
  crim1.printName;
}

function increment() {
  crim1.adder();
}

function decrement() {
  crim1.subtract();
}

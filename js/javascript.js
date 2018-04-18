function Self() {
  this.firstName = "Shambre";
  this.eyeColor = "brown";
  this.likes = ["singing", "reading", "yoga", "knitting", "hiking", "being with my family", "eating delicious food"];
  // this.type = "self";
};

function Husband() {
  this.firstName = "Alex";
  this.eyeColor = "blue";
  this.likes = ["being thoughtful", "reading", "politics", "teaching", "caring for my family", "eating delicious food"];
  // this.type = "husband";
};

function Daughter() {
  this.firstName = "Sam";
  this.eyeColor = "hazel";
  this.likes = ["music", "being humorous", "hanging out with friends", "arguing", "eating delicious food"];
  // this.type = "daughter";
};

function Son() {
  this.firstName = "Zavian";
  this.eyeColor = "blue";
  this.likes = ["being thoughtful", "reading", "being the boss", "light-saber battling", "painting", "singing", "going to the museum", "bioluminescent creatures", "eating delicious food"];
  // this.type = "son";
};

var PersonFactory = (function() {
  var _people = {
    "self": Self,
    "husband": Husband,
    "daughter": Daughter,
    "son": Son
  };

  return {
    build: function(personType) {
      if (!personType) {
        throw "personType is a required parameter";
      }

      personType = personType.toLowerCase();

      if (_people[personType]) {
        return new _people[personType]();
      } else {
        throw personType + " is not a valid type";
      }
    }
  };
})();

var self = PersonFactory.build("Self");
var husband = PersonFactory.build("HUSBAND");
var daughter = PersonFactory.build("DaUgHtEr");
var son = PersonFactory.build("sOn");

console.log(self);
console.log(husband);
console.log(daughter);
console.log(son);

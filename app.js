const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string", "💩");

// Styled
console.log("%c I am some great text", "font-size: 20px", "background: red");

// warning!
console.warn("oh noooo");

// Error :|
console.error("shit!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dogs years old`);
  console.groupEnd();
});

// counting
console.count("Wes");
console.count("Wes");
console.count("steve");
console.count("Wes");
console.count("Wes");

// timing
console.time("Fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching data");
  });

console.table(dogs);

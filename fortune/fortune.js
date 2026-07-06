let fortuneList = [
  { quote: "May the Force be with you.", source: "Star Wars", type: "good" },
  {
    quote:
      "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    source: "Ferris Bueller's Day Off",
    type: "good",
  },
  {
    quote: "Do or do not. There is no try.",
    source: "Star Wars",
    type: "good",
  },
  { quote: "Live long and prosper.", source: "Star Trek", type: "good" },
  { quote: "To infinity and beyond!", source: "Toy Story", type: "good" },
  {
    quote:
      "All we have to decide is what to do with the time that is given us.",
    source: "The Lord of the Rings",
    type: "good",
  },
  { quote: "Winter is coming.", source: "Game of Thrones", type: "bad" },
  { quote: "You're gonna need a bigger boat.", source: "Jaws", type: "bad" },
  { quote: "Houston, we have a problem.", source: "Apollo 13", type: "bad" },
  {
    quote: "Fasten your seatbelts; it's going to be a bumpy night.",
    source: "All About Eve",
    type: "bad",
  },
  {
    quote: "I've got a bad feeling about this.",
    source: "Star Wars",
    type: "bad",
  },
  {
    quote: "The night is dark and full of terrors.",
    source: "Game of Thrones",
    type: "bad",
  },
  { quote: "There is no spoon.", source: "The Matrix", type: "mystery" },
  { quote: "I see dead people.", source: "The Sixth Sense", type: "mystery" },
  {
    quote: "It's a dangerous business, Frodo, going out your door.",
    source: "The Lord of the Rings",
    type: "mystery",
  },
  { quote: "The truth is out there.", source: "The X-Files", type: "mystery" },
  { quote: "Why so serious?", source: "The Dark Knight", type: "mystery" },
  { quote: "The cake is a lie.", source: "Portal", type: "mystery" },
  {
    quote: "It is dangerous to go alone! Take this.",
    source: "The Legend of Zelda",
    type: "good",
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    source: "The Godfather Part II",
    type: "bad",
  },
];

//Display Random Fortune

let box = document.getElementById("fortune-box");

function displayRandomFortune() {
  let index = Math.floor(Math.random() * fortuneList.length);
  let selected = fortuneList[index];

  box.textContent = `${selected.quote} — ${selected.source}`;
}

displayRandomFortune();

// Theme Function

function applyTheme(textColor, bgColor, borderColor, fontSize, fontFamily) {
  box.style.color = textColor;
  box.style.backgroundColor = bgColor;
  box.style.borderColor = borderColor;
  box.style.fontSize = fontSize;
  box.style.fontFamily = fontFamily;
}

// Button Event Listeners

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");


btn1.addEventListener("click", function () {
  applyTheme(
    "#e8f5e9",
    "#1b4332",
    "#95d5b2",
    "22px",
    "'Playfair Display', serif",
  );
});

btn2.addEventListener("click", function () {
  applyTheme("#3a0ca3", "#fcd5ce", "#ff8fab", "21px", "'Verdana', sans-serif");
});

btn3.addEventListener("click", function () {
  applyTheme(
    "#caf0f8",
    "#03045e",
    "#00b4d8",
    "23px",
    "'Montserrat', sans-serif",
  );
});

btn4.addEventListener("click", function () {
  applyTheme(
    "#4a4a4a",
    "#f5ebe0",
    "#d5bdaf",
    "20px",
    "'Courier New', monospace",
  );
});

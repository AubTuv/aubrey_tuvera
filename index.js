

const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", changeDescPic);
let image = "a";
let desc="b";
const zodiac = [
  "rooster.jpg",
  "dog.jpg",
  "pig.jpg",
  "rat.jpg",
  "ox.jpg",
  "tiger.jpg",
  "rabbit.jpg",
  "dragon.jpg",
  "snake.jpg",
  "horse.jpg",
  "sheep.jpg",
  "monkey.jpg" 
];
const description = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];
function changeDescPic() {
  const yer=document.getElementById("year");
  const year = parseInt(yer.value);
  let zodiacIndex = (year % 12)-1;
  image = zodiac[zodiacIndex];
  desc = description[zodiacIndex];

  const userReport = document.getElementById("cs-description");
  userReport.innerHTML = image;
  const imgElement = document.getElementById("img");
  imgElement.src = image;
}

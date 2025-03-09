const words = [
  "Fantastic", "Amazing", "Brilliant", "Outstanding", "Innovative",
  "Incredible", "Superb", "Awesome", "Impressive", "Exceptional",
  "Mind-blowing", "Spectacular", "Genius", "Creative", "Next-level"
];
document.body.style.height = (window.innerHeight - 30 ) + "px";
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.position = 'relative';

const maxX = window.innerWidth;
const maxY = window.innerHeight;
document.getElementById('btn').style.height = '30px'
document.getElementById('btn').style.width = '25%'
document.getElementById('btn').style.position = "absolute";
document.getElementById('btn').style.top = '90%';
document.getElementById('btn').style.left = '37%';
document.getElementById('btn').style.color = 'white';
document.getElementById('btn').style.fontWeight = '600';
document.getElementById('btn').style.backgroundColor = 'black';
document.body.style.backgroundColor = randomColor();

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
box1.style.height = (maxY * 14) / 100 + "px";
box1.style.width = (maxY * 14) / 100 + "px";
box2.style.height = (maxY * 14) / 100 + "px";
box2.style.width = (maxY * 14) / 100 + "px";
box3.style.height = (maxY * 14) / 100 + "px";
box3.style.width = (maxY * 14) / 100 + "px";
box4.style.height = (maxY * 14) / 100 + "px";
box4.style.width = (maxY * 14) / 100 + "px";
box1.style.border = `5px solid ${randomColor()}`;
box1.style.borderRadius = "50%";
box1.style.backgroundColor = randomColor();
box2.style.border = `5px solid ${randomColor()}`;
box2.style.borderRadius = "50%";
box2.style.backgroundColor = randomColor();
box3.style.border = `5px solid ${randomColor()}`;
box3.style.borderRadius = "50%";
box3.style.backgroundColor = randomColor();
box4.style.border = `5px solid ${randomColor()}`;
box4.style.borderRadius = "50%";
box4.style.backgroundColor = randomColor();
box1.style.textAlign = 'center';
box1.style.alignContent = 'center';
box1.textContent = words[Math.floor(Math.random() * words.length)];
box2.style.textAlign = 'center';
box2.style.alignContent = 'center';
box2.textContent = words[Math.floor(Math.random() * words.length)];
box3.style.textAlign = 'center';
box3.style.alignContent = 'center';
box3.textContent = words[Math.floor(Math.random() * words.length)];
box4.style.textAlign = 'center';
box4.style.alignContent = 'center';
box4.textContent = words[Math.floor(Math.random() * words.length)];

function boxChanging() {
  box1.textContent = words[Math.floor(Math.random() * words.length)];
  box1.style.border = `5px solid ${randomColor()}`;
  box1.style.borderRadius = "50%";
  box1.style.backgroundColor = randomColor();
  box1.style.transition = "all 2s ease";
  box1.style.position = "absolute";
  box1.style.top = Math.random() * (maxY - box1.offsetHeight) + "px";
  box1.style.left = Math.random() * (maxX - box1.offsetWidth) + "px";
  
  box2.textContent = words[Math.floor(Math.random() * words.length)];
  box2.style.border = `5px solid ${randomColor()}`;
  box2.style.borderRadius = "50%";
  box2.style.backgroundColor = randomColor();
  box2.style.transition = "all 2s ease";
  box2.style.position = "absolute";
  box2.style.top = Math.random() * (maxY - box1.offsetHeight) + "px";
  box2.style.left = Math.random() * (maxX - box1.offsetWidth) + "px";
  
  box3.textContent = words[Math.floor(Math.random() * words.length)];
  box3.style.border = `5px solid ${randomColor()}`;
  box3.style.borderRadius = "50%";
  box3.style.backgroundColor = randomColor();
  box3.style.transition = "all 2s ease";
  box3.style.position = "absolute";
  box3.style.top = Math.random() * (maxY - box1.offsetHeight) + "px";
  box3.style.left = Math.random() * (maxX - box1.offsetWidth) + "px";
  
  box4.textContent = words[Math.floor(Math.random() * words.length)];
  box4.style.border = `5px solid ${randomColor()}`;
  box4.style.borderRadius = "50%";
  box4.style.backgroundColor = randomColor();
  box4.style.transition = "all 2s ease";
  box4.style.position = "absolute";
  box4.style.top = Math.random() * (maxY - box1.offsetHeight) + "px";
  box4.style.left = Math.random() * (maxX - box1.offsetWidth) + "px";
  
  
  document.getElementById('btn').style.backgroundColor = randomColor();
  document.body.style.backgroundColor = randomColor();
}

function randomColor() {
  let latters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += latters[Math.floor(Math.random() * 16)];
  }
  return color;
}
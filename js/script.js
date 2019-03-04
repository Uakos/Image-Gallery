// JS fuking image gallery
//Start by default and its btn Play
autoSlider();
//let's
let line = document.querySelector('.gallery-line'),
    pos = 0;
var sec = 1000,
    timer;
//Auto Slider
function autoSlider() {
  timer = setTimeout(slideRight, sec);
}
//Minus time
function minusTime() {
  sec = sec - 1000;
  if (sec < 999){
    sec = 1000;
  }
}
//Plus time
function plusTime() {
  sec = sec + 1000;
}
// Slide Right
function slideRight() {
  pos = pos - 1024;
  if (pos < - 5120) {
    pos = 0;
  }
  line.style.left = pos +'px';
  autoSlider();
  console.log(line);
}
// Slide left
function slideLeft() {
  pos = pos + 1024;
  if (pos > 0) {
    pos = - 5120;
  }
  line.style.left = pos +'px';
  console.log(line);
}
//Pouse
function pause() {
  clearTimeout(timer);
}
//Stop
function stop() {
  pos = 0;
  line.style.left = pos +'px';
  console.log(line);
  clearTimeout(timer);
}
//Thumbnails
function $1() {
  pos = 0;
  line.style.left = pos +'px';
  console.log(`slide 1`);
  clearTimeout(timer);
}
function $2() {
  pos = -1024;
  line.style.left = pos +'px';
  console.log(`slide 2`);
  clearTimeout(timer);
}
function $3() {
  pos = -2048;
  line.style.left = pos +'px';
  console.log(`slide 3`);
  clearTimeout(timer);
}
function $4() {
  pos = -3072;
  line.style.left = pos +'px';
  console.log(`slide 4`);
  clearTimeout(timer);
}
function $5() {
  pos = -4096;
  line.style.left = pos +'px';
  console.log(`slide 5`);
  clearTimeout(timer);
}
function $6() {
  pos = -5120;
  line.style.left = pos +'px';
  console.log(`slide 6`);
  clearTimeout(timer);
}




















//

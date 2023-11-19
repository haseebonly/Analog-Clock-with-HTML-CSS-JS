function showClock() {
  let hr = document.getElementsByClassName("hr")[0];
  let mn = document.getElementsByClassName("mn")[0];
  let ss = document.getElementsByClassName("ss")[0];
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hr.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
  mn.style.transform = `rotate(${6 * minutes}deg)`;
  ss.style.transform = `rotate(${6 * seconds}deg)`;

  let sound = new Audio("sound.wav");
  sound.play();
}

setInterval(showClock, 1000);

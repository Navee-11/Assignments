const date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let count = 0;
let id = setInterval(counter, 1000);
function counter() {
  seconds++;
  if (seconds >= 60) {
    minutes = minutes + 1;
    seconds = 0;
  }
  if (minutes >= 60) {
    hour = hour + 1;
    minutes = 0;
  }
  if (hour >= 12) {
    hour = hour % 12;
  }
  console.log(`${hour}:${minutes}:${seconds}`);
}

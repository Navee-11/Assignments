let count = 0;
let id = setInterval(counter, 1000);
function counter() {
  console.log(count++);
  if (count > 10) clearInterval(id);
}

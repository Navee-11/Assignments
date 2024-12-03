const btn = document.querySelector("#btn");
const result = document.querySelector("#sum");
//Conventional Method to Calculate the sum
btn.addEventListener("click", () => {
  const a = document.querySelector("#firstNumber").value;
  const b = document.querySelector("#secondNumber").value;
  console.log(a, b);
  const sum = parseInt(a) + parseInt(b);
  console.log(sum);
  result.innerText = sum;
});

//Use server to calculate

// btn.addEventListener("click", () => {
//   const a = document.querySelector("#firstNumber").value;
//   const b = document.querySelector("#secondNumber").value;
//   console.log(
//     fetch("http://localhost:3000/sum?a=" + a + "&b=" + b)
//       .then((res) => res.text())
//       .then((data) => {
//         console.log(data);
//         result.innerText = data;
//       })
//   );
// });

//Debouncing

function servercall() {
  const a = document.querySelector("#firstNumber").value;
  const b = document.querySelector("#secondNumber").value;
  console.log(
    fetch("http://localhost:3000/sum?a=" + a + "&b=" + b)
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        result.innerText = data;
      })
  );
  // const sum = parseInt(a) + parseInt(b);
  // console.log(sum);
  // result.innerText = sum;
}

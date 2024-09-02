// Array:   push(), pop(), shift(), unshift(), splice(), slice(),concat(), forEach(), map(), filter(), reduce(), find(), sort()
let arr = ["Apple", "Banana", "Orange", "Grapes", "Pears", "Guava"];
function Push(arr, ele) {
  arr.push(ele);
}
// Push(arr, "5");//5 pushed to the end of the array
// console.log(arr);

function Pop(arr) {
  console.log(arr.pop()); //last element is popped
}
// Pop(arr);
// console.log(arr);

function Shift(arr) {
  console.log(arr.shift()); //first element is popped
}
// Shift(arr);
// console.log(arr);

function Unshift(arr, ...ele) {
  console.log(arr.unshift(...ele));
}
// Unshift(arr, 3, 4, 5, 6); //3,4,5,6 will be added at the start
// console.log(arr);

function Splice(arr, start, deleteCount, ...items) {
  console.log(arr.splice(start, deleteCount, ...items)); //removes the (delete count)number of elements from the (start)index and then adds the items from (start)index
}
// Splice(arr, 2, 2, "Mango");
// console.log(arr);

function Slice(arr, start, length) {
  console.log(arr.slice(start, length));
}
// Slice(arr, 2, 5);
// console.log(arr);

Array.prototype.myShift = function () {
  let myValue = this[0];
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  this.length = this.length - 1;
  return myValue;
};
// console.log(arr.myShift());
// console.log(arr);

//Array.forEach
function ForEach(arr) {
  arr.forEach((item) => console.log(item.toUpperCase()));
}
// ForEach(arr);

//Array.flat(depth)-Removes all the sub Arrays
function Flat(arr) {
  console.log(arr.flat(2));
}
// const arr2 = [1, 2, [3, 4, [5, 6]]];
// Flat(arr2);

function Map(arr) {
  console.log("Original array " + arr);
  let arr1 = arr.map((x) => x * 2);
  console.log("After mapping", arr1);
}
const arr2 = [1, 2, 3, 4, 5, 6];
// Map(arr2);

function Filter(arr) {
  console.log(arr);
  let arr2 = arr.filter((item) => item > 10);
  console.log(arr2);
}
// Filter([5, 20, 23, 35, 4, 5, 7]);

function Reduce(arr) {
  let sum = arr.reduce((acc, cur) => {
    acc = acc + cur;
    return acc;
  }, 0);
  console.log(sum);
}
Reduce(arr2);

function isPositive(a) {
  if (a > 0) {
    return "Yes";
  } else if (a === 0) {
    throw new Error("Zero Error");
  } else if (a < 0) {
    throw new Error("Negative Error");
  }
}
// console.log(isPositive(20));//"Yes"
// console.log(isPositive(0));//"Zero Error"
console.log(isPositive(-15)); //"Negative Error"

function reverseString(s) {
  try {
    return s.split("").reverse().join("");
  } catch (e) {
    return e.name;
  }
}

//console.log(reverseString("20215"));//51202
console.log(reverseString(5421)); //TypeError

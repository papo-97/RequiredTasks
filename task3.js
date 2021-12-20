function reverseString(s) {
    try {
      return s.split("").reverse().join("");
    } catch (e) {
      return e.message;
    }
  }
  
  //console.log(reverseString("326"));//623
  console.log(reverseString(96632)); //TypeError
  
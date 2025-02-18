/* Tabamo, Euan Jed S.
2023-10822
February 18, 2025
CMSC 100 C1L
*/

function validatePassword(password1, password2) {
  // Passwords must match
  if (password1 !== password2) {
    return false;
  }

  // Passwords have at least 8 characters
  if (password1.length < 8 || password2.length < 8) {
    return false;
  }

  // Passwords must have at least 1 number, 1 uppercase character, and 1 lowercase character
  let hasNumber = false;
  let hasUppercase = false;
  let hasLowercase = false;
  for (let i = 0; i < password2.length; i++) {
    // Get the char at pos i
    const character = password2.charAt(i);

    // Parse the char as int and check if it is a number
    if (!isNaN(parseInt(character))) {
      hasNumber = true;
    }
    // Transform the char to uppercase. If the result is the same, then the char is uppercase 
    else if (character.toUpperCase() === character) {
      hasUppercase = true;
    }
    // Transform the char to lowercase. If the result is the same, then the char is lowercase 
    else if (character.toLowerCase() === character) {
      hasLowercase = true;
    }
  }

  // Check remaining conditions
  return hasNumber && hasUppercase && hasLowercase;
}

function reversePassword(password) {
  // Initialize an empty string to hold the reversed password
  let reversed = "";
  // Concatenate each char in password to reversed starting from the end
  for (let i = password.length - 1; i >= 0; i--) {
    reversed += password.charAt(i);
  }
  // Return reversed string
  return reversed;
}

function storePassword(name, password1, password2) {
  // Create an object
  const stored = {};

  // Initialize name field
  stored["name"] = name;

  // If the passwords are valid, store the reversed password
  if (validatePassword(password1, password2)) {
    stored["newpassword"] = reversePassword(password2);
  }
  // Otherwise, store the first password 
  else {
    stored["newpassword"] = password1;
  }

  // Return the object
  return stored;
}


function runTests() {
  /* VALIDATE PASSWORDS */
  const validateTest1 = false === validatePassword("helloworld", "hello");
  const validateTest2 = false === validatePassword("hello", "hello");
  const validateTest3 = false === validatePassword("helloooo", "helloooo");
  const validateTest4 = false === validatePassword("hello1234", "hello1234");
  const validateTest5 = false === validatePassword("HELLO1234", "HELLO1234");
  const validateTest6 = true === validatePassword("Hello1234", "Hello1234");
  
  console.log("\nVALIDATE PASSWORDS\n");
  console.log(`validatePassword() returns false if passwords are mismatched: ${validateTest1}`);
  console.log(`validatePassword() returns false if password/s are too short: ${validateTest2}`);
  console.log(`validatePassword() returns false if there is no numerical character: ${validateTest3}`);
  console.log(`validatePassword() returns false if there is no lowercase character: ${validateTest4}`);
  console.log(`validatePassword() returns false if there is no uppercase character: ${validateTest5}`);
  console.log(`validatePassword() returns true if password is valid: ${validateTest6}`);

  /* REVERSE PASSWORD */  
  const reverseOutput = reversePassword("18sd9hj1uhy832");
  const reverseTest = "238yhu1jh9ds81" === reverseOutput;

  console.log("\nREVERSE PASSWORDS\n");
  console.log(`reversePassword() returns true if password is correctly reversed: ${reverseTest}`);
  console.log(`Output: ${reverseOutput}`);

  /* STORE PASSWORDS */
  // Testing for object equality: https://www.freecodecamp.org/news/javascript-comparison-operators-how-to-compare-objects-for-equality-in-js/  
  const object1 = storePassword("John", "Pass1234", "Pass1234");
  const storeTest1 = JSON.stringify(object1) === JSON.stringify({ name: "John", newpassword: "4321ssaP" });
  const object2 = storePassword("John", "Pass123", "Pass12345");
  const storeTest2 = JSON.stringify(object2) === JSON.stringify({ name: "John", newpassword: "Pass123" });
  
  console.log("\nSTORE PASSWORDS\n");
  console.log(`storePassword() stores reversed password if valid: ${storeTest1}`);
  // Printing without newline: https://stackoverflow.com/a/6157569
  process.stdout.write("Output: ");
  console.log(object1);
  console.log(`storePassword() stores first password if invalid: ${storeTest2}`);
  process.stdout.write("Output: ");
  console.log(object2);
}

runTests();
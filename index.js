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

    // Parse the char as int and check if it is the same char by using comparison
    if (parseInt(character) == character) {
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
}
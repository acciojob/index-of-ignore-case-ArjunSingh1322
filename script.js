function indexOfIgnoreCase(s1, s2) {
  // Ensure input is valid
  if (typeof s1 !== "string" || typeof s2 !== "string") {
    return -1;
  }
  
  // Convert both strings to lowercase and find index
  return s1.toLowerCase().indexOf(s2.toLowerCase());
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
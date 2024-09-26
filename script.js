function toCase(str) {
  // write your code here
	  // Check if the input string is empty
    if (str === '') {
        return '-';
    }

    // Convert the string to lowercase and uppercase
    const lowerCaseStr = str.toLowerCase();
    const upperCaseStr = str.toUpperCase();

    // Return the formatted string with '-' as the delimiter
    return `${lowerCaseStr}-${upperCaseStr}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

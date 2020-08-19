// Test one 
// Describe: isLeapYear()
// Test: "It returns false for years that are not a leap year"
// Expect(isLeapYear(1993)).toEqual(false);

function isLeapYear(year) {
  return false;
}

isLeapYear(1993);

// Test Two
// Describe: isLeapYear()
// Test: "It returns false for years that are not a leap year"
// Expect(isLeapYear(1993)).toEqual(false);

// Test: "It returns true for years that are divisible by 4"
// Expect(isLeapYear(2004)).toEqual(true);

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// test three 
// Test: "It returns false for years that are divisible by 100"
// Expect(isLeapYear(2100)).toEqual(false);

function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}

// TEST FOUR
// Test: "It returns true for years that are divisible by 400"
// Expect(isLeapYear(2000)).toEqual(true);

function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)|| (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
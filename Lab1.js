
// COMP 3123 – Lab 1 

function Exercise1(str) {
  if (typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .replace(/\b\p{L}/gu, (ch) => ch.toUpperCase());
}

console.log("Exercise 1:");
console.log(Exercise1('the quick brown fox')); 
console.log(Exercise1('  hello   world  '));   
console.log("---------------------------------");


function Exercise2(a, b, c) {
  let m = a;
  if (b > m) m = b;
  if (c > m) m = c;
  return m;
}

console.log("Exercise 2:");
console.log(Exercise2(1, 0, 1));        
console.log(Exercise2(0, -10, -20));    
console.log(Exercise2(1000, 510, 440)); 
console.log("---------------------------------");


function Exercise3(str) {
  if (typeof str !== 'string' || str.length < 3) return str;
  return str.slice(-3) + str.slice(0, -3);
}

console.log("Exercise 3:");
console.log(Exercise3('Python'));      
console.log(Exercise3('JavaScript'));  
console.log(Exercise3('Hi'));          
console.log("---------------------------------");


function Exercise4(deg) {
  if (typeof deg !== 'number') return 'Invalid angle';
  if (deg === 90)  return 'Right angle';
  if (deg === 180) return 'Straight angle';
  if (deg > 0 && deg < 90)    return 'Acute angle';
  if (deg > 90 && deg < 180)  return 'Obtuse angle';
  return 'Invalid angle';
}

console.log("Exercise 4:");
console.log(Exercise4(47));   
console.log(Exercise4(90));  
console.log(Exercise4(145));  
console.log(Exercise4(180));  
console.log("---------------------------------");



function Exercise5(arr, k) {
  if (!Array.isArray(arr) || k <= 0 || k > arr.length) return null;

  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];

  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    if (windowSum > maxSum) maxSum = windowSum;
  }
  return maxSum;
}

console.log("Exercise 5:");
console.log(Exercise5([1, 2, 3, 14, 5], 2)); 
console.log(Exercise5([2, 3, 5, 1, 6], 3));  
console.log(Exercise5([9, 3, 5, 1, 7], 2));  
console.log("---------------------------------");

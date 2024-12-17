// fibs.js
// Fibonacci sequence with memoization

let memo = []; // Array to store previously calculated Fibonacci numbers

function setup() {
  noCanvas();
  console.log("Fibonacci numbers with memoization:");
  
  let n = 10; // Example: Calculate the first 10 Fibonacci numbers
  for (let i = 0; i <= n; i++) {
    console.log(`fib(${i}) = ${fib(i)}`);
  }
}

// Recursive Fibonacci function with memoization
function fib(n) {
  // Base case
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Check if we already calculated fib(n)
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Recursive step with memoization
  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
}

const args = process.argv.slice(2);
const num = parseInt(args[0]);
console.log(!isNaN(num) ? `My number: ${num}` : "Not a number");

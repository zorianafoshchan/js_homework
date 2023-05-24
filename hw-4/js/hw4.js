// 4
let senseOfLife = 45;

function show(otherSenseOfLife) {
 if (otherSenseOfLife)
  return otherSenseOfLife;

 return senseOfLife;
}
console.log(show());
console.log(show(5));

// 5
function count(num1, num2, method) {
 switch (method) {
  case "+":
   return num1 + num2;
   break;
  case "-":
   return num1 - num2;
   break;
  case "*":
   return num1 * num2;
   break;
  case "/":
   return num1 / num2;
   break;
 }
}

console.log(count(40, 50, "*"));


// 6

function sortNumbers(nums){
 nums = nums.sort()
 
 return nums;
}

console.log(sortNumbers([3, 1, 4, 2, 5]));
console.log(sortNumbers([3, 1, 4, 2, 5, 7, 6]));


// 7

function min(a, b){
 if(a < b){
  return a;
 }else{
  return b;
 }
}


console.log(min(10, 9));
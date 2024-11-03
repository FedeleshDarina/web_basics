//Завдання 1
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubArray(array);
console.log(maxSum);

//Завдання 2

function addLargeNumbers(num1, num2) {
  let result = '';
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry) {
      let digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      let digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      let sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
      i--;
      j--;
  }

  return result;
}
let number1 = "123456788865909348283424555595";
let number2 = "987654321098765432109876543210";
console.log(addLargeNumbers(number1, number2));

//Завданння 3

function arrayDifference(arr1, arr2) {
  const count1 = {};
  const count2 = {};

  for (const item of arr1) {
      count1[item] = (count1[item] || 0) + 1;
  }

  for (const item of arr2) {
      count2[item] = (count2[item] || 0) + 1;
  }
  const result = [];
  for (const item in count1) {
      const difference = count1[item] - (count2[item] || 0);
      if (difference > 0) {
          result.push(...Array(difference).fill(Number(item)));
      }
  }

  return result;
}
const arr1 = [9, 9, 7, 0, 4, 2, 1];
const arr2 = [2, 9, 11];
console.log(arrayDifference(arr1, arr2));  

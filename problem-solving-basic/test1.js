function findMinMaxSum(arr) {
  if (arr.length !== 5) {
    throw new Error("Input array must have exactly five positive integers");
  }

  arr.sort((a, b) => a - b);

  const minSum = arr[0] + arr[1] + arr[2] + arr[3];
  const maxSum = arr[1] + arr[2] + arr[3] + arr[4];

  return {
    minSum, maxSum
  }
}

const inputArray = [5, 2, 4, 3, 1];
const result = findMinMaxSum(inputArray);
console.log(result.minSum, result.maxSum);
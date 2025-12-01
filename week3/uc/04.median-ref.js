//*1
// function cariMedian(arr) {
//     // you can only write your code here!
//     let median = 0;
//     let centerIndex = 0;
//     if (arr.length % 2 == 0) {
//         centerIndex = arr.length / 2;
//         median = (arr[centerIndex] + arr[centerIndex - 1]) / 2;
//     } else {
//         centerIndex = Math.floor(arr.length / 2);
//         median = arr[centerIndex];
//     }
//     return median;
// }

//*2
function cariMedian(arr) {
    // you can only write your code here!
    let median = 0;
    let centerIndex = Math.floor(arr.length / 2);
    median =
        arr.length % 2 == 0
            ? (arr[centerIndex] + arr[centerIndex - 1]) / 2
            : arr[centerIndex];
    return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

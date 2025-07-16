function cariModus(arr) {
    let modus = null;
    let maxFreq = 0;

    //* with Object
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (!freq[number]) {
            freq[number] = 1;
        } else {
            freq[number]++;
        }
    }

    for (const number in freq) {
        if (freq[number] > maxFreq) {
            maxFreq = freq[number];
            modus = +number;
        }
    }
    console.log(Object.keys(freq).length);

    if (maxFreq === 1 || Object.keys(freq).length == 1) return -1;

    //=//

    // *nested loop for
    //  for (let i = 0; i < arr.length; i++) {
    //      const indexI = arr[i];
    //      let freq = 0;
    //      for (let j = 0; j < arr.length; j++) {
    //          const indexJ = arr[j];
    //          if (indexI == indexJ) {
    //              freq++;
    //          }
    //      }
    //      if (freq > maxFreq) {
    //          maxFreq = freq;
    //          modus = arr[i];
    //      }
    //  }
    //  if (maxFreq == 1 || maxFreq == arr.length) return -1;

    return modus;
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

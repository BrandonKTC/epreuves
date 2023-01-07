"use strict";

function swap(arr, idx1, idx2) {
  var _ref = [arr[idx2], arr[idx1]];
  arr[idx1] = _ref[0];
  arr[idx2] = _ref[1];
} // Optimized with noSwaps


function bubble(arr) {
  var noSwaps;

  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubble([6, 1, 2, 3, 4, 5]));
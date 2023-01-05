"use strict";

function eau13(arr) {
  var n = arr.length;

  for (var i = 0; i < n - 1; i++) {
    var min = i;

    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      var _ref = [arr[min], arr[i]];
      arr[i] = _ref[0];
      arr[min] = _ref[1];
    }
  }

  return arr;
}

console.log(eau13([6, 5, 4, 3, 2, 1]));
"use strict";

function eau12() {
  tab = process.argv.splice(2);

  for (var i = tab.length; i > 1; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (tab[j + 1] < tab[j]) {
        var _ref = [tab[j], tab[j + 1]];
        tab[j + 1] = _ref[0];
        tab[j] = _ref[1];
      }
    }
  }

  return tab;
}

console.log(eau12());
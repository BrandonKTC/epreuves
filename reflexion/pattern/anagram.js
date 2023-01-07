// Frequency Counter

str1 = "anagram";
str2 = "nagaram";

// Solution O(n^2)
function anagram(str1, str2) {
	// loop over 1st str
	// loop over 2nd str
	// if str2.indexOf(str1[i] != -1) else return false
	// str2 = str2.splice(str1[i], 1)
	// if str2.length == 0 return true
}

// Solution O(n)
function anagram2(str1, str2) {
	// if str1.length != str2.length return false
	//  initiate 2 object
	// loop over 1st str
	// if str != 1st obj initiate a key with the value of 1
	// loop over 2nd str
	// if str != 2nd obj initiate a key with the value of 1
	// for each key in 1st obj
	// if obj[key] != obj2[key] return false
}

console.log(anagram(str1, str2));

// Javascript Basics

// variable declaration
var number = 5; // variable <id> = <expression> variables can be any datatype (no explicit casting)
let this_number = "something";  // bounded by scope of where the variable is declared
const pi = 3.14;	// cannot change

// String stuff

var test_string = "This is a \"double quoted\" sentence.";  // string declaration using quotes inside.
var test_string2 = 'This also works with "double quotes".';
var test_string3 = `this also works if you want 'single' or "double" quotes in a string`;

// Other useful escapes: \\ backslash, \n newline, \r carriage return, \t tab, \b backspace, \f form feed;

console.log(test_string); 		// equivalent of print statement
var string_length = test_string.length; 	// return length of string 
var first_letter = test_string[0]; 			// returns the 0th index of the string

// String indecies are immutable -- you  must edit the entire string

// Function with string passing and returning
function wordBlanks(noun, adjective, verb, adverb){
	var result = "";
	result += "The " + adjective + " " + noun + " " + verb + " to the store " + adverb + "."; 
	return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));


// Arrays
var test_array = ["element1", 2]; 			// array declaration (elements do not have to match type)
// Nested Array
var nested_array = [["array1", 2], ["array2"], 3, pi]; 
test_array.push(["element3"]); 				// push element to the end of the array
var last_element = test_array.pop();		// pop the last element from the array 
test_array.shift();							// removes the first element of the array
test_array.unshift("new_element"); 			// adds new_element to the front of the array


// Objects
var testObject = {
	"hat" : "ballcap";
	"shirt" : "jersey";
	"shoes" : "cleats";
};

var hatValue = testObject.hat; 				// should return ballcap
var shirtValue = testObject["shirt"];		// use this if the item in the object has a problematic field name


// https://www.youtube.com/watch?v=PkZNo7MFNFg 1:53:17 resume here
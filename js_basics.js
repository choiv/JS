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

/*

	Write a program that uses a single synchronous filesystem operation to
	READ A FILE and print the number of newlines (\n) it contains to the
  	console (stdout), similar to running cat file | wc -l.

	The full path to the file to read will be provided as the first
	command-line argument (i.e., process.argv[2]).

*/


// require('fs') imports the filesystem module from the node core library.
// no path is needed because it is a part of the core library
const fs = require('fs');
let file  = process.argv[2]
let content = fs.readFileSync(file).toString();
//console.log(content);
let splitArray = content.split("\n")
console.log(splitArray.length - 1);

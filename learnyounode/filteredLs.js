/*

 	Create a program that prints a list of files in a given directory,
  	filtered by the extension of the files. You will be provided a directory
  	name as the first argument to your program (e.g. '/path/to/dir/') and a
  	file extension to filter by as the second argument.
	
	The list of files should be printed to the console, one file per line. You
  	must use asynchronous I/O.

*/


const fs = require('fs');

//console.log(process.argv[2])  // provided directory
//console.log(process.argv[3]) // extension (.md)

function testCondition(file)
{
	return file.endsWith(process.argv[3])
}


fs.readdir(process.argv[2], function(err, data)
{
	if (err){console.log(err);}

//	console.log( fileList)
	var filteredList = fileList.filter(testCondition);
	filteredList.forEach(function(file){
		if(file !== process.argv[3])
		{
			console.log(file)	
		}
		
	})
	
	
	

	
	
	//	return process.argv[2].filter(testCondition)
})



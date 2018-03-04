const fs = require('fs')

let file = process.argv[2];
fs.readFile(file, function(error, data)
{
	if (error) throw err;
	console.log(data.toString().split('\n').length -1);
	
})
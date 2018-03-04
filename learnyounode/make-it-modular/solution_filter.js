/*

 You must write a module file to do most of the work. 
 
 The module must export a single function that takes three arguments: the directory name,        
 the filename extension string and a callback function, in that order. 
 
 The filename extension argument must be the same as what was passed to your         
 program. Don't turn it into a RegExp or prefix with "." or do anything          
 except pass it to your module where you can do what you need to make your       
 filter work.      
 
 In this exercise, the data will be your filtered list of files, as an Array. 
 If you receive an error, e.g. from your call to fs.readdir(), 
 the callback must be called with the error, and only the error, as the first argument.
 
 
 These four things are the contract that your module must follow.

   1. Export a single function that takes exactly the arguments described.
   2. Call the callback exactly once with an error or some data as described.
   3. Don't change anything else, like global variables or stdout.
   4. Handle all the errors that may occur and pass them to the callback.
 
*/

// path and fs node core modules are imported into the source code
let path = require('path')
let fs = require('fs')

module.exports = function(dirname, extension, callback)
{

				fs.readdir(dirname, function(err, data)
				{
								if(err) return callback(err)
								
        data = data.filter(function(data){
            // path.extname returns the file extension.
            
            return path.extname(data) === '.' + extension
        })
        callback(null, data)
				})
}

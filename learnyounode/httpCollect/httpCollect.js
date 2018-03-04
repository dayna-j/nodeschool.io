/*  

  Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. 
	
	Collect all data from the server (not  just the first "data" event) and then write two lines to the console
  

  The first line you write should just be an integer representing the number of characters received from the server. 
	The second line should contain the complete String of characters sent by the server.
	
	


	Both bl and concat-stream can have a stream piped in to them and they will collect the data for you.
	Once the stream has ended, a callback will be fired with the data:
  response.pipe(concatStream(function (data) { ... }))
*/


const concatStream = require('concat-stream')
var http = require('http')

const url = process.argv[2]

http.get(url, function(response)
{
//	response.setEncoding('utf8')
	response.pipe(concatStream(function(data)
  {
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})



/*
## HTTP CLIENT (Exercise 7 of 13)  
   
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout).  

*/

var http = require('http')
if (!process.argv[2]) {console.log('No input parameter');}
else {
	http.get(process.argv[2], function (response) {  
	response.setEncoding('utf8')  
	response.on('data', console.log)  
	response.on('error', console.error)  
});
}
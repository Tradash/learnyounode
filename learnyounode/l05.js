/*	
Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  
   
  For example, if you get 'txt' as the second argument then you will need to  
  filter the list to only files that end with .txt. Note that the second  
  argument will not come prefixed with a '.'.  
   
  Keep in mind that the first arguments of your program are not the first  
  values of the process.argv array, as the first two values are reserved for  
  system info by Node.  
   
  The list of files should be printed to the console, one file per line. You  
  must use asynchronous I/O.  
  
*/
const fs = require('fs');

if (!process.argv[2] & !process.argv[3]) {
	console.log('No file name or extension in arguments');
} else {
	fs.readdir(process.argv[2], (err, fl)=>{
		if (err) { console.log('Error read file');
		} else {
		const re=new RegExp('.'+process.argv[3]+'\$')
		const rezlist = fl.filter(e=>e.match(re));
		rezlist.reduce((s,e)=>{console.log(e);},[])
		}
	});
}



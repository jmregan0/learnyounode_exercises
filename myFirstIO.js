var fs = require('fs'); 

/*
All synchronous or blocking filesystem methods in the fs
module end with 'Sync' - To read a file the syntax is: 
fs.readFileSync('/path/to/file'); 
This returns a BUFFER object, which will be the contents
of the file. 

Remember: Buffer Objects are node's way of representing arrays
of data by ascii, binary or some other format. 

Remember: Buffer Objects can be converted to strings with toString(); 

*/

var bufferData = fs.readFileSync(process.argv[2]); 
var path = bufferData.toString(); 
console.log(path.split('\n').length - 1); 
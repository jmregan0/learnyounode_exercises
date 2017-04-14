
var args = Array.prototype.slice.call(process.argv, 2); 
var total = 0; 
args.forEach(function(n){
    total+=parseInt(n); 
})
console.log(total.toString()); 
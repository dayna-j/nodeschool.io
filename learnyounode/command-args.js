// You can access command-line arguments via the global process object.
// process.argv


//console.log(process.argv.length)
var sum = 0;
var num = 0;

for(let i = 2; i < process.argv.length; i++)
{
	sum += Number(process.argv[i]);
}

console.log(sum);

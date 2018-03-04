//  im
let filterFunction = require('./solution_filter')
let dirname = process.argv[2]
let extension = process.argv[3]

filterFunction(dirname, extension, function(err, data)
{
    if(err)
    {
        return console.log('An error occured:' + err)
    }
    
    data.forEach(function(file)
    {
        console.log(file)
    })
})
var mymodule = require('./filterFiles');

var directory = process.argv[2];
var fileExtension = process.argv[3];

mymodule(directory, fileExtension, (err, files) => {
    if (err) {
        return console.error(err);
    }

    files.forEach(file => console.log(file));
})

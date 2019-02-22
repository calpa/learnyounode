var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var fileExtension = '.' + process.argv[3];

var matched = [];

fs.readdir(directory, (err, files) => {
    if (err) {
        return console.error(err);
    }
    files.forEach(file => {
        if (path.extname(file) === fileExtension) {
            matched.push(file);
        }
    });

    matched.forEach((file) => { console.log(file) });
})

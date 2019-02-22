var fs = require('fs');
var path = require('path');

function filterFiles (directory, fileExtension, cb) {
    var list = [];

    fs.readdir(directory, (err, files) => {
        if (err) {
            return cb(err);
        }
        files.forEach(file => {
            if (path.extname(file) === '.' + fileExtension) {
                list.push(file);
            }
        });

        cb(null, list);
    })
}

module.exports = filterFiles;

var http = require('http');

var url = process.argv[2];

http.get(url, (res) => {
    var list = [];

    res.setEncoding('utf-8');

    res.on('data', (chunk) => {
        list.push(chunk);
    });

    res.on('end', () => {
        var len = 0;

        list.forEach(item => {
            len += item.length;
        });

        console.log(len);

        console.log(list.join(''));
    });
})

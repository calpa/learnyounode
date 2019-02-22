var http = require('http');

var [, , ...urls] = process.argv;

var chunkList = [[], [], []];
var ready = 0;

urls.forEach((url, index) => {
    http.get(url, (res) => {
        res.setEncoding('utf-8');

        res.on('data', (chunk) => {
            chunkList[index].push(chunk);
        });

        res.on('end', () => {
            ready++;

            if (ready === urls.length) {
                chunkList.forEach((chunk) => {
                    console.log(chunk.join(''));
                });
            }
        })
    })
})

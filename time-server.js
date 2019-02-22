var net = require('net');

function zerofill (number) {
    return number < 10 ? `0${number}` : number;
}

var server = net.createServer((socket) => {
    var date = new Date();

    var result = `${date.getFullYear()}-${zerofill(date.getMonth() + 1)}-${zerofill(date.getDate())} ${zerofill(date.getHours())}:${zerofill(date.getMinutes())}\n`

    socket.end(result);
});

server.listen(process.argv[2]);

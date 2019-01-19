let net = require('net');
let readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

let server = net.createServer((socket) => {
    socket.on("data", (data) => {
        console.log(data.toString())
    })
    rl.on("line", (line) => {
        socket.write(line+"\r\n")
    })
});
server.listen(4444, "0.0.0.0");
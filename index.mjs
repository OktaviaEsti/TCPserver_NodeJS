// import net from 'net';  //bikin errorrrrrr
var net = require('net')

const server = net.createServer( socket => {
    // this function get called when tcp handshake is successful
    console.log("TCP handshake is successful with" + socket.remoteAddress + ':' + socket.remotePort);
    socket.write("Hello Client!");
    socket.on("data", data => {
        console.log("Received data " + data.toString())
    })
})


server.listen(8800, "127.0.0.1");

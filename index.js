const express = require('express');
var path = require('path');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIo.listen(server);

io.on('connection', function(socket){
    console.log('Novo socket conectado.');
});

app.use(express.static(path.join(__dirname, 'assets')));

// app.get('/', function(req, res, next){
//     res.sendFile(__dirname + '/dist/angular6-arduino-node/index.html')
// });

const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

const mySerial = new SerialPort('COM4', {
    baudRate: 9600
});

mySerial.on('open', function(){
    console.log('Porta Serial aberta.');
});

mySerial.on('data', function(data){
    console.log(data.toString());

    io.emit('arduino:data', {
        value: data.toString()
    });
});

mySerial.on('err', function(err){
    console.log(err.message);
});

server.listen(3000, function(){
    console.log('Servidor rodando na porta:', 3000);
});

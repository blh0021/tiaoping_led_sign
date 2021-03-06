const b = require('./builder.js')
const config = require('./config.json')

const devPort = config.port
const txt = process.argv[2] || 'This is fun'


const SerialPort = require('serialport');
const port = new SerialPort(devPort, {
  autoOpen: false,
  baudRate: 9600
});

port.open(function (err) {
  if (err) {
    console.log('Error opening port: ', err.message)
    return
  }
  port.drain()
  let data = `${b.start}${b.setTransition('pac man')}${b.setFont("5x6", txt)}${b.end}`
  console.log(data);
  port.write(data)
});

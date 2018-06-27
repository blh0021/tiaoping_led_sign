const b = require('./builder.js')

const devPort = '/dev/tty.usbserial-FTE1DWSK'
const txt = 'This is fun'


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
  let data = `${b.start}${b.setTransition('cyclic')}${txt}${b.end}`
  console.log(data);
  port.write(data)
});
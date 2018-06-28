const devPort = 'COM3'

const SerialPort = require('serialport');
const port = new SerialPort(devPort, {
  autoOpen: false,
  baudRate: 9600

});

port.open(function (err) {
  if (err) {
    console.log('Error opening port: ', err.message);
    return
  }
  port.drain();
  let data = `~128~f01AWhat a Bunch of crap\r\r\r`;
  port.write(data)
});
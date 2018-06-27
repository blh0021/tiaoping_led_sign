const devPort = '/dev/tty.usbserial-FTE1DWSK'

const SerialPort = require('serialport');
const port = new SerialPort(devPort, {
  autoOpen: false,
  baudRate: 9600

});
//console.log(port)

port.open(function (err) {
  if (err) {
    console.log('Error opening port: ', err.message);
    return
  }
  port.drain();
  // Because there's no callback to write, write errors will be emitted on the port:
  //let data = "~128~f01A\bHello\r\r\r"
  //let data = "~128~f01A\\bHello" + String.fromCharCode(13,13,13); 
  //let data = "~128~f01AHehhhhllo"
  //console.log(Buffer.from(data));
let data = `~128~f01AHhllo\r\r\r`;
console.log(Buffer.from(data));
  console.log(data)
  //let buf = [0x7E, 0x31, 0x32, 0x38, 0x7E, 0x66, 0x30, 0x31, 0x41, 0x48, 0x65, 0x68, 0x68, 0x6C, 0x6C, 0x6F, 0x0D, 0x0D, 0x0D];
    //console.log(buf)
    port.write(data)
    /*
    port.write("\r", 'utf8');
    port.write("\r", 'utf8');
    port.write("\r", 'utf8');
    */
    //port.drain();
    //port.write(Buffer.from(data));
    /*port.write(Buffer.from('0D', 'hex').toString('utf8'), 'utf8');
    port.write(Buffer.from('0D', 'hex').toString('utf8'), 'utf8');
    port.write(Buffer.from('0D', 'hex').toString('utf8'), 'utf8');
    port.write(Buffer.from('0D', 'hex').toString('utf8'), 'utf8');*/
    //port.write(0x0d);
    //port.write(0x0d);
    
  //}, 500);
  
  //let b = port.write(data);
  //console.log(b);
  //	}
  //  new Buffer(data[i], 'ascii')

});



/*
port.on('data', function (data) {
  console.log('Data:', data);
});

port.on('error', function (data) {
  console.log('error:', data);
});
*/
//port.write(Buffer.from('~128~f01A\b\sample Text\r\r\r'))

/*
port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});
*/
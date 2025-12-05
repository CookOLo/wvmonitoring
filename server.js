const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const hostname = '127.0.0.1';
const express = require('express')
const path = require('path');
const app = express()
const port = '443';


let displayPLS = ``;

app.get('/moisture', (req, res) => {
  const moistureValue = req.query.value;
  displayPLS = `${moistureValue}`
  console.log(`Moisture: ${moistureValue}`);
  res.send(`Moisture value received: ${moistureValue}%`);
})

app.get('/latest', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  setInterval(() => {
    res.write(`data: ${displayPLS}\n\n`);
  }, 2000);
  
})

app.use(express.static(__dirname));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
const serialport = new SerialPort({ path: 'COM7', baudRate: 9600 });

const parser = serialport.pipe(new ReadlineParser({ delimiter: '\r\n' }));
serialport.pipe(parser);

parser.on("data", (line) => console.log(line));

//serialport.write("ROBOT POWER ON");
*/

  /*
 const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }); */
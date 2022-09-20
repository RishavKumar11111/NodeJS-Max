// console.log('Hello from Node.js');

const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello from Node.js');

const fileBufferData = fs.readFileSync('hello.txt');
const fileData = Buffer.from(fileBufferData).toString('utf8');
console.log(fileData);
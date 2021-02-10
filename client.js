const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 50);
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 100);
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 150);
  
  


  conn.on('connect', () =>{
    console.log("Successfully connected to game server");
  })
  conn.on('data', (data) => {    
    console.log(data);
  })
  return conn;

}
module.exports = {connect};
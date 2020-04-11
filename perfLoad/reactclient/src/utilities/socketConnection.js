import io from 'socket.io.io-client';
let socket = io.connect('http://localhost:8181');
socket.emit('clientAuth','uihjt3refvdsadf')
// console.log(socket.io)
export default socket;
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.setMaxListeners(11);
function xizao(){
	console.log('xizao');
}
eventEmitter.on('some_event',function(){
	console.log('some_event');
})

eventEmitter.on('xizao',xizao)


eventEmitter.emit('some_event');
eventEmitter.emit('xizao');
console.log(eventEmitter.listeners('some_event').length);
eventEmitter.removeListener('xizao',xizao)

console.log(eventEmitter.emit('xizao'));


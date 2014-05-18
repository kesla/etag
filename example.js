var etag = require('./etag')

console.log('etag of a string', etag('beep boop'))
console.log('etag of a Buffer', etag(new Buffer([1,2,3])))
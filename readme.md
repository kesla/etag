# etag

Small thingy to create an etag from a String or Buffer

[![NPM](https://nodei.co/npm/etag.png?downloads&stars)](https://nodei.co/npm/etag/)

[![NPM](https://nodei.co/npm-dl/etag.png)](https://nodei.co/npm/etag/)

## Installation

```
npm install etag
```

## Example

### Input

```javascript
var etag = require('./etag')

console.log('etag of a string', etag('beep boop'))
console.log('etag of a Buffer', etag(new Buffer([1,2,3])))
```

### Output

```
etag of a string "677e121b2436201ed8cc1ec73240a3ad"
etag of a Buffer "5289df737df57326fcdd22597afb1fac"
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


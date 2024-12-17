const assert = require('assert');
const http = require('http');

describe('GET /', () => {
    it('should return Hello World', (done) => {
        http.get('http://127.0.0.1:3000/', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.strictEqual(data, 'Hello World\n');
                done();
            });
        });
    });
});

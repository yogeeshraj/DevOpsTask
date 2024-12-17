const assert = require('assert');
const http = require('http');
const { exec } = require('child_process');

let server;

before((done) => {
    // Start the server before running tests
    server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }).listen(3000, '127.0.0.1', () => {
        console.log('Server running at http://127.0.0.1:3000/');
        done();
    });
});

after((done) => {
    // Close the server after tests
    server.close(done);
});

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

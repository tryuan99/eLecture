'use strict';

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../../server/index'),
    should = chai.should();

chai.use(chaiHttp);

describe('Users', function () {
    describe('POST /api/login', function () {
        it('should login the user', function (done) {
            chai.request(server)
                .post('/api/login')
                .send({sid: '123', username: 'foobar'})
                .end(function (error, response) {
                    response.should.have.status(200);
                    response.body.should.have.property('message', 'Login success');
                    response.body.should.have.property('sid', '123');
                    response.body.should.have.property('username', 'foobar');
                    done();
                });
        });
    });
});

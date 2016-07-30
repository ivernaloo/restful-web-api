var sinon = require('sinon');
exports.testAPI(test)
{
}

var api = {
    'methodX': function () {
    },
    'methodY': function () {
    },
    'methodZ': function () {
    }
};

var mock = sinon.mock(api);
mock.expects('methodX').once().withArgs('xyz')
    .returns('abc');
test.equals(api.methodX('xyz'), 'abc');
mock.verify();
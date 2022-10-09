const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const simpleDependencies = [
    ['_', 'lodash']
];

if (simpleDependencies.length) {
    simpleDependencies.forEach((val) => {
        container.register(val[0], function () {
            return require(val[1]);
        });
    });
}

container.load(path.join(__dirname, '../Controllers'));
container.load(path.join(__dirname, '../Models'));
container.load(path.join(__dirname, '../Helpers'));

container.register('container', function () {
    return container;
});

module.exports = container;

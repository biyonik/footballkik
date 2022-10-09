'use strict';

module.exports = function (_) {
    return {
        SetRouting: function (router) {
            router.get('/', this.indexPage);
        },
        indexPage: function (requestObject, responseObject) {
            responseObject.render('index', {test: 'This is a test'})
        }
    }
}

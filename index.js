// const noop = require('lodash.noop')
//
// const Router = require('express/lib/router')
//
// const promiseResolveArgs = (methodProvider) => function (...args) {
//   const context = this
//
//   for (const indexArg in args) {
//     const arg = args[indexArg]
//     if (typeof arg === 'function') {
//       const fn = arg
//       args[indexArg] = (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)
//     }
//   }
//
//   this[methodProvider](...args)
// }
//
// Router.getAsync = promiseResolveArgs('get')
// Router.postAsync = promiseResolveArgs('post')
// Router.headAsync = promiseResolveArgs('head')
// Router.deleteAsync = promiseResolveArgs('delete')
// Router.putAsync = promiseResolveArgs('put')
// Router.useAsync = promiseResolveArgs('use')
//
// module.exports = noop

var noop = require('lodash.noop');

var Router = require('express/lib/router');

var promiseResolveArgs = function promiseResolveArgs(methodProvider) {
  return function () {
    var context = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var indexArg in args) {
      var arg = args[indexArg];

      if (typeof arg === 'function') {
        (function () {
          var fn = arg;

          args[indexArg] = function (req, res, next) {
            return Promise.resolve(fn(req, res, next)).catch(next);
          };
        })();
      }
    }

    this[methodProvider].apply(this, args);
  };
};

Router.getAsync = promiseResolveArgs('get');
Router.postAsync = promiseResolveArgs('post');
Router.headAsync = promiseResolveArgs('head');
Router.deleteAsync = promiseResolveArgs('delete');
Router.putAsync = promiseResolveArgs('put');
Router.useAsync = promiseResolveArgs('use');

module.exports = noop;

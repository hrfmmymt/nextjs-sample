webpackHotUpdate(5,{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _cowsayBrowser = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"cowsay-browser\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _cowsayBrowser2 = _interopRequireDefault(_cowsayBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hrfmmymt/Documents/git/nextjs-sample/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('pre', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _cowsayBrowser2.default.say({ text: 'hi there!' }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/hrfmmymt/Documents/git/nextjs-sample/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hrfmmymt/Documents/git/nextjs-sample/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7a0JBQWU7eUJBQ2I7O2dCQUFBO2tCQUFPO0FBQVA7QUFBQSw2QkFBYyxJQUFJLEVBQUUsTUFBTTtBQUQ1QixFIiwiZmlsZSI6IjUuZjYwMzA4OTRjYjY5NTU4NmIxMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3dzYXkgZnJvbSAnY293c2F5LWJyb3dzZXInXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxwcmU+eyBjb3dzYXkuc2F5KHsgdGV4dDogJ2hpIHRoZXJlIScgfSkgfTwvcHJlPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
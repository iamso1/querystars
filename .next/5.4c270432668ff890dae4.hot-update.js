webpackHotUpdate(5,{

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hsinhan/Documents/project/onlineProject/ocr-tools/components/todo/list.js';


var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List(props) {
    (0, _classCallCheck3.default)(this, List);

    var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));

    _this.componentWillReceiveProps = function () {
      console.log('receive ' + _this.props.url);
      fetch(_this.props.url).then(function (res) {
        return res.json();
      }).then(function (res) {
        return _this.setState({ stars: res.stargazers_count });
      });
    };

    _this.componentDidMount = function () {
      console.log('didmount ' + _this.props.url);
      fetch(_this.props.url).then(function (res) {
        return res.json();
      }).then(function (res) {
        return _this.setState({ stars: res.stargazers_count });
      });
    };

    _this.genRepos = function (repoObj) {
      return _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, repoObj.repoName, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this.props.queryStars(repoObj);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Query'));
    };

    _this.state = {
      repos: [{
        repoName: 'zeit/next.js',
        url: 'http://www.json-generator.com/api/json/get/bUhOtXwCMi?indent=2'
      }, {
        repoName: 'mosluce/realtime-chat-practice',
        url: 'http://www.json-generator.com/api/json/get/cfUwqOrsde?indent=2'
      }],
      currentRepoName: '',
      stars: 0
    };
    return _this;
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var repos = this.state.repos.map(this.genRepos);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, repos), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, this.props.currentRepoName, ' has ', this.props.stars, ' \u2B50\uFE0F'));
    }
  }]);

  return List;
}(_react.Component);
// List.defaultProps = {
//   url: 'https://api.github.com/repos/zeit/next.js',
// };


exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9kby9saXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGlzdCIsInByb3BzIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJzdGFycyIsInN0YXJnYXplcnNfY291bnQiLCJjb21wb25lbnREaWRNb3VudCIsImdlblJlcG9zIiwicmVwb09iaiIsInJlcG9OYW1lIiwicXVlcnlTdGFycyIsInN0YXRlIiwicmVwb3MiLCJjdXJyZW50UmVwb05hbWUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SSxBQUVLO2dDQUNuQjs7Z0JBQUEsQUFBWSxPQUFPO3dDQUFBOztrSUFBQSxBQUNYOztVQURXLEFBa0JuQiw0QkFBNEIsWUFBTSxBQUNoQztjQUFBLEFBQVEsaUJBQWUsTUFBQSxBQUFLLE1BQTVCLEFBQWtDLEFBQ2xDO1lBQU0sTUFBQSxBQUFLLE1BQVgsQUFBaUIsS0FBakIsQUFDRyxLQUFLLGVBQUE7ZUFBTyxJQUFQLEFBQU8sQUFBSTtBQURuQixTQUFBLEFBRUcsS0FBSyxlQUFBO2VBQU8sTUFBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLElBQTlCLEFBQU8sQUFBYyxBQUFhO0FBRjFDLEFBR0Q7QUF2QmtCOztVQUFBLEFBeUJuQixvQkFBb0IsWUFBTSxBQUN4QjtjQUFBLEFBQVEsa0JBQWdCLE1BQUEsQUFBSyxNQUE3QixBQUFtQyxBQUNuQztZQUFNLE1BQUEsQUFBSyxNQUFYLEFBQWlCLEtBQWpCLEFBQ0csS0FBSyxlQUFBO2VBQU8sSUFBUCxBQUFPLEFBQUk7QUFEbkIsU0FBQSxBQUVHLEtBQUssZUFBQTtlQUFPLE1BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxJQUE5QixBQUFPLEFBQWMsQUFBYTtBQUYxQyxBQUdEO0FBOUJrQjs7VUFBQSxBQWdDbkIsV0FBVyxtQkFBVyxBQUNwQjs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxPQUFBLFVBQUEsQUFDVyxBQUNULDBCQUFBLGNBQUE7aUJBQ1csbUJBQU0sQUFDYjtnQkFBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLEFBQ3ZCO0FBSEg7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxTQUpOLEFBQ0UsQUFFRSxBQVNMO0FBN0NrQixBQUVqQjs7VUFBQSxBQUFLOztrQkFFRCxBQUNZLEFBQ1Y7YUFIRyxBQUNMLEFBRU87QUFGUCxBQUNFLE9BRkc7a0JBS0wsQUFDWSxBQUNWO2FBUk8sQUFDSixBQUtMLEFBRU8sQUFHVDtBQUxFLEFBQ0U7dUJBUE8sQUFXTSxBQUNqQjthQWRlLEFBRWpCLEFBQWEsQUFZSjtBQVpJLEFBQ1g7V0FhSDs7Ozs7NkJBK0JRLEFBQ1A7VUFBTSxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixJQUFJLEtBQW5DLEFBQWMsQUFBMEIsQUFDeEM7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxTQURGLEFBQ0UsQUFDQSx3QkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUFEUixBQUNjLGlCQUFzQixjQUFBLEFBQUssTUFEekMsQUFDK0MsT0FKbkQsQUFDRSxBQUVFLEFBS0w7Ozs7O0FBMUQrQixBO0FBNERsQztBQUNBO0FBQ0E7OztrQkE5RHFCLEEiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaHNpbmhhbi9Eb2N1bWVudHMvcHJvamVjdC9vbmxpbmVQcm9qZWN0L29jci10b29scyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/hsinhan/Documents/project/onlineProject/ocr-tools/components/todo/list.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hsinhan/Documents/project/onlineProject/ocr-tools/components/todo/list.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40YzI3MDQzMjY2OGZmODkwZGFlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90b2RvL2xpc3QuanM/MmZhODMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlcG9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICByZXBvTmFtZTogJ3plaXQvbmV4dC5qcycsXG4gICAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5qc29uLWdlbmVyYXRvci5jb20vYXBpL2pzb24vZ2V0L2JVaE90WHdDTWk/aW5kZW50PTInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcmVwb05hbWU6ICdtb3NsdWNlL3JlYWx0aW1lLWNoYXQtcHJhY3RpY2UnLFxuICAgICAgICAgIHVybDogJ2h0dHA6Ly93d3cuanNvbi1nZW5lcmF0b3IuY29tL2FwaS9qc29uL2dldC9jZlV3cU9yc2RlP2luZGVudD0yJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjdXJyZW50UmVwb05hbWU6ICcnLFxuICAgICAgc3RhcnM6IDAsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYHJlY2VpdmUgJHt0aGlzLnByb3BzLnVybH1gKTtcbiAgICBmZXRjaCh0aGlzLnByb3BzLnVybClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4ocmVzID0+IHRoaXMuc2V0U3RhdGUoeyBzdGFyczogcmVzLnN0YXJnYXplcnNfY291bnQgfSkpO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBkaWRtb3VudCAke3RoaXMucHJvcHMudXJsfWApO1xuICAgIGZldGNoKHRoaXMucHJvcHMudXJsKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihyZXMgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0YXJzOiByZXMuc3RhcmdhemVyc19jb3VudCB9KSk7XG4gIH07XG5cbiAgZ2VuUmVwb3MgPSByZXBvT2JqID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPlxuICAgICAgICB7cmVwb09iai5yZXBvTmFtZX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVlcnlTdGFycyhyZXBvT2JqKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgUXVlcnlcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJlcG9zID0gdGhpcy5zdGF0ZS5yZXBvcy5tYXAodGhpcy5nZW5SZXBvcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+e3JlcG9zfTwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jdXJyZW50UmVwb05hbWV9IGhhcyB7dGhpcy5wcm9wcy5zdGFyc30g4q2Q77iPXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbi8vIExpc3QuZGVmYXVsdFByb3BzID0ge1xuLy8gICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3plaXQvbmV4dC5qcycsXG4vLyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90b2RvL2xpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUF2QkE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQTlCQTtBQUNBO0FBK0JBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBRkE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFuQ0E7QUFDQTtBQURBOztBQUlBO0FBQUE7QUFEQTtBQUtBO0FBR0E7QUFKQTtBQUtBO0FBQUE7QUFYQTtBQWFBOzs7OztBQWdDQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
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

var _addrepoinfo = __webpack_require__(421);

var _addrepoinfo2 = _interopRequireDefault(_addrepoinfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hsinhan/Documents/project/onlineProject/ocr-tools/components/querystar/repolist.js';


var Repolist = function (_Component) {
  (0, _inherits3.default)(Repolist, _Component);

  function Repolist(props) {
    (0, _classCallCheck3.default)(this, Repolist);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Repolist.__proto__ || (0, _getPrototypeOf2.default)(Repolist)).call(this, props));

    _this.queryStars = function (repoObj) {
      fetch(repoObj.url).then(function (res) {
        return res.json();
      }).then(function (res) {
        return _this.setState({
          currentRepoName: repoObj.repoName,
          stars: res.stargazers_count
        });
      });
    };

    _this.genRepos = function (repoObj, index) {
      return _react2.default.createElement('li', { key: index, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, repoObj.repoName, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this.queryStars(repoObj);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Query'));
    };

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Repolist, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      console.log(this.props.url);
      console.log(nextProps.url);
      if (this.state.currentRepoName != nextProps.currentRepoName) {
        console.log('redraw');
        fetch(nextProps.url).then(function (res) {
          return res.json();
        }).then(function (res) {
          return _this2.setState({
            currentRepoName: _this2.props.currentRepoName,
            stars: res.stargazers_count
          });
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      console.log('didmount ' + this.props.url);
      fetch(this.props.url).then(function (res) {
        return res.json();
      }).then(function (res) {
        return _this3.setState({
          currentRepoName: _this3.props.currentRepoName,
          stars: res.stargazers_count
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var repos = this.props.repos.map(this.genRepos);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'you are now watching ', this.state.currentRepoName, ' has', ' ', this.state.stars, ' \u2B50\uFE0F'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, repos), _react2.default.createElement(_addrepoinfo2.default, { addRepo: this.props.addRepo, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }));
    }
  }]);

  return Repolist;
}(_react.Component);
// Repolist.defaultProps = {
//   url: 'https://api.github.com/repos/zeit/next.js',
// };


exports.default = Repolist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcXVlcnlzdGFyL3JlcG9saXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQWRkcmVwb2luZm8iLCJSZXBvbGlzdCIsInByb3BzIiwicXVlcnlTdGFycyIsImZldGNoIiwicmVwb09iaiIsInVybCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJjdXJyZW50UmVwb05hbWUiLCJyZXBvTmFtZSIsInN0YXJzIiwic3RhcmdhemVyc19jb3VudCIsImdlblJlcG9zIiwiaW5kZXgiLCJzdGF0ZSIsIm5leHRQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJyZXBvcyIsIm1hcCIsImFkZFJlcG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBaUI7Ozs7Ozs7OztJQUVILEE7b0NBQ25COztvQkFBQSxBQUFZLE9BQU87d0NBQUE7OzBJQUFBLEFBQ1g7O1VBRFcsQUFpQ25CLGFBQWEsbUJBQVcsQUFDdEI7WUFBTSxRQUFOLEFBQWMsS0FBZCxBQUNHLEtBQUssZUFBQTtlQUFPLElBQVAsQUFBTyxBQUFJO0FBRG5CLFNBQUEsQUFFRyxLQUFLLGVBQUE7cUJBQ0osQUFBSzsyQkFDYyxRQURMLEFBQ2EsQUFDekI7aUJBQU8sSUFITCxBQUNKLEFBQWMsQUFFRDtBQUZDLEFBQ1osU0FERjtBQUhKLEFBUUQ7QUExQ2tCOztVQUFBLEFBNENuQixXQUFXLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUM3Qjs2QkFDRSxjQUFBLFFBQUksS0FBSixBQUFTO29CQUFUO3NCQUFBLEFBQ0c7QUFESDtPQUFBLFVBQUEsQUFDVyxBQUNULDBCQUFBLGNBQUE7aUJBQ1csbUJBQU0sQUFDYjtnQkFBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDakI7QUFISDs7b0JBQUE7c0JBQUE7QUFBQTtBQUNFLFNBSk4sQUFDRSxBQUVFLEFBU0w7QUF6RGtCLEFBRWpCOztVQUFBLEFBQUssUUFGWSxBQUVqQixBQUFhO1dBQ2Q7Ozs7OzhDLEFBRXlCLFdBQVc7bUJBQ25DOztjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7Y0FBQSxBQUFRLElBQUksVUFBWixBQUFzQixBQUN0QjtVQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsbUJBQW1CLFVBQWxDLEFBQTRDLGlCQUFpQixBQUMzRDtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO2NBQU0sVUFBTixBQUFnQixLQUFoQixBQUNHLEtBQUssZUFBQTtpQkFBTyxJQUFQLEFBQU8sQUFBSTtBQURuQixXQUFBLEFBRUcsS0FBSyxlQUFBO3dCQUNKLEFBQUs7NkJBQ2MsT0FBQSxBQUFLLE1BRFYsQUFDZ0IsQUFDNUI7bUJBQU8sSUFITCxBQUNKLEFBQWMsQUFFRDtBQUZDLEFBQ1osV0FERjtBQUhKLEFBUUQ7QUFDRjs7Ozt3Q0FFbUI7bUJBQ2xCOztjQUFBLEFBQVEsa0JBQWdCLEtBQUEsQUFBSyxNQUE3QixBQUFtQyxBQUNuQztZQUFNLEtBQUEsQUFBSyxNQUFYLEFBQWlCLEtBQWpCLEFBQ0csS0FBSyxlQUFBO2VBQU8sSUFBUCxBQUFPLEFBQUk7QUFEbkIsU0FBQSxBQUVHLEtBQUssZUFBQTtzQkFDSixBQUFLOzJCQUNjLE9BQUEsQUFBSyxNQURWLEFBQ2dCLEFBQzVCO2lCQUFPLElBSEwsQUFDSixBQUFjLEFBRUQ7QUFGQyxBQUNaLFNBREY7QUFISixBQVFEOzs7OzZCQTRCUSxBQUNQO1VBQU0sUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsSUFBSSxLQUFuQyxBQUFjLEFBQTBCLEFBQ3hDOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQ3dCLDhCQUFBLEFBQUssTUFEN0IsQUFDbUMsaUJBQXFCLFFBRHhELEFBRUcsVUFBQSxBQUFLLE1BRlIsQUFFYyxPQUhoQixBQUNFLEFBSUEsa0NBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsU0FMRixBQUtFLEFBQ0Esd0JBQUEsQUFBQyx1Q0FBWSxTQUFTLEtBQUEsQUFBSyxNQUEzQixBQUFpQztvQkFBakM7c0JBUEosQUFDRSxBQU1FLEFBR0w7QUFISzs7Ozs7O0FBckU4QixBO0FBMEV0QztBQUNBO0FBQ0E7OztrQkE1RXFCLEEiLCJmaWxlIjoicmVwb2xpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hzaW5oYW4vRG9jdW1lbnRzL3Byb2plY3Qvb25saW5lUHJvamVjdC9vY3ItdG9vbHMifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/hsinhan/Documents/project/onlineProject/ocr-tools/components/querystar/repolist.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hsinhan/Documents/project/onlineProject/ocr-tools/components/querystar/repolist.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40YjA3ODVjZjhkNjIzNjFjMWYyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9xdWVyeXN0YXIvcmVwb2xpc3QuanM/MjU0NjY1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkZHJlcG9pbmZvIGZyb20gJy4vYWRkcmVwb2luZm8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvbGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy51cmwpO1xuICAgIGNvbnNvbGUubG9nKG5leHRQcm9wcy51cmwpO1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRSZXBvTmFtZSAhPSBuZXh0UHJvcHMuY3VycmVudFJlcG9OYW1lKSB7XG4gICAgICBjb25zb2xlLmxvZygncmVkcmF3Jyk7XG4gICAgICBmZXRjaChuZXh0UHJvcHMudXJsKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50UmVwb05hbWU6IHRoaXMucHJvcHMuY3VycmVudFJlcG9OYW1lLFxuICAgICAgICAgICAgc3RhcnM6IHJlcy5zdGFyZ2F6ZXJzX2NvdW50LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coYGRpZG1vdW50ICR7dGhpcy5wcm9wcy51cmx9YCk7XG4gICAgZmV0Y2godGhpcy5wcm9wcy51cmwpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKHJlcyA9PlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50UmVwb05hbWU6IHRoaXMucHJvcHMuY3VycmVudFJlcG9OYW1lLFxuICAgICAgICAgIHN0YXJzOiByZXMuc3RhcmdhemVyc19jb3VudCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBxdWVyeVN0YXJzID0gcmVwb09iaiA9PiB7XG4gICAgZmV0Y2gocmVwb09iai51cmwpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKHJlcyA9PlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50UmVwb05hbWU6IHJlcG9PYmoucmVwb05hbWUsXG4gICAgICAgICAgc3RhcnM6IHJlcy5zdGFyZ2F6ZXJzX2NvdW50LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfTtcblxuICBnZW5SZXBvcyA9IChyZXBvT2JqLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgIHtyZXBvT2JqLnJlcG9OYW1lfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5xdWVyeVN0YXJzKHJlcG9PYmopO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBRdWVyeVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmVwb3MgPSB0aGlzLnByb3BzLnJlcG9zLm1hcCh0aGlzLmdlblJlcG9zKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgeW91IGFyZSBub3cgd2F0Y2hpbmcge3RoaXMuc3RhdGUuY3VycmVudFJlcG9OYW1lfSBoYXN7JyAnfVxuICAgICAgICAgIHt0aGlzLnN0YXRlLnN0YXJzfSDirZDvuI9cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2PntyZXBvc308L2Rpdj5cbiAgICAgICAgPEFkZHJlcG9pbmZvIGFkZFJlcG89e3RoaXMucHJvcHMuYWRkUmVwb30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbi8vIFJlcG9saXN0LmRlZmF1bHRQcm9wcyA9IHtcbi8vICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy96ZWl0L25leHQuanMnLFxuLy8gfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcXVlcnlzdGFyL3JlcG9saXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBK0JBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQTFDQTtBQUNBO0FBMkNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFGQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQS9DQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFJQTs7OztBQTZCQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSEE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
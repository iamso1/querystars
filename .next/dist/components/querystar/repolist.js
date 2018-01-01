'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addrepoinfo = require('./addrepoinfo');

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
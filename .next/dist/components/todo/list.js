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
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

var _jsxFileName = 'D:\\workspace\\PlayProject\\querystars\\components\\querystar\\addrepoinfo.js';


var Addrepoinfo = function (_Component) {
  (0, _inherits3.default)(Addrepoinfo, _Component);

  function Addrepoinfo(props) {
    (0, _classCallCheck3.default)(this, Addrepoinfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Addrepoinfo.__proto__ || (0, _getPrototypeOf2.default)(Addrepoinfo)).call(this, props));

    _this.onRepoNameChange = function (e) {
      // const repoInfo = this.state.repoInfo;
      // repoInfo.repoName = e.target.value;
      _this.setState({ repoName: e.target.value });
    };

    _this.onRepoRepoUrlChange = function (e) {
      // const repoInfo = this.state.repoInfo;
      // repoInfo.repoUrl = e.target.value;
      _this.setState({ repoUrl: e.target.value });
    };

    _this.state = {
      repoName: 'enter repoName here',
      repoUrl: 'enter repo url here'
    };
    return _this;
  }

  (0, _createClass3.default)(Addrepoinfo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'repoName: '), _react2.default.createElement('input', {
        type: 'text',
        value: this.state.repoName,
        onChange: this.onRepoNameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'repoUrl:'), _react2.default.createElement('input', {
        type: 'text',
        value: this.state.repoUrl,
        onChange: this.onRepoRepoUrlChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement('button', {
        onClick: function onClick() {
          _this2.props.addRepo({
            repoName: _this2.state.repoName,
            repoUrl: _this2.state.repoUrl
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Add Repo')));
    }
  }]);

  return Addrepoinfo;
}(_react.Component);

exports.default = Addrepoinfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHF1ZXJ5c3RhclxcYWRkcmVwb2luZm8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJBZGRyZXBvaW5mbyIsInByb3BzIiwib25SZXBvTmFtZUNoYW5nZSIsInNldFN0YXRlIiwicmVwb05hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblJlcG9SZXBvVXJsQ2hhbmdlIiwicmVwb1VybCIsInN0YXRlIiwiYWRkUmVwbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBRUs7dUNBQ25COzt1QkFBQSxBQUFZLE9BQU87d0NBQUE7O2dKQUFBLEFBQ1g7O1VBRFcsQUFTbkIsbUJBQW1CLGFBQUssQUFDdEI7QUFDQTtBQUNBO1lBQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxFQUFBLEFBQUUsT0FBNUIsQUFBYyxBQUFxQixBQUNwQztBQWJrQjs7VUFBQSxBQWVuQixzQkFBc0IsYUFBSyxBQUN6QjtBQUNBO0FBQ0E7WUFBQSxBQUFLLFNBQVMsRUFBRSxTQUFTLEVBQUEsQUFBRSxPQUEzQixBQUFjLEFBQW9CLEFBQ25DO0FBbkJrQixBQUdqQjs7VUFBQSxBQUFLO2dCQUFRLEFBQ0QsQUFDVjtlQUxlLEFBR2pCLEFBQWEsQUFFRjtBQUZFLEFBQ1g7V0FHSDs7Ozs7NkJBY1E7bUJBQ1A7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2NBQUEsQUFDTyxBQUNMO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7a0JBQVUsS0FIWixBQUdpQjs7b0JBSGpCO3NCQUZGLEFBRUUsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBUEYsQUFPRSxBQUNBO2NBQUEsQUFDTyxBQUNMO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7a0JBQVUsS0FIWixBQUdpQjs7b0JBSGpCO3NCQVJGLEFBUUUsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsY0FBQTtpQkFDVyxtQkFBTSxBQUNiO2lCQUFBLEFBQUssTUFBTCxBQUFXO3NCQUNDLE9BQUEsQUFBSyxNQURFLEFBQ0ksQUFDckI7cUJBQVMsT0FBQSxBQUFLLE1BRmhCLEFBQW1CLEFBRUcsQUFFdkI7QUFKb0IsQUFDakI7QUFITjs7b0JBQUE7c0JBQUE7QUFBQTtBQUNFLFNBaEJSLEFBQ0UsQUFDRSxBQWFFLEFBYVA7Ozs7O0FBbkRzQyxBOztrQkFBcEIsQSIsImZpbGUiOiJhZGRyZXBvaW5mby5qcyIsInNvdXJjZVJvb3QiOiJEOi93b3Jrc3BhY2UvUGxheVByb2plY3QvcXVlcnlzdGFycyJ9
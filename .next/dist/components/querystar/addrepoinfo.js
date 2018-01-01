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

var _jsxFileName = '/Users/hsinhan/Documents/project/onlineProject/ocr-tools/components/querystar/addrepoinfo.js';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcXVlcnlzdGFyL2FkZHJlcG9pbmZvLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQWRkcmVwb2luZm8iLCJwcm9wcyIsIm9uUmVwb05hbWVDaGFuZ2UiLCJzZXRTdGF0ZSIsInJlcG9OYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25SZXBvUmVwb1VybENoYW5nZSIsInJlcG9VcmwiLCJzdGF0ZSIsImFkZFJlcG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SSxBQUVLO3VDQUNuQjs7dUJBQUEsQUFBWSxPQUFPO3dDQUFBOztnSkFBQSxBQUNYOztVQURXLEFBU25CLG1CQUFtQixhQUFLLEFBQ3RCO0FBQ0E7QUFDQTtZQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsRUFBQSxBQUFFLE9BQTVCLEFBQWMsQUFBcUIsQUFDcEM7QUFia0I7O1VBQUEsQUFlbkIsc0JBQXNCLGFBQUssQUFDekI7QUFDQTtBQUNBO1lBQUEsQUFBSyxTQUFTLEVBQUUsU0FBUyxFQUFBLEFBQUUsT0FBM0IsQUFBYyxBQUFvQixBQUNuQztBQW5Ca0IsQUFHakI7O1VBQUEsQUFBSztnQkFBUSxBQUNELEFBQ1Y7ZUFMZSxBQUdqQixBQUFhLEFBRUY7QUFGRSxBQUNYO1dBR0g7Ozs7OzZCQWNRO21CQUNQOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtjQUFBLEFBQ08sQUFDTDtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2tCQUFVLEtBSFosQUFHaUI7O29CQUhqQjtzQkFGRixBQUVFLEFBS0E7QUFMQTtBQUNFLDBCQUlGLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVBGLEFBT0UsQUFDQTtjQUFBLEFBQ08sQUFDTDtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2tCQUFVLEtBSFosQUFHaUI7O29CQUhqQjtzQkFSRixBQVFFLEFBS0E7QUFMQTtBQUNFLDBCQUlGLGNBQUE7aUJBQ1csbUJBQU0sQUFDYjtpQkFBQSxBQUFLLE1BQUwsQUFBVztzQkFDQyxPQUFBLEFBQUssTUFERSxBQUNJLEFBQ3JCO3FCQUFTLE9BQUEsQUFBSyxNQUZoQixBQUFtQixBQUVHLEFBRXZCO0FBSm9CLEFBQ2pCO0FBSE47O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxTQWhCUixBQUNFLEFBQ0UsQUFhRSxBQWFQOzs7OztBQW5Ec0MsQTs7a0JBQXBCLEEiLCJmaWxlIjoiYWRkcmVwb2luZm8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hzaW5oYW4vRG9jdW1lbnRzL3Byb2plY3Qvb25saW5lUHJvamVjdC9vY3ItdG9vbHMifQ==
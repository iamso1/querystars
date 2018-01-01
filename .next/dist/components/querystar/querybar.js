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

var _jsxFileName = '/Users/hsinhan/Documents/project/onlineProject/ocr-tools/components/querystar/querybar.js';


var Querybar = function (_Component) {
  (0, _inherits3.default)(Querybar, _Component);

  function Querybar(props) {
    (0, _classCallCheck3.default)(this, Querybar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Querybar.__proto__ || (0, _getPrototypeOf2.default)(Querybar)).call(this, props));

    _this.onQueryChange = function (e) {
      _this.setState({ queryStr: e.target.value });
    };

    _this.state = {
      queryStr: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Querybar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'Live Query '), _react2.default.createElement('input', {
        type: 'text',
        value: this.state.queryStr,
        onChange: this.onQueryChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('button', {
        onClick: function onClick() {
          return _this2.props.onChangeQueryStr(_this2.state.queryStr);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Query'));
    }
  }]);

  return Querybar;
}(_react.Component);

exports.default = Querybar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcXVlcnlzdGFyL3F1ZXJ5YmFyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUXVlcnliYXIiLCJwcm9wcyIsIm9uUXVlcnlDaGFuZ2UiLCJzZXRTdGF0ZSIsInF1ZXJ5U3RyIiwiZSIsInRhcmdldCIsInZhbHVlIiwic3RhdGUiLCJvbkNoYW5nZVF1ZXJ5U3RyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRUssQTtvQ0FDbkI7O29CQUFBLEFBQVksT0FBTzt3Q0FBQTs7MElBQUEsQUFDWDs7VUFEVyxBQU9uQixnQkFBZ0IsYUFBSyxBQUNuQjtZQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsRUFBQSxBQUFFLE9BQTVCLEFBQWMsQUFBcUIsQUFDcEM7QUFUa0IsQUFFakI7O1VBQUEsQUFBSztnQkFGWSxBQUVqQixBQUFhLEFBQ0Q7QUFEQyxBQUNYO1dBRUg7Ozs7OzZCQU1RO21CQUNQOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtjQUFBLEFBQ08sQUFDTDtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2tCQUFVLEtBSFosQUFHaUI7O29CQUhqQjtzQkFGRixBQUVFLEFBS0E7QUFMQTtBQUNFLDBCQUlGLGNBQUE7aUJBQ1csbUJBQUE7aUJBQU0sT0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFBaUIsT0FBQSxBQUFLLE1BQXZDLEFBQU0sQUFBdUM7QUFEeEQ7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxTQVROLEFBQ0UsQUFPRSxBQU9MOzs7OztBQTVCbUMsQTs7a0JBQWpCLEEiLCJmaWxlIjoicXVlcnliYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hzaW5oYW4vRG9jdW1lbnRzL3Byb2plY3Qvb25saW5lUHJvamVjdC9vY3ItdG9vbHMifQ==
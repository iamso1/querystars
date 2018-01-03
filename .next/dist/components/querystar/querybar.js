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

var _jsxFileName = 'D:\\workspace\\PlayProject\\querystars\\components\\querystar\\querybar.js';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHF1ZXJ5c3RhclxccXVlcnliYXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJRdWVyeWJhciIsInByb3BzIiwib25RdWVyeUNoYW5nZSIsInNldFN0YXRlIiwicXVlcnlTdHIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZSIsIm9uQ2hhbmdlUXVlcnlTdHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFSyxBO29DQUNuQjs7b0JBQUEsQUFBWSxPQUFPO3dDQUFBOzswSUFBQSxBQUNYOztVQURXLEFBT25CLGdCQUFnQixhQUFLLEFBQ25CO1lBQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxFQUFBLEFBQUUsT0FBNUIsQUFBYyxBQUFxQixBQUNwQztBQVRrQixBQUVqQjs7VUFBQSxBQUFLO2dCQUZZLEFBRWpCLEFBQWEsQUFDRDtBQURDLEFBQ1g7V0FFSDs7Ozs7NkJBTVE7bUJBQ1A7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2NBQUEsQUFDTyxBQUNMO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7a0JBQVUsS0FIWixBQUdpQjs7b0JBSGpCO3NCQUZGLEFBRUUsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsY0FBQTtpQkFDVyxtQkFBQTtpQkFBTSxPQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFpQixPQUFBLEFBQUssTUFBdkMsQUFBTSxBQUF1QztBQUR4RDs7b0JBQUE7c0JBQUE7QUFBQTtBQUNFLFNBVE4sQUFDRSxBQU9FLEFBT0w7Ozs7O0FBNUJtQyxBOztrQkFBakIsQSIsImZpbGUiOiJxdWVyeWJhci5qcyIsInNvdXJjZVJvb3QiOiJEOi93b3Jrc3BhY2UvUGxheVByb2plY3QvcXVlcnlzdGFycyJ9
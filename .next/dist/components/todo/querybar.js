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

var _jsxFileName = '/Users/hsinhan/Documents/project/onlineProject/ocr-tools/components/todo/querybar.js';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9kby9xdWVyeWJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlF1ZXJ5YmFyIiwicHJvcHMiLCJvblF1ZXJ5Q2hhbmdlIiwic2V0U3RhdGUiLCJxdWVyeVN0ciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXRlIiwib25DaGFuZ2VRdWVyeVN0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJQUVLLEE7b0NBQ25COztvQkFBQSxBQUFZLE9BQU87d0NBQUE7OzBJQUFBLEFBQ1g7O1VBRFcsQUFPbkIsZ0JBQWdCLGFBQUssQUFDbkI7WUFBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLEVBQUEsQUFBRSxPQUE1QixBQUFjLEFBQXFCLEFBQ3BDO0FBVGtCLEFBRWpCOztVQUFBLEFBQUs7Z0JBRlksQUFFakIsQUFBYSxBQUNEO0FBREMsQUFDWDtXQUVIOzs7Ozs2QkFNUTttQkFDUDs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7Y0FBQSxBQUNPLEFBQ0w7ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtrQkFBVSxLQUhaLEFBR2lCOztvQkFIakI7c0JBRkYsQUFFRSxBQUtBO0FBTEE7QUFDRSwwQkFJRixjQUFBO2lCQUNXLG1CQUFBO2lCQUFNLE9BQUEsQUFBSyxNQUFMLEFBQVcsaUJBQWlCLE9BQUEsQUFBSyxNQUF2QyxBQUFNLEFBQXVDO0FBRHhEOztvQkFBQTtzQkFBQTtBQUFBO0FBQ0UsU0FUTixBQUNFLEFBT0UsQUFPTDs7Ozs7QUE1Qm1DLEE7O2tCQUFqQixBIiwiZmlsZSI6InF1ZXJ5YmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oc2luaGFuL0RvY3VtZW50cy9wcm9qZWN0L29ubGluZVByb2plY3Qvb2NyLXRvb2xzIn0=
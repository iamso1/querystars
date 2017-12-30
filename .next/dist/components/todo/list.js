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

    _this.genItem = function (value) {
      return _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, value);
    };

    _this.state = {
      data: [1, 2, 3]
    };
    return _this;
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var result = this.state.data.map(this.genItem);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, result);
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9kby9saXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGlzdCIsInByb3BzIiwiZ2VuSXRlbSIsInZhbHVlIiwic3RhdGUiLCJkYXRhIiwicmVzdWx0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0ksQUFFSztnQ0FDbkI7O2dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0lBQUEsQUFDWDs7VUFEVyxBQVFuQixVQUFVLGlCQUFTLEFBQ2pCOzZCQUFPLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLE9BQUEsRUFBUCxBQUFPLEFBQ1I7QUFWa0IsQUFHakI7O1VBQUEsQUFBSztZQUNHLENBQUEsQUFBQyxHQUFELEFBQUksR0FKSyxBQUdqQixBQUFhLEFBQ0wsQUFBTztBQURGLEFBQ1g7V0FFSDs7Ozs7NkJBTVEsQUFDUDtVQUFNLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLElBQUksS0FBbkMsQUFBZSxBQUF5QixBQUN4Qzs2QkFBTyxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxPQUFBLEVBQVAsQUFBTyxBQUNSOzs7OztBQWhCK0IsQTs7a0JBQWIsQSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oc2luaGFuL0RvY3VtZW50cy9wcm9qZWN0L29ubGluZVByb2plY3Qvb2NyLXRvb2xzIn0=
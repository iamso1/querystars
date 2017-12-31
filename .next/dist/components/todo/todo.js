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

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _querybar = require('./querybar');

var _querybar2 = _interopRequireDefault(_querybar);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hsinhan/Documents/project/onlineProject/ocr-tools/components/todo/todo.js';


var Todo = function (_Component) {
  (0, _inherits3.default)(Todo, _Component);

  function Todo(props) {
    (0, _classCallCheck3.default)(this, Todo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Todo.__proto__ || (0, _getPrototypeOf2.default)(Todo)).call(this, props));

    _this.onChangeQueryStr = function (queryStr) {
      _this.setState({
        queryStr: 'https://api.github.com/repos/' + queryStr,
        currentRepoName: queryStr
      });
    };

    _this.queryStars = function (repoObj) {
      _axios2.default.get(repoObj.url).then(function (res) {
        _this.setState({
          currentRepoName: repoObj.repoName,
          stars: res.data.stargazers_count
        });
      });
    };

    _this.state = {
      url: '',
      queryStr: '',
      currentRepoName: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Todo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, ' you are now watching ', this.state.currentRepoName), _react2.default.createElement(_list2.default, {
        url: this.state.queryStr,
        currentRepoName: this.state.currentRepoName,
        stars: this.state.stars,
        queryStars: this.queryStars,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_querybar2.default, { onChangeQueryStr: this.onChangeQueryStr, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }));
    }
  }]);

  return Todo;
}(_react.Component);

exports.default = Todo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9kby90b2RvLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGlzdCIsIlF1ZXJ5YmFyIiwiYXhpb3MiLCJUb2RvIiwicHJvcHMiLCJvbkNoYW5nZVF1ZXJ5U3RyIiwic2V0U3RhdGUiLCJxdWVyeVN0ciIsImN1cnJlbnRSZXBvTmFtZSIsInF1ZXJ5U3RhcnMiLCJnZXQiLCJyZXBvT2JqIiwidXJsIiwidGhlbiIsInJlcG9OYW1lIiwic3RhcnMiLCJyZXMiLCJkYXRhIiwic3RhcmdhemVyc19jb3VudCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7O0FBRXJCLEFBQU87Ozs7Ozs7OztJQUVjLEE7Z0NBQ25COztnQkFBQSxBQUFZLE9BQU87d0NBQUE7O2tJQUFBLEFBQ1g7O1VBRFcsQUFTbkIsbUJBQW1CLG9CQUFZLEFBQzdCO1lBQUEsQUFBSztvREFBUyxBQUM4QixBQUMxQzt5QkFGRixBQUFjLEFBRUssQUFFcEI7QUFKZSxBQUNaO0FBWGU7O1VBQUEsQUFnQm5CLGFBQWEsbUJBQVcsQUFDdEI7c0JBQUEsQUFBTSxJQUFJLFFBQVYsQUFBa0IsS0FBbEIsQUFBdUIsS0FBSyxlQUFPLEFBQ2pDO2NBQUEsQUFBSzsyQkFDYyxRQURMLEFBQ2EsQUFDekI7aUJBQU8sSUFBQSxBQUFJLEtBRmIsQUFBYyxBQUVJLEFBRW5CO0FBSmUsQUFDWjtBQUZKLEFBTUQ7QUF2QmtCLEFBRWpCOztVQUFBLEFBQUs7V0FBUSxBQUNOLEFBQ0w7Z0JBRlcsQUFFRCxBQUNWO3VCQUxlLEFBRWpCLEFBQWEsQUFHTTtBQUhOLEFBQ1g7V0FJSDs7Ozs7NkJBa0JRLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBMEIsK0JBQUEsQUFBSyxNQURqQyxBQUNFLEFBQXFDLEFBQ3JDLGtDQUFBLEFBQUM7YUFDTSxLQUFBLEFBQUssTUFEWixBQUNrQixBQUNoQjt5QkFBaUIsS0FBQSxBQUFLLE1BRnhCLEFBRThCLEFBQzVCO2VBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDbEI7b0JBQVksS0FKZCxBQUltQjs7b0JBSm5CO3NCQUZGLEFBRUUsQUFNQTtBQU5BO0FBQ0U7O29CQUtGO3NCQVJGLEFBUUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyxvQ0FBUyxrQkFBa0IsS0FBNUIsQUFBaUM7b0JBQWpDO3NCQVZKLEFBQ0UsQUFTRSxBQUdMO0FBSEs7Ozs7OztBQXJDMEIsQTs7a0JBQWIsQSIsImZpbGUiOiJ0b2RvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oc2luaGFuL0RvY3VtZW50cy9wcm9qZWN0L29ubGluZVByb2plY3Qvb2NyLXRvb2xzIn0=
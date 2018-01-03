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

var _jsxFileName = 'D:\\workspace\\PlayProject\\querystars\\components\\querystar\\repolist.js';


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
      }, repos));
    }
  }]);

  return Repolist;
}(_react.Component);
// Repolist.defaultProps = {
//   url: 'https://api.github.com/repos/zeit/next.js',
// };


exports.default = Repolist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHF1ZXJ5c3RhclxccmVwb2xpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJBZGRyZXBvaW5mbyIsIlJlcG9saXN0IiwicHJvcHMiLCJxdWVyeVN0YXJzIiwiZmV0Y2giLCJyZXBvT2JqIiwidXJsIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImN1cnJlbnRSZXBvTmFtZSIsInJlcG9OYW1lIiwic3RhcnMiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiZ2VuUmVwb3MiLCJpbmRleCIsInN0YXRlIiwibmV4dFByb3BzIiwiY29uc29sZSIsImxvZyIsInJlcG9zIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWlCOzs7Ozs7Ozs7SUFFSCxBO29DQUNuQjs7b0JBQUEsQUFBWSxPQUFPO3dDQUFBOzswSUFBQSxBQUNYOztVQURXLEFBaUNuQixhQUFhLG1CQUFXLEFBQ3RCO1lBQU0sUUFBTixBQUFjLEtBQWQsQUFDRyxLQUFLLGVBQUE7ZUFBTyxJQUFQLEFBQU8sQUFBSTtBQURuQixTQUFBLEFBRUcsS0FBSyxlQUFBO3FCQUNKLEFBQUs7MkJBQ2MsUUFETCxBQUNhLEFBQ3pCO2lCQUFPLElBSEwsQUFDSixBQUFjLEFBRUQ7QUFGQyxBQUNaLFNBREY7QUFISixBQVFEO0FBMUNrQjs7VUFBQSxBQTRDbkIsV0FBVyxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDN0I7NkJBQ0UsY0FBQSxRQUFJLEtBQUosQUFBUztvQkFBVDtzQkFBQSxBQUNHO0FBREg7T0FBQSxVQUFBLEFBQ1csQUFDVCwwQkFBQSxjQUFBO2lCQUNXLG1CQUFNLEFBQ2I7Z0JBQUEsQUFBSyxXQUFMLEFBQWdCLEFBQ2pCO0FBSEg7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxTQUpOLEFBQ0UsQUFFRSxBQVNMO0FBekRrQixBQUVqQjs7VUFBQSxBQUFLLFFBRlksQUFFakIsQUFBYTtXQUNkOzs7Ozs4QyxBQUV5QixXQUFXO21CQUNuQzs7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO2NBQUEsQUFBUSxJQUFJLFVBQVosQUFBc0IsQUFDdEI7VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLG1CQUFtQixVQUFsQyxBQUE0QyxpQkFBaUIsQUFDM0Q7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtjQUFNLFVBQU4sQUFBZ0IsS0FBaEIsQUFDRyxLQUFLLGVBQUE7aUJBQU8sSUFBUCxBQUFPLEFBQUk7QUFEbkIsV0FBQSxBQUVHLEtBQUssZUFBQTt3QkFDSixBQUFLOzZCQUNjLE9BQUEsQUFBSyxNQURWLEFBQ2dCLEFBQzVCO21CQUFPLElBSEwsQUFDSixBQUFjLEFBRUQ7QUFGQyxBQUNaLFdBREY7QUFISixBQVFEO0FBQ0Y7Ozs7d0NBRW1CO21CQUNsQjs7Y0FBQSxBQUFRLGtCQUFnQixLQUFBLEFBQUssTUFBN0IsQUFBbUMsQUFDbkM7WUFBTSxLQUFBLEFBQUssTUFBWCxBQUFpQixLQUFqQixBQUNHLEtBQUssZUFBQTtlQUFPLElBQVAsQUFBTyxBQUFJO0FBRG5CLFNBQUEsQUFFRyxLQUFLLGVBQUE7c0JBQ0osQUFBSzsyQkFDYyxPQUFBLEFBQUssTUFEVixBQUNnQixBQUM1QjtpQkFBTyxJQUhMLEFBQ0osQUFBYyxBQUVEO0FBRkMsQUFDWixTQURGO0FBSEosQUFRRDs7Ozs2QkE0QlEsQUFDUDtVQUFNLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLElBQUksS0FBbkMsQUFBYyxBQUEwQixBQUN4Qzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUN3Qiw4QkFBQSxBQUFLLE1BRDdCLEFBQ21DLGlCQUFxQixRQUR4RCxBQUVHLFVBQUEsQUFBSyxNQUZSLEFBRWMsT0FIaEIsQUFDRSxBQUlBLGtDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLFNBTkosQUFDRSxBQUtFLEFBR0w7Ozs7O0FBdkVtQyxBO0FBeUV0QztBQUNBO0FBQ0E7OztrQkEzRXFCLEEiLCJmaWxlIjoicmVwb2xpc3QuanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL1BsYXlQcm9qZWN0L3F1ZXJ5c3RhcnMifQ==
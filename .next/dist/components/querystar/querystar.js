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

var _repolist = require('./repolist');

var _repolist2 = _interopRequireDefault(_repolist);

var _querybar = require('./querybar');

var _querybar2 = _interopRequireDefault(_querybar);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hsinhan/Documents/project/onlineProject/ocr-tools/components/querystar/querystar.js';


var Querystar = function (_Component) {
  (0, _inherits3.default)(Querystar, _Component);

  function Querystar(props) {
    (0, _classCallCheck3.default)(this, Querystar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Querystar.__proto__ || (0, _getPrototypeOf2.default)(Querystar)).call(this, props));

    _this.repos = [{
      repoName: 'zeit/next.js',
      url: 'https://api.github.com/repos/zeit/next.js'
    }, {
      repoName: 'mosluce/realtime-chat-practice',
      url: 'https://api.github.com/repos/mosluce/realtime-chat-practice'
    }];

    _this.onChangeQueryStr = function (queryStr) {
      _this.setState({
        url: 'https://api.github.com/repos/' + queryStr,
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

    _this.addRepo = function (repoInfo) {
      var currentRepo = _this.state.repos;
      currentRepo.push(repoInfo);
      _this.setState({ repos: currentRepo });
    };

    _this.state = {
      url: _this.repos[0].url,
      currentRepoName: _this.repos[0].repoName,
      repos: _this.repos
    };
    return _this;
  }

  (0, _createClass3.default)(Querystar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_repolist2.default, {
        url: this.state.url,
        currentRepoName: this.state.currentRepoName,
        stars: this.state.stars,
        repos: this.state.repos,
        queryStars: this.queryStars,
        addRepo: this.addRepo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement(_querybar2.default, { onChangeQueryStr: this.onChangeQueryStr, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }));
    }
  }]);

  return Querystar;
}(_react.Component);

//'http://www.json-generator.com/api/json/get/bUhOtXwCMi?indent=2'
//'http://www.json-generator.com/api/json/get/cfUwqOrsde?indent=2'


exports.default = Querystar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcXVlcnlzdGFyL3F1ZXJ5c3Rhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlcG9saXN0IiwiUXVlcnliYXIiLCJheGlvcyIsIlF1ZXJ5c3RhciIsInByb3BzIiwicmVwb3MiLCJyZXBvTmFtZSIsInVybCIsIm9uQ2hhbmdlUXVlcnlTdHIiLCJzZXRTdGF0ZSIsInF1ZXJ5U3RyIiwiY3VycmVudFJlcG9OYW1lIiwicXVlcnlTdGFycyIsImdldCIsInJlcG9PYmoiLCJ0aGVuIiwic3RhcnMiLCJyZXMiLCJkYXRhIiwic3RhcmdhemVyc19jb3VudCIsImFkZFJlcG8iLCJjdXJyZW50UmVwbyIsInN0YXRlIiwicHVzaCIsInJlcG9JbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFjOzs7O0FBRXJCLEFBQU87Ozs7Ozs7OztJQUVjLEE7cUNBWW5COztxQkFBQSxBQUFZLE9BQU87d0NBQUE7OzRJQUFBLEFBQ1g7O1VBWlIsQUFXbUI7Z0JBVmpCLEFBQ1ksQUFDVjtXQUhJLEFBQ04sQUFFTztBQUZQLEFBQ0UsS0FGSTtnQkFLTixBQUNZLEFBQ1Y7V0FQSSxBQUtOLEFBRU8sQUFJVTtBQU5qQixBQUNFOztVQUtlLEFBU25CLG1CQUFtQixvQkFBWSxBQUM3QjtZQUFBLEFBQUs7K0NBQVMsQUFDeUIsQUFDckM7eUJBRkYsQUFBYyxBQUVLLEFBRXBCO0FBSmUsQUFDWjtBQVhlOztVQUFBLEFBZ0JuQixhQUFhLG1CQUFXLEFBQ3RCO3NCQUFBLEFBQU0sSUFBSSxRQUFWLEFBQWtCLEtBQWxCLEFBQXVCLEtBQUssZUFBTyxBQUNqQztjQUFBLEFBQUs7MkJBQ2MsUUFETCxBQUNhLEFBQ3pCO2lCQUFPLElBQUEsQUFBSSxLQUZiLEFBQWMsQUFFSSxBQUVuQjtBQUplLEFBQ1o7QUFGSixBQU1EO0FBdkJrQjs7VUFBQSxBQXlCbkIsVUFBVSxvQkFBWSxBQUNwQjtVQUFNLGNBQWMsTUFBQSxBQUFLLE1BQXpCLEFBQStCLEFBQy9CO2tCQUFBLEFBQVksS0FBWixBQUFpQixBQUNqQjtZQUFBLEFBQUssU0FBUyxFQUFFLE9BQWhCLEFBQWMsQUFBUyxBQUN4QjtBQTdCa0IsQUFFakI7O1VBQUEsQUFBSztXQUNFLE1BQUEsQUFBSyxNQUFMLEFBQVcsR0FETCxBQUNRLEFBQ25CO3VCQUFpQixNQUFBLEFBQUssTUFBTCxBQUFXLEdBRmpCLEFBRW9CLEFBQy9CO2FBQU8sTUFMUSxBQUVqQixBQUFhLEFBR0M7QUFIRCxBQUNYO1dBSUg7Ozs7OzZCQXdCUSxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzthQUNNLEtBQUEsQUFBSyxNQURaLEFBQ2tCLEFBQ2hCO3lCQUFpQixLQUFBLEFBQUssTUFGeEIsQUFFOEIsQUFDNUI7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNsQjtlQUFPLEtBQUEsQUFBSyxNQUpkLEFBSW9CLEFBQ2xCO29CQUFZLEtBTGQsQUFLbUIsQUFDakI7aUJBQVMsS0FOWCxBQU1nQjs7b0JBTmhCO3NCQURGLEFBQ0UsQUFRQTtBQVJBO0FBQ0U7O29CQU9GO3NCQVRGLEFBU0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyxvQ0FBUyxrQkFBa0IsS0FBNUIsQUFBaUM7b0JBQWpDO3NCQVhKLEFBQ0UsQUFVRSxBQUdMO0FBSEs7Ozs7OztBQXZEK0IsQTs7QUE2RHZDO0FBQ0E7OztrQkE5RHFCLEEiLCJmaWxlIjoicXVlcnlzdGFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oc2luaGFuL0RvY3VtZW50cy9wcm9qZWN0L29ubGluZVByb2plY3Qvb2NyLXRvb2xzIn0=
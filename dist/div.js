'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // deprecated - see https://github.com/jxnblk/styled-system/tree/master/clean-tag


var blacklist = ['theme', 'innerRef'].concat(_toConsumableArray(Object.keys(_extends({}, _styledSystem.propTypes.space, _styledSystem.propTypes.width, _styledSystem.propTypes.fontSize, _styledSystem.propTypes.color, _styledSystem.propTypes.flex, _styledSystem.propTypes.alignItems, _styledSystem.propTypes.justifyContent, _styledSystem.propTypes.flexWrap, _styledSystem.propTypes.flexDirection))), ['order']);

var omit = function omit(obj, keys) {
  var next = {};
  for (var key in obj) {
    if (keys.indexOf(key) > -1) continue;
    next[key] = obj[key];
  }
  return next;
};

var div = function (_React$Component) {
  _inherits(div, _React$Component);

  function div() {
    _classCallCheck(this, div);

    return _possibleConstructorReturn(this, (div.__proto__ || Object.getPrototypeOf(div)).apply(this, arguments));
  }

  _createClass(div, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          is = _props.is,
          innerRef = _props.innerRef,
          props = _objectWithoutProperties(_props, ['is', 'innerRef']);

      var attr = omit(props, blacklist);

      return _react2.default.createElement(is, _extends({
        ref: innerRef
      }, attr));
    }
  }]);

  return div;
}(_react2.default.Component);

div.styledComponentId = 'lol';
div.defaultProps = {
  is: 'div'
};
exports.default = div;
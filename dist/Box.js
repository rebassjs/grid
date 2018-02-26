'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _cleanTag = require('clean-tag');

var _cleanTag2 = _interopRequireDefault(_cleanTag);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = (0, _styledComponents2.default)(_cleanTag2.default)([], { boxSizing: 'border-box' }, _styledSystem.width, _styledSystem.space, _styledSystem.fontSize, _styledSystem.color, _styledSystem.flex, _styledSystem.order);

Box.displayName = 'Box';

Box.defaultProps = {
  theme: _theme2.default
};

Box.propTypes = _extends({}, _styledSystem.width.propTypes, _styledSystem.space.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.color.propTypes, _styledSystem.flex.propTypes, _styledSystem.order.propTypes);

exports.default = Box;
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { Divider } from '@aurum/pfe-ui';
import React from 'react';
var DivideAreaTitle = function DivideAreaTitle(_ref) {
  var title = _ref.title,
    style = _ref.style,
    _ref$noLine = _ref.noLine,
    noLine = _ref$noLine === void 0 ? false : _ref$noLine,
    _ref$subTitle = _ref.subTitle,
    subTitle = _ref$subTitle === void 0 ? false : _ref$subTitle;
  return /*#__PURE__*/React.createElement(React.Fragment, null, subTitle ? /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      position: 'relative',
      height: 32,
      marginBottom: 16,
      paddingLeft: 8,
      borderRadius: 4,
      fontSize: 14,
      lineHeight: '32px',
      fontWeight: 'bold',
      color: '#222',
      backgroundColor: '#f6f6f6'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 8,
      width: 4,
      height: 16,
      borderRadius: '5px 0px 5px 0px',
      backgroundColor: '#ffbc0d'
    }
  }), title) : /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      fontWeight: 'bold',
      color: '#101010',
      fontSize: '16px'
    }, style)
  }, title), noLine ? null : /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: '16px 0',
      color: '#f1f1f1'
    }
  }));
};
export default DivideAreaTitle;
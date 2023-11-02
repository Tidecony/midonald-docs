import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Button, Input } from '@aurum/pfe-ui';
import React, { useState } from 'react';
var SearchInput = function SearchInput(_ref) {
  var _ref$btnText = _ref.btnText,
    btnText = _ref$btnText === void 0 ? '查询' : _ref$btnText,
    inputStyle = _ref.inputStyle,
    onSearch = _ref.onSearch;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var handleSearch = function handleSearch() {
    onSearch(value);
  };
  var handleKeyUp = function handleKeyUp(e) {
    if (e.keyCode === 13) {
      onSearch(value);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    style: _objectSpread({
      marginRight: 15
    }, inputStyle),
    allowClear: true,
    value: value,
    onKeyUp: handleKeyUp,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    placeholder: "\u8BF7\u8F93\u5165"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: handleSearch
  }, btnText));
};
export default SearchInput;
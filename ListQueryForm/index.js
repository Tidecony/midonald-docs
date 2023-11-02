import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { IconOpenC, IconStowC } from '@aurum/icons';
import { Button, Col, Form, Row } from '@aurum/pfe-ui';
import React, { useRef, useState } from 'react';
import DivideAreaTitle from "../DivideAreaTitle";
import "./index.less";
var ListQueryForm = function ListQueryForm(_ref) {
  var _formItems$hideItems;
  var queryBtnText = _ref.queryBtnText,
    resetBtnText = _ref.resetBtnText,
    showFilterText = _ref.showFilterText,
    hideFilterText = _ref.hideFilterText,
    formItems = _ref.formItems,
    noHide = _ref.noHide,
    onSearch = _ref.onSearch;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showOrHide = _useState2[0],
    setShowOrHide = _useState2[1];
  var formRef = useRef(null);
  var onFinish = function onFinish(values) {
    onSearch(values);
  };
  var changeFormItem = function changeFormItem() {
    setShowOrHide(!showOrHide);
  };
  return /*#__PURE__*/React.createElement(Form, {
    ref: formRef,
    name: "basic",
    className: "midonald-search-form",
    onFinish: onFinish,
    size: "middle",
    layout: "vertical"
  }, /*#__PURE__*/React.createElement("div", {
    className: "midonald-search-area"
  }, /*#__PURE__*/React.createElement(Row, {
    gutter: 32
  }, formItems.showItems.map(function (item, index) {
    var _item$span, _item$render, _item$render2;
    return item.type === 'title' ? /*#__PURE__*/React.createElement(Col, {
      key: index,
      span: 12
    }, /*#__PURE__*/React.createElement(DivideAreaTitle, {
      title: item.title,
      subTitle: true,
      noLine: true
    })) : /*#__PURE__*/React.createElement(Col, {
      key: index,
      span: (_item$span = item.span) !== null && _item$span !== void 0 ? _item$span : 3
    }, item.type === 'slot' ? (_item$render = item.render) === null || _item$render === void 0 ? void 0 : _item$render.call(item) : /*#__PURE__*/React.createElement(Form.Item, _extends({
      labelCol: {
        span: 6
      },
      label: item.label,
      name: item.name
    }, item.props), (_item$render2 = item.render) === null || _item$render2 === void 0 ? void 0 : _item$render2.call(item)));
  }), showOrHide && !noHide ? /*#__PURE__*/React.createElement(React.Fragment, null, (_formItems$hideItems = formItems.hideItems) === null || _formItems$hideItems === void 0 ? void 0 : _formItems$hideItems.map(function (item, index) {
    var _item$render3, _item$render4;
    return /*#__PURE__*/React.createElement(Col, {
      key: index,
      span: item.span || 3
    }, item.type === 'slot' ? (_item$render3 = item.render) === null || _item$render3 === void 0 ? void 0 : _item$render3.call(item) : /*#__PURE__*/React.createElement(Form.Item, _extends({
      labelCol: {
        span: 6
      },
      label: item.label,
      name: item.name
    }, item.props), (_item$render4 = item.render) === null || _item$render4 === void 0 ? void 0 : _item$render4.call(item)));
  })) : '', /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    htmlType: "submit"
  }, queryBtnText !== null && queryBtnText !== void 0 ? queryBtnText : '查询'), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      var _formRef$current;
      (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.resetFields();
    }
  }, resetBtnText !== null && resetBtnText !== void 0 ? resetBtnText : '重置'), !noHide && /*#__PURE__*/React.createElement(Button, {
    type: "link",
    size: "small",
    onClick: changeFormItem
  }, showOrHide ? "".concat(hideFilterText !== null && hideFilterText !== void 0 ? hideFilterText : '隐藏查询条件') : "".concat(showFilterText !== null && showFilterText !== void 0 ? showFilterText : '全部查询条件'), showOrHide ? /*#__PURE__*/React.createElement(IconStowC, null) : /*#__PURE__*/React.createElement(IconOpenC, null))))));
};
export default ListQueryForm;
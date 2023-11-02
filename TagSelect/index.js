import _extends from "@babel/runtime/helpers/esm/extends";
import _createForOfIteratorHelper from "@babel/runtime/helpers/esm/createForOfIteratorHelper";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["value", "newLabelTip", "options", "getData", "setTagValue", "placeholder", "notFoundContent"];
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { Select, Divider } from '@aurum/pfe-ui';
import { unstable_batchedUpdates } from 'react-dom';
import React, { useState, useEffect, useMemo } from 'react';
// 选项

// 组件参数

var TagSelect = function TagSelect(_ref) {
  var _tagOptions$map;
  var value = _ref.value,
    _ref$newLabelTip = _ref.newLabelTip,
    newLabelTip = _ref$newLabelTip === void 0 ? '新标签' : _ref$newLabelTip,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$getData = _ref.getData,
    getData = _ref$getData === void 0 ? function () {
      return [];
    } : _ref$getData,
    _ref$setTagValue = _ref.setTagValue,
    setTagValue = _ref$setTagValue === void 0 ? function () {} : _ref$setTagValue,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '条件tag' : _ref$placeholder,
    _ref$notFoundContent = _ref.notFoundContent,
    notFoundContent = _ref$notFoundContent === void 0 ? '无匹配标签' : _ref$notFoundContent,
    remaindedProps = _objectWithoutProperties(_ref, _excluded);
  // 新标签，即选项长度为0
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    tagText = _useState2[0],
    setTagText = _useState2[1];
  // 条件tag下拉框是否展开
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  // 下拉选项
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    tagOptions = _useState6[0],
    setTagOptions = _useState6[1];
  var getTags = useMemo(function () {
    return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _getData;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(Array.isArray(options) && options !== null && options !== void 0 && options.length)) {
              _context.next = 3;
              break;
            }
            setTagOptions(_toConsumableArray(options));
            return _context.abrupt("return");
          case 3:
            if (typeof getData === 'function') {
              setTagOptions((_getData = getData()) !== null && _getData !== void 0 ? _getData : []);
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  }, []);
  useEffect(function () {
    getTags();
  }, [getTags]);
  return (
    /*#__PURE__*/
    // 条件tag
    React.createElement(Select, _extends({
      allowClear: true,
      showSearch: true,
      open: open,
      style: {
        width: '30%'
      },
      value: value,
      placeholder: placeholder,
      onInputKeyDown: function onInputKeyDown(e) {
        var val = e.target.value;
        if (e.keyCode === 13 && val && tagText) {
          unstable_batchedUpdates(function () {
            setTagValue(val);
            setTagText('');
            setOpen(false);
          });
        }
      },
      onSearch: function onSearch(val) {
        // 没新输入值或者新输入值与已选中值相等
        if (!val || val === value) {
          setTagText('');
          return;
        }
        // 新输入值存在且不同于已选中值，但无选项
        if (!(tagOptions !== null && tagOptions !== void 0 && tagOptions.length)) {
          setTagText(val);
          return;
        }
        var status = false; // 不存在相等的情况
        var _iterator = _createForOfIteratorHelper(tagOptions),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            if (val === item) {
              status = true;
              break;
            }
          }
          // 不为空：新输入值存在且不同于已选中值，并且值不在选项中
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        setTagText(status ? '' : val);
      },
      onChange: function onChange(val) {
        setTagValue(val);
        setTagText('');
      },
      notFoundContent: !tagText && !(tagOptions !== null && tagOptions !== void 0 && tagOptions.length) ? null : notFoundContent,
      dropdownRender: function dropdownRender(menu) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, menu, tagText ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, {
          style: {
            margin: '8px 0'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            padding: '0 8px 4px'
          },
          role: "link",
          onClick: function onClick() {
            unstable_batchedUpdates(function () {
              setTagValue(tagText);
              setTagText('');
              setOpen(false);
            });
          }
        }, "".concat(tagText, "(").concat(newLabelTip, ")"))) : null);
      },
      options: tagOptions === null || tagOptions === void 0 ? void 0 : (_tagOptions$map = tagOptions.map) === null || _tagOptions$map === void 0 ? void 0 : _tagOptions$map.call(tagOptions, function (item) {
        var _item$label, _item$value;
        return {
          label: (_item$label = item === null || item === void 0 ? void 0 : item.label) !== null && _item$label !== void 0 ? _item$label : item,
          value: (_item$value = item === null || item === void 0 ? void 0 : item.value) !== null && _item$value !== void 0 ? _item$value : item
        };
      }),
      onDropdownVisibleChange: function onDropdownVisibleChange(visible) {
        unstable_batchedUpdates(function () {
          setTagText('');
          setOpen(visible);
        });
      },
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentElement;
      }
    }, remaindedProps))
  );
};
export default TagSelect;
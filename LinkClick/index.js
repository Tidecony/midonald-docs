import React from 'react';
import "./index.less";
var LinkClick = function LinkClick(_ref) {
  var _ref$classList = _ref.classList,
    classList = _ref$classList === void 0 ? '' : _ref$classList,
    children = _ref.children,
    _onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("span", {
    role: "link",
    tabIndex: 0,
    className: "link-span-click ".concat(classList),
    onClick: function onClick(e) {
      return typeof _onClick === 'function' && _onClick(e);
    }
  }, children !== null && children !== void 0 ? children : '/');
};
export default LinkClick;
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var BaseComponent = function BaseComponent(_ref) {
  var _ref$Element = _ref.Element,
      Element = _ref$Element === void 0 ? "div" : _ref$Element,
      baseClassName = _ref.baseClassName,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["Element", "baseClassName", "className"]);

  var classNames = [];

  if (baseClassName) {
    classNames.push(baseClassName);
  }

  if (className) {
    classNames.push(className);
  }

  return React.createElement(Element, _extends({
    className: classNames.join(' ')
  }, props));
};

var Row = function Row(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "div",
    baseClassName: "row"
  }, props));
};

var Portion = function Portion(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "div",
    baseClassName: "portion"
  }, props));
};

var Card = function Card(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "div",
    baseClassName: "ff-card"
  }, props));
};

var Header =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Header, _React$PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(Row, {
        className: "docs-header bg-white shadow-mild vertically-centre-items"
      }, React.createElement(Portion, {
        className: "whole horizontal vertically-centre-items"
      }, React.createElement("div", {
        className: "menu-toggle",
        onClick: this.props.onMenuBtnClick
      }, React.createElement("h6", {
        className: "weight-400"
      }, "\u2014"), React.createElement("h6", {
        className: "weight-400"
      }, "\u2013"))));
    }
  }]);

  return Header;
}(React.PureComponent);

Header.propTypes = {
  // eslint-disable-next-line react/no-typos
  onMenuBtnClick: PropTypes.function
};

var SidebarItemIcon = function SidebarItemIcon(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "div",
    baseClassName: "sidebar-icon"
  }, props));
};

var SidebarItemText = function SidebarItemText(_ref) {
  var linkText = _ref.linkText,
      props = _objectWithoutProperties(_ref, ["linkText"]);

  return React.createElement(BaseComponent, _extends({
    Element: "p",
    baseClassName: "sidebar-text"
  }, props), linkText);
};

var SidebarItem = function SidebarItem(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "div",
    baseClassName: "sidebar-item"
  }, props));
};

var SidebarHeader = function SidebarHeader(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "div",
    baseClassName: "sidebar-header"
  }, props));
};

var SidebarWrapper = function SidebarWrapper(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "div",
    baseClassName: "sidebar-wrapper"
  }, props));
};

var ContentWrapper = function ContentWrapper(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "div",
    baseClassName: "content-wrapper"
  }, props));
};

var HRule = function HRule(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "hr"
  }, props));
};

var Button = function Button(_ref) {
  var value = _ref.value,
      className = _ref.className,
      loading = _ref.loading,
      props = _objectWithoutProperties(_ref, ["value", "className", "loading"]);

  var classNames = [];

  if (className) {
    classNames.push(className);
  }

  if (loading) {
    classNames.push("with-loader");
  }

  return React.createElement(BaseComponent, _extends({
    Element: "button",
    baseClassName: "ff-button",
    className: classNames.join(' ')
  }, props), value);
};

var Form = function Form(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "form",
    baseClassName: "ff-form"
  }, props));
};

var FormUnit = function FormUnit(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "div",
    baseClassName: "ff-form-unit"
  }, props));
};

var FormGroup = function FormGroup(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "div",
    baseClassName: "ff-input-group"
  }, props));
};

var InputField = function InputField(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "input",
    baseClassName: "ff-input"
  }, props));
};

var InputField$1 = function InputField(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "textarea",
    baseClassName: "ff-input"
  }, props));
};

function InputLabel(_ref) {
  var value = _ref.value,
      helpText = _ref.helpText,
      errorText = _ref.errorText,
      props = _objectWithoutProperties(_ref, ["value", "helpText", "errorText"]);

  return React.createElement(BaseComponent, _extends({
    Element: "label",
    baseClassName: "ff-input-label"
  }, props), value, helpText && helpText.length > 0 && React.createElement("span", {
    className: "ff-input-help"
  }, helpText), errorText && errorText.length > 0 && React.createElement("span", {
    className: "ff-input-error"
  }, errorText));
}

var FileUpload = function FileUpload(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "input",
    baseClassName: "ff-input",
    type: "file"
  }, props));
};

var Table = function Table(props) {
  return React.createElement(BaseComponent, _extends({
    Element: "table",
    baseClassName: "ff-table"
  }, props));
};

exports.Button = Button;
exports.Card = Card;
exports.ContentWrapper = ContentWrapper;
exports.FileUpload = FileUpload;
exports.Form = Form;
exports.FormGroup = FormGroup;
exports.FormUnit = FormUnit;
exports.HRule = HRule;
exports.Header = Header;
exports.InputField = InputField;
exports.InputLabel = InputLabel;
exports.Portion = Portion;
exports.Row = Row;
exports.SidebarHeader = SidebarHeader;
exports.SidebarItem = SidebarItem;
exports.SidebarItemIcon = SidebarItemIcon;
exports.SidebarItemText = SidebarItemText;
exports.SidebarWrapper = SidebarWrapper;
exports.Table = Table;
exports.TextArea = InputField$1;
//# sourceMappingURL=index.js.map

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function Row(props) {
  return React.createElement("div", {
    id: props.id,
    className: "row ".concat(props.className || "")
  }, props.children);
}

function Portion(props) {
  return React.createElement("div", {
    id: props.id,
    className: "portion ".concat(props.className || "")
  }, props.children);
}

function Card(props) {
  return React.createElement("div", {
    id: props.id,
    className: "ff-card ".concat(props.className || "")
  }, props.children);
}

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

function SidebarItemIcon(props) {
  return React.createElement("picture", {
    id: props.id,
    className: "sidebar-icon ".concat(props.className || "")
  }, props.children);
}

function SidebarItemText(props) {
  return React.createElement("p", {
    id: props.id,
    className: "sidebar-text ".concat(props.className || "")
  }, props.linkText);
}

function SidebarItem(props) {
  return React.createElement("div", {
    id: props.id,
    className: "sidebar-item ".concat(props.className || "")
  }, props.children);
}

function SidebarHeader(props) {
  return React.createElement("div", {
    id: props.id,
    className: "sidebar-header ".concat(props.className || "")
  }, props.children);
}

function SidebarWrapper(props) {
  return React.createElement("div", {
    id: props.id,
    className: "sidebar-wrapper ".concat(props.className || "")
  }, props.children);
}

function ContentWrapper(props) {
  return React.createElement("div", {
    id: props.id,
    className: "content-wrapper ".concat(props.className || "")
  }, props.children);
}

function HRule(props) {
  return React.createElement("hr", {
    id: props.id,
    className: props.className
  });
}

function Button(props) {
  return React.createElement("button", {
    id: props.id,
    className: "ff-button ".concat(props.className || ""),
    disabled: props.disabled
  }, props.value);
}

function Form(props) {
  return React.createElement("form", {
    id: props.id,
    className: "ff-form ".concat(props.className || "")
  }, props.children);
}

function FormUnit(props) {
  return React.createElement("div", {
    id: props.id,
    className: "ff-form-unit ".concat(props.className || "")
  }, props.children);
}

function FormGroup(props) {
  return React.createElement("div", {
    id: props.id,
    className: "ff-input-group ".concat(props.className || "")
  }, props.children);
}

function InputField(props) {
  return React.createElement("input", {
    id: props.id,
    className: "ff-input ".concat(props.className || ""),
    placeholder: props.placeholder,
    value: props.value,
    type: props.type,
    required: props.required,
    pattern: props.pattern,
    readOnly: props.readonly,
    onChange: props.onChange
  });
}

function TextArea(props) {
  return React.createElement("textarea", {
    id: props.id,
    className: "ff-input ".concat(props.className || ""),
    placeholder: " ",
    rows: props.rows,
    required: props.required,
    readOnly: props.readonly
  });
}

function InputLabel(props) {
  return React.createElement("label", {
    id: props.id,
    className: "ff-input-label ".concat(props.className || "")
  }, props.value, props.helpText && props.helpText.length > 0 && React.createElement("span", {
    className: "ff-input-help"
  }, props.helpText), props.errorText && props.errorText.length > 0 && React.createElement("span", {
    className: "ff-input-error"
  }, props.errorText));
}

function FileUpload(props) {
  return React.createElement("input", {
    id: props.id,
    className: "ff-input ".concat(props.className || ""),
    placeholder: " ",
    value: props.value,
    type: "file",
    required: props.required
  });
}

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
exports.TextArea = TextArea;
//# sourceMappingURL=index.js.map

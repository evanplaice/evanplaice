import 'https://cdn.jsdelivr.net/npm/@vanillawc/wc-markdown@1.5.2/index.js';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var starterSource = "# This is a h1 header\n\n## This is a h2 Header\n\n[This is a link](#)\n\n```this is inline code```\n\n```javascript\n// this is a code block\n```\n\n- these\n- are\n- list\n- items\n\n> this is a blockquote\n\n![this is an image](http://gnarware.com/shared/3-Build-A-Product-Landing-Page/shmoo-icon[32x32].png)\n\n**this is bold text**";

var Editor = function Editor(_ref) {
  var onEdit = _ref.onEdit;

  var _React$useState = React.useState(starterSource),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      source = _React$useState2[0],
      setSource = _React$useState2[1];

  React.useEffect(function () {
    onEdit(source);
  });
  return /*#__PURE__*/React.createElement("div", {
    id: "left"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "editor"
  }, "MARKDOWN"), /*#__PURE__*/React.createElement("textarea", {
    id: "editor",
    onChange: function onChange(e) {
      setSource(e.target.value);
    }
  }, source));
};

function Preview(_ref2) {
  var source = _ref2.source;
  var wc = document.getElementById('preview');
  React.useEffect(function () {
    if (wc) {
      wc.value = source;
    }
  }, [source]);
  return /*#__PURE__*/React.createElement("div", {
    id: "right"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "preview"
  }, "HTML"), /*#__PURE__*/React.createElement("wc-markdown", {
    id: "preview",
    highlight: true
  }));
}

function Application() {
  var _React$useState3 = React.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      source = _React$useState4[0],
      setSource = _React$useState4[1];

  var onEdit = React.useCallback(function (editorState) {
    setSource(editorState);
  }, [setSource]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "header"
  }, /*#__PURE__*/React.createElement("h1", null, "Markdown Editor")), /*#__PURE__*/React.createElement("div", {
    id: "content"
  }, /*#__PURE__*/React.createElement(Editor, {
    onEdit: onEdit
  }), /*#__PURE__*/React.createElement(Preview, {
    source: source
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Application, null), document.getElementById('app'));

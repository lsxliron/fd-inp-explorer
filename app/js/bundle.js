(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _altApplication = require("../alt-application");

var _altApplication2 = _interopRequireDefault(_altApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataPickerActions = function () {
  function DataPickerActions() {
    _classCallCheck(this, DataPickerActions);

    this.generateActions('updateText');
  }

  _createClass(DataPickerActions, [{
    key: "setDropdownText",
    value: function setDropdownText(text, field) {
      return this.updateText({ text: text, field: field });
    }
  }]);

  return DataPickerActions;
}();

exports.default = _altApplication2.default.createActions(DataPickerActions);

},{"../alt-application":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _altApplication = require('../alt-application');

var _altApplication2 = _interopRequireDefault(_altApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageViewerActions = function () {
  function ImageViewerActions() {
    _classCallCheck(this, ImageViewerActions);

    this.generateActions('updateImageUrl', 'updateVarUrl');
  }

  _createClass(ImageViewerActions, [{
    key: 'setImageUrl',
    value: function setImageUrl() {
      return this.updateImageUrl();
    }
  }, {
    key: 'setVarUrl',
    value: function setVarUrl() {
      return this.updateVarUrl();
    }
  }]);

  return ImageViewerActions;
}();

exports.default = _altApplication2.default.createActions(ImageViewerActions);

},{"../alt-application":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _altApplication = require('../alt-application');

var _altApplication2 = _interopRequireDefault(_altApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VariablePickerActions = function () {
  function VariablePickerActions() {
    _classCallCheck(this, VariablePickerActions);

    this.generateActions('updateDropdownText');
  }

  _createClass(VariablePickerActions, [{
    key: 'setDropdownText',
    value: function setDropdownText(field, text) {

      return this.updateDropdownText({ field: field, text: text });
    }
  }]);

  return VariablePickerActions;
}();

exports.default = _altApplication2.default.createActions(VariablePickerActions);

},{"../alt-application":4}],4:[function(require,module,exports){
'use strict';

var Alt = require('alt');
var alt = new Alt();
module.exports = alt;

},{"alt":"alt"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _DataPicker = require('./DataPicker');

var _DataPicker2 = _interopRequireDefault(_DataPicker);

var _ImageViewer = require('./ImageViewer');

var _ImageViewer2 = _interopRequireDefault(_ImageViewer);

var _VariablePicker = require('./VariablePicker');

var _VariablePicker2 = _interopRequireDefault(_VariablePicker);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, null),
        _react2.default.createElement(
          'h2',
          { style: { marginLeft: 2 + 'em' } },
          'Maps'
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_DataPicker2.default, null)
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(_ImageViewer2.default, { imgTarget: 'map' }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'h2',
          { style: { marginLeft: 2 + 'em' } },
          'Variables'
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_VariablePicker2.default, null)
        ),
        _react2.default.createElement(_ImageViewer2.default, { imgTarget: 'variable' }),
        _react2.default.createElement(_Modal2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./DataPicker":6,"./Footer":7,"./ImageViewer":8,"./Modal":9,"./Navbar":10,"./VariablePicker":11,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DataPickerActions = require('../actions/DataPickerActions');

var _DataPickerActions2 = _interopRequireDefault(_DataPickerActions);

var _DataPickerStore = require('../stores/DataPickerStore');

var _DataPickerStore2 = _interopRequireDefault(_DataPickerStore);

var _ImageViewerActions = require('../actions/ImageViewerActions');

var _ImageViewerActions2 = _interopRequireDefault(_ImageViewerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataPicker = function (_React$Component) {
  _inherits(DataPicker, _React$Component);

  function DataPicker(props) {
    _classCallCheck(this, DataPicker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DataPicker).call(this, props));

    _this.state = _DataPickerStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(DataPicker, [{
    key: 'onChange',
    value: function onChange() {
      this.setState(_DataPickerStore2.default.getState());
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _DataPickerStore2.default.listen(this.onChange);

      // Init dropdowns
      $('#yearDropdown').dropdown();
      $('#monthDropdown').dropdown();
      $('#clusterDropDown').dropdown();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _DataPickerStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var field;
      var fieldClass = event.target.className;

      switch (fieldClass) {
        case "monthClass":
          field = "month";
          break;
        case "yearClass":
          field = "year";
          break;
        case "clustersClass":
          field = "cluster";
          break;
      }

      _DataPickerActions2.default.setDropdownText(event.target.text, field);

      // Update image
      _ImageViewerActions2.default.setImageUrl();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(this.state.year);
      var clusters = [];
      for (var i = 1; i <= this.state.numOfClusters[this.state.year]; i++) {
        clusters.push(i);
      }var clusterJSX = clusters.map(function (c) {
        return _react2.default.createElement(
          'li',
          { key: c },
          _react2.default.createElement(
            'a',
            { className: 'clustersClass', href: '#!', onClick: _this2.handleClick },
            c
          )
        );
      });

      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      var monthsJSX = months.map(function (m) {
        return _react2.default.createElement(
          'li',
          { key: m },
          _react2.default.createElement(
            'a',
            { className: 'monthClass', href: '#!', onClick: _this2.handleClick },
            m
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col s4' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', 'data-alignment': 'right', href: '#', 'data-activates': 'yearDropdown' },
            this.state.year
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s4' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', 'data-alignment': 'right', href: '#', 'data-activates': 'monthDropdown' },
            this.state.month
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s4' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', 'data-alignment': 'right', href: '#', 'data-activates': 'clusterDropDown' },
            this.state.cluster
          )
        ),
        _react2.default.createElement(
          'ul',
          { id: 'yearDropdown', className: 'dropdown-content' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'yearClass', href: '#!', onClick: this.handleClick },
              '2006'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'yearClass', href: '#!', onClick: this.handleClick },
              '2007'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'yearClass', href: '#!', onClick: this.handleClick },
              '2008'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'yearClass', href: '#!', onClick: this.handleClick },
              '2009'
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { id: 'monthDropdown', className: 'dropdown-content' },
          monthsJSX
        ),
        _react2.default.createElement(
          'ul',
          { id: 'clusterDropDown', className: 'dropdown-content' },
          _react2.default.createElement(
            'li',
            { key: '0' },
            _react2.default.createElement(
              'a',
              { className: 'clustersClass', href: '#!', onClick: this.handleClick },
              'Full'
            )
          ),
          clusterJSX
        )
      );
    }
  }]);

  return DataPicker;
}(_react2.default.Component);

exports.default = DataPicker;

},{"../actions/DataPickerActions":1,"../actions/ImageViewerActions":2,"../stores/DataPickerStore":13,"react":"react","react-dom":"react-dom"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        { className: "page-footer" },
        _react2.default.createElement(
          "div",
          { className: "footer-copyright" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            "© Created by ",
            _react2.default.createElement(
              "a",
              { href: "http://www.gagn.io", target: "_blank" },
              "Liron Shimrony "
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageViewerActions = require('../actions/ImageViewerActions');

var _ImageViewerActions2 = _interopRequireDefault(_ImageViewerActions);

var _ImageViewerStore = require('../stores/ImageViewerStore');

var _ImageViewerStore2 = _interopRequireDefault(_ImageViewerStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageViewer = function (_React$Component) {
  _inherits(ImageViewer, _React$Component);

  function ImageViewer(props) {
    _classCallCheck(this, ImageViewer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageViewer).call(this, props));

    _this.state = _ImageViewerStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(ImageViewer, [{
    key: 'onChange',
    value: function onChange() {
      this.setState(_ImageViewerStore2.default.getState());
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _ImageViewerStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _ImageViewerStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var url;
      return _react2.default.createElement(
        'div',
        { className: 'imgDiv' },
        _react2.default.createElement('img', { className: this.props.imgTarget == "map" ? "mapImage" : "varImage", src: this.props.imgTarget == "map" ? this.state.imageUrl : this.state.varUrl })
      );
    }
  }]);

  return ImageViewer;
}(_react2.default.Component);

exports.default = ImageViewer;

},{"../actions/ImageViewerActions":2,"../stores/ImageViewerStore":14,"react":"react"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "modalHelp", className: "modal" },
        _react2.default.createElement(
          "div",
          { className: "modal-content" },
          _react2.default.createElement(
            "h4",
            null,
            "FD-INP Data Explorer"
          ),
          _react2.default.createElement(
            "h5",
            null,
            " Intro "
          ),
          _react2.default.createElement(
            "p",
            null,
            "This explorer shows the data for the ",
            _react2.default.createElement(
              "a",
              { href: "http://isccp.giss.nasa.gov/outgoing/FLUX/INP/", target: "_blank" },
              "FD-INP"
            ),
            " dataset. ",
            _react2.default.createElement("br", null),
            "All the maps and visualizations are taking into consideration only 41 out of the 281 variables. Those variable are 1-41 in the ISCCP original ",
            _react2.default.createElement(
              "a",
              { href: "http://isccp.giss.nasa.gov/outgoing/FLUX/INP/read_i2_FD_inp.f", target: "_blank" },
              "reader"
            )
          ),
          _react2.default.createElement(
            "h5",
            null,
            "Maps"
          ),
          _react2.default.createElement(
            "p",
            null,
            "In the top part of the app we can see the clustered data. To see a specific cluster, you must choose the year, month and cluster in the appropriate dropdown lists. ",
            _react2.default.createElement("br", null),
            "For Each month, there is one recored in the clusters list called ",
            _react2.default.createElement(
              "strong",
              null,
              "Full"
            ),
            ". Choosing this record will display all the clusters for the selected month.",
            _react2.default.createElement("br", null),
            "For convenience, the full maps are plotted without the biggest cluster which coveres most of the area. This cluster can be explored when inspecting individual clusters. The map that is used was taken from the ",
            _react2.default.createElement(
              "a",
              { href: "http://isccp.giss.nasa.gov/docs/mapgridinfo.html", target: "_blank" },
              "ISCCP"
            ),
            " website",
            _react2.default.createElement("br", null),
            "The first map displayed when the app is loaded is for ",
            _react2.default.createElement(
              "strong",
              null,
              "January 2009"
            ),
            "."
          ),
          _react2.default.createElement(
            "h5",
            null,
            "Variables"
          ),
          _react2.default.createElement(
            "p",
            null,
            "On the bottom of the app, we can explore variables 1-41 from the ISCCP dataset (see ",
            _react2.default.createElement(
              "a",
              { href: "http://isccp.giss.nasa.gov/outgoing/FLUX/INP/read_i2_FD_inp.f", target: "_blank" },
              "reference"
            ),
            "). The mean and standard deviation of each varible is specified in the header. ",
            _react2.default.createElement("br", null),
            "When exploring the variables there are two options:"
          ),
          _react2.default.createElement(
            "ol",
            null,
            _react2.default.createElement(
              "li",
              null,
              "By choosing monthly category, it is possible to expore the variables by spceifying month, year and variable name"
            ),
            _react2.default.createElement(
              "li",
              null,
              "By choosing yearly category, it is possible to explore the variables by specifying year and variable name. As the name implies, the data for each variable is for the whole year."
            )
          ),
          _react2.default.createElement(
            "p",
            null,
            "The first graph displayed when the app is loaded is ",
            _react2.default.createElement(
              "strong",
              null,
              "ps____"
            ),
            " as for the year of 2009."
          ),
          _react2.default.createElement(
            "strong",
            null,
            "Note:"
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "p",
            null,
            "In case the variable is being explored using the monthly mode (see below), the standard deviation and mean are monthly as well."
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-footer" },
          _react2.default.createElement(
            "a",
            { href: "#!", className: " modal-action modal-close waves-effect waves-green btn-flat" },
            "Close"
          )
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

exports.default = Modal;

},{"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

    _this.displayModal = _this.displayModal.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'displayModal',
    value: function displayModal() {
      $('#modalTrigger').leanModal();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'div',
          { className: 'nav-wrapper' },
          _react2.default.createElement(
            'a',
            { href: '#', className: 'brand-logo' },
            '   FD-INP Data Explorer'
          ),
          _react2.default.createElement(
            'ul',
            { id: 'nav-mobile', className: 'right hide-on-med-and-down' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { id: 'modalTrigger', href: '#modalHelp', onClick: this.displayModal },
                'Help'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VariablePickerStore = require('../stores/VariablePickerStore');

var _VariablePickerStore2 = _interopRequireDefault(_VariablePickerStore);

var _VariablePickerActions = require('../actions/VariablePickerActions');

var _VariablePickerActions2 = _interopRequireDefault(_VariablePickerActions);

var _ImageViewerActions = require('../actions/ImageViewerActions');

var _ImageViewerActions2 = _interopRequireDefault(_ImageViewerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VariablePicker = function (_React$Component) {
  _inherits(VariablePicker, _React$Component);

  function VariablePicker(props) {
    _classCallCheck(this, VariablePicker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VariablePicker).call(this, props));

    _this.state = _VariablePickerStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(VariablePicker, [{
    key: 'onChange',
    value: function onChange() {
      this.setState(_VariablePickerStore2.default.getState());
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _VariablePickerStore2.default.listen(this.onChange);
      $('#varsDropdown').dropdown();
      $('#varsYears').dropdown();
      $('#varCategoryDropdown').dropdown();
      $('#varsMonthDropdown').dropdown();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _VariablePickerStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var clickedClass = event.target.className;
      var field;

      switch (clickedClass) {
        case "varNameClass":
          field = "varName";
          break;
        case "varYearClass":
          field = "varYear";
          break;
        case "varMonthClass":
          field = "varMonth";
          break;
        case "varCategoryClass":
          field = "varCategory";
          break;
      }

      _VariablePickerActions2.default.setDropdownText(field, event.target.text);
      _ImageViewerActions2.default.setVarUrl();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fields = ["ps____", "ts____", "al_srf", "em_srf", "mu0___", "tlo3__", "ta____", "t_900_", "t_740_", "t_620_", "t_500_", "t_375_", "t_245_", "t_125_", "t_050_", "t_015_", "w900fl", "w740fl", "w620fl", "w500fl", "w375fl", "w245fl", "w125fl", "w050fl", "w015fl", "ntltyp", "cftp01", "cftp02", "cftp03", "cftp04", "cftp05", "cftp06", "cftp07", "cftp08", "cftp09", "cftp10", "cftp11", "cftp12", "cftp13", "cftp14", "cftp15"];

      var fieldsJSX = fields.map(function (f) {
        return _react2.default.createElement(
          'li',
          { key: f },
          _react2.default.createElement(
            'a',
            { href: '#!', className: 'varNameClass', onClick: _this2.handleClick },
            f
          )
        );
      });

      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      var monthsJSX = months.map(function (m) {
        return _react2.default.createElement(
          'li',
          { key: m },
          _react2.default.createElement(
            'a',
            { className: 'varMonthClass', href: '#!', onClick: _this2.handleClick },
            m
          )
        );
      });

      var monthCssClass = "dropdown-button btn spacy-dropdown";

      if (this.state.varCategory == "Yearly") monthCssClass += " disabled";

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col s3' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', href: '#!', 'data-activates': 'varCategoryDropdown' },
            this.state.varCategory
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s3' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', href: '#!', 'data-activates': 'varsYears' },
            this.state.varYear
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s3' },
          _react2.default.createElement(
            'a',
            { className: monthCssClass, 'data-beloworigin': 'true', href: '#!', 'data-activates': 'varsMonthDropdown' },
            this.state.varMonth
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s3' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', href: '#!', 'data-activates': 'varsDropdown' },
            this.state.selectedVar
          )
        ),
        _react2.default.createElement(
          'ul',
          { id: 'varsDropdown', className: 'dropdown-content' },
          fieldsJSX
        ),
        _react2.default.createElement(
          'ul',
          { id: 'varsYears', className: 'dropdown-content' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#!', className: 'varYearClass', onClick: this.handleClick },
              '2006'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#!', className: 'varYearClass', onClick: this.handleClick },
              '2007'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#!', className: 'varYearClass', onClick: this.handleClick },
              '2008'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#!', className: 'varYearClass', onClick: this.handleClick },
              '2009'
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { id: 'varCategoryDropdown', className: 'dropdown-content' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#!', className: 'varCategoryClass', onClick: this.handleClick },
              'Monthly'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#!', className: 'varCategoryClass', onClick: this.handleClick },
              'Yearly'
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { id: 'varsMonthDropdown', className: 'dropdown-content' },
          monthsJSX
        )
      );
    }
  }]);

  return VariablePicker;
}(_react2.default.Component);

exports.default = VariablePicker;

},{"../actions/ImageViewerActions":2,"../actions/VariablePickerActions":3,"../stores/VariablePickerStore":15,"react":"react"}],12:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

},{"./components/App":5,"react":"react","react-dom":"react-dom"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _altApplication = require('../alt-application');

var _altApplication2 = _interopRequireDefault(_altApplication);

var _DataPickerActions = require('../actions/DataPickerActions');

var _DataPickerActions2 = _interopRequireDefault(_DataPickerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataPickerStore = function () {
  function DataPickerStore() {
    _classCallCheck(this, DataPickerStore);

    this.bindActions(_DataPickerActions2.default);
    this.year = "Year";
    this.month = "Month";
    this.cluster = "Cluster";
    this.fullSelection = false;
    this.numOfClusters = { "2009": 42, "2008": 47, "2007": 50, "2006": 37, "Year": 0 };
  }

  _createClass(DataPickerStore, [{
    key: 'onUpdateText',
    value: function onUpdateText(data) {
      switch (data.field) {
        case "year":
          this.year = data.text;
          break;
        case "month":
          this.month = data.text;
          break;
        case "cluster":
          this.cluster = data.text;
          break;
      }

      if (this.year != "Year" && this.month != "Month" && this.cluster != "Cluster") {
        this.fullSelection = true;
      } else this.fullSelection = false;
    }
  }]);

  return DataPickerStore;
}();

exports.default = _altApplication2.default.createStore(DataPickerStore);

},{"../actions/DataPickerActions":1,"../alt-application":4}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _altApplication = require('../alt-application');

var _altApplication2 = _interopRequireDefault(_altApplication);

var _ImageViewerActions = require('../actions/ImageViewerActions');

var _ImageViewerActions2 = _interopRequireDefault(_ImageViewerActions);

var _DataPickerStore = require('../stores/DataPickerStore');

var _DataPickerStore2 = _interopRequireDefault(_DataPickerStore);

var _VariablePickerStore = require('../stores/VariablePickerStore');

var _VariablePickerStore2 = _interopRequireDefault(_VariablePickerStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageViewerStore = function () {
  function ImageViewerStore() {
    _classCallCheck(this, ImageViewerStore);

    this.bindActions(_ImageViewerActions2.default);
    this.imageUrl = "static/2009/1_January/maps/January_2009.png";
    this.varUrl = "static/2009/vars/ps____.png";
  }

  _createClass(ImageViewerStore, [{
    key: 'onUpdateImageUrl',
    value: function onUpdateImageUrl() {
      this.waitFor(_DataPickerStore2.default.dispatchToken);
      var data = _DataPickerStore2.default.getState();
      var url;
      if (data.fullSelection) {
        var months = { January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7,
          August: 8, September: 9, October: 10, November: 11, December: 12 };

        if (data.cluster == "Full") {
          url = 'static/' + data.year + '/' + months[data.month] + '_' + data.month + '/maps/' + data.month + '_' + data.year + '.png';
        } else {
          url = 'static/' + data.year + '/' + months[data.month] + '_' + data.month + '/maps/' + data.month + '_' + data.year + '_C' + data.cluster + '.png';
        }

        this.imageUrl = url;
      }
    }
  }, {
    key: 'onUpdateVarUrl',
    value: function onUpdateVarUrl() {
      this.waitFor(_VariablePickerStore2.default.dispatchToken);
      var months = { January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7,
        August: 8, September: 9, October: 10, November: 11, December: 12 };

      var varData = _VariablePickerStore2.default.getState();

      if (varData.fullSelection) {
        if (varData.varCategory == "Yearly") this.varUrl = 'static/' + varData.varYear + '/vars/' + varData.selectedVar + '.png';else {
          var monthName = varData.varMonth;
          var monthNumber = months[monthName];
          var year = varData.varYear;

          // TODO: Should be removed after changing filenames
          if (year == 2009) this.varUrl = 'static/' + year + '/' + monthNumber + '_' + monthName + '/vars/' + monthName + '_' + varData.selectedVar + '.png';else this.varUrl = 'static/' + year + '/' + monthNumber + '_' + monthName + '/vars/' + varData.selectedVar + '.png';
        }
      }
    }
  }]);

  return ImageViewerStore;
}();

exports.default = _altApplication2.default.createStore(ImageViewerStore);

},{"../actions/ImageViewerActions":2,"../alt-application":4,"../stores/DataPickerStore":13,"../stores/VariablePickerStore":15}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _altApplication = require('../alt-application');

var _altApplication2 = _interopRequireDefault(_altApplication);

var _VariablePickerActions = require('../actions/VariablePickerActions');

var _VariablePickerActions2 = _interopRequireDefault(_VariablePickerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VariablePickerStore = function () {
  function VariablePickerStore() {
    _classCallCheck(this, VariablePickerStore);

    this.bindActions(_VariablePickerActions2.default);
    this.selectedVar = "Name";
    this.varCategory = "Category";
    this.varYear = "Year";
    this.varMonth = "Month";
    this.fullSelection = false;
  }

  _createClass(VariablePickerStore, [{
    key: 'onUpdateDropdownText',
    value: function onUpdateDropdownText(payload) {
      switch (payload.field) {
        case "varName":
          this.selectedVar = payload.text;
          break;
        case "varMonth":
          this.varMonth = payload.text;
          break;
        case "varYear":
          this.varYear = payload.text;
          break;
        case "varCategory":
          this.varCategory = payload.text;
          break;
      }

      // Determine if all fields are set

      if (this.varCategory == "Yearly") {
        if (this.selectedVar != "Name" && this.varYear != "Year") this.fullSelection = true;
      } else if (this.varCategory == "Monthly") if (this.selectedVar != "Name" && this.varYear != "Year" && this.varMonth != "Month") this.fullSelection = true;else this.fullSelection = false;
    }
  }]);

  return VariablePickerStore;
}();

exports.default = _altApplication2.default.createStore(VariablePickerStore);

},{"../actions/VariablePickerActions":3,"../alt-application":4}]},{},[12])


//# sourceMappingURL=bundle.js.map

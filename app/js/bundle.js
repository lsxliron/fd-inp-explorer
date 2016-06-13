(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _altApplication = require('../alt-application');

var _altApplication2 = _interopRequireDefault(_altApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasActions = function () {
  function CanvasActions() {
    _classCallCheck(this, CanvasActions);

    this.generateActions('clearCanvas', 'setCanvasTransparency');
  }

  _createClass(CanvasActions, [{
    key: 'setPixels',
    value: function setPixels(canvas) {
      return new Promise(function (resolve, reject) {
        var imgData = canvas.getContext("2d").getImageData(0, 0, 3200, 1200);
        var pixels = imgData.data;
        for (var i = 0; i < pixels.length; i += 4) {
          if (pixels[i] != 255 && pixels[i] == pixels[i + 1] && pixels[i + 1] == pixels[i + 2]) {
            pixels[i] = 240;
            pixels[i + 1] = 240;
            pixels[i + 2] = 240;
          }
        }
        resolve(imgData);
      });
    }
  }, {
    key: 'updateCanvas',
    value: function updateCanvas(imgData, canvas) {
      return new Promise(function (resolve, reject) {
        var ctx = canvas.getContext("2d");
        ctx.putImageData(imgData, 0, 0);
        resolve(canvas);
      });
    }
  }, {
    key: 'resetCanvas',
    value: function resetCanvas(canvas) {
      console.log("XXX");
      return this.clearCanvas(canvas);
      // var ctx = canvas.getContext("2d");
      // ctx.drawImage(this.state.img, 0, 0, this.state.img.width, this.state.img.height);
    }
  }, {
    key: 'setTransparent',
    value: function setTransparent(trans) {
      return this.setCanvasTransparency(trans);
    }
  }]);

  return CanvasActions;
}();

exports.default = _altApplication2.default.createActions(CanvasActions);

},{"../alt-application":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _altApplication = require('../alt-application');

var _altApplication2 = _interopRequireDefault(_altApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClusterPickerActions = function () {
  function ClusterPickerActions() {
    _classCallCheck(this, ClusterPickerActions);

    this.generateActions('updateDropdownText');
  }

  _createClass(ClusterPickerActions, [{
    key: 'setDropdownText',
    value: function setDropdownText(text, field) {
      return this.updateDropdownText({ text: text, field: field });
    }
  }]);

  return ClusterPickerActions;
}();

exports.default = _altApplication2.default.createActions(ClusterPickerActions);

},{"../alt-application":6}],3:[function(require,module,exports){
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

},{"../alt-application":6}],4:[function(require,module,exports){
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

    this.generateActions('updateImageUrl', 'updateVarUrl', 'updateClusterUrl');
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
  }, {
    key: 'setClusterUrl',
    value: function setClusterUrl() {
      return this.updateClusterUrl;
    }
  }]);

  return ImageViewerActions;
}();

exports.default = _altApplication2.default.createActions(ImageViewerActions);

},{"../alt-application":6}],5:[function(require,module,exports){
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

},{"../alt-application":6}],6:[function(require,module,exports){
'use strict';

var Alt = require('alt');
var alt = new Alt();
module.exports = alt;

},{"alt":"alt"}],7:[function(require,module,exports){
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

var _ClusterPicker = require('./ClusterPicker');

var _ClusterPicker2 = _interopRequireDefault(_ClusterPicker);

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
          'Clusters Distribution'
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_ClusterPicker2.default, null)
        ),
        _react2.default.createElement(_ImageViewer2.default, { imgTarget: 'cluster' }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'h2',
          { style: { marginLeft: 2 + 'em' } },
          'Variables Distribution'
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

},{"./ClusterPicker":9,"./DataPicker":10,"./Footer":11,"./ImageViewer":12,"./Modal":13,"./Navbar":14,"./VariablePicker":15,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CanvasActions = require('../actions/CanvasActions');

var _CanvasActions2 = _interopRequireDefault(_CanvasActions);

var _CanvasStore = require('../stores/CanvasStore');

var _CanvasStore2 = _interopRequireDefault(_CanvasStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Canvas = function (_React$Component) {
  _inherits(Canvas, _React$Component);

  function Canvas(props) {
    _classCallCheck(this, Canvas);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Canvas).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.state = _CanvasStore2.default.getState();
    // this.state = {img:new Image(), tranparent:false}
    _this.loadImage = _this.loadImage.bind(_this);
    // this.setPixels = this.setPixels.bind(this);
    // this.changeImageAlpha = this.changeImageAlpha.bind(this);
    // this.resetCanvas = this.resetCanvas.bind(this);
    return _this;
  }

  _createClass(Canvas, [{
    key: 'onChange',
    value: function onChange() {
      this.setState(_CanvasStore2.default.getState());
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _CanvasStore2.default.listen(this.onChange);
      this.state.img.src = this.props.imgsrc;
      this.state.img.onload = this.loadImage;
      this.refs.canvas.getContext("2d").scale(0.4, 0.4);
    }

    // componentDidUpdate(prevProps, prevState){
    // this.refs.canvas.getContext("2d").clearRect(0,0,3200,1200);
    // this.refs.canvas.getContext("2d").scale(1,1);
    // this.state.img.src=this.props.imgsrc;
    //   CanvasActions.resetCanvas(this.refs.canvas)
    // }

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.refs.canvas.getContext("2d").clearRect(0, 0, 3200, 1200);
      this.refs.canvas.getContext("2d").scale(1, 1);
      this.state.img.src = nextProps.imgsrc;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _CanvasStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'loadImage',
    value: function loadImage() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var canvas = _this2.refs.canvas;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(_this2.state.img, 0, 0, _this2.state.img.width, _this2.state.img.height);
        resolve(canvas);
      });
    }

    // setPixels(){
    //   return new Promise((resolve, reject) => {
    //     var canvas = this.refs.canvas;
    //     var imgData = canvas.getContext("2d").getImageData(0,0,3200,1200)
    //     var pixels = imgData.data;
    //     for (var i=0; i<pixels.length; i+=4){
    //       if ((pixels[i]!=255) && (pixels[i]==pixels[i+1]) && (pixels[i+1]==pixels[i+2])) {
    //         pixels[i] = 240;
    //         pixels[i+1] = 240;
    //         pixels[i+2] = 240;
    //       }
    //     }
    //     resolve(imgData);
    //   });
    // }

    // updateCanvas(imgData){
    //   return new Promise((resolve, reject) => {
    //     var canvas = this.refs.canvas;
    //     var ctx = canvas.getContext("2d");
    //     ctx.putImageData(imgData, 0, 0)
    //     resolve(canvas);
    //   });
    // }

    // resetCanvas(){
    //   var ctx = this.refs.canvas.getContext("2d");
    //   ctx.drawImage(this.state.img, 0, 0, this.state.img.width, this.state.img.height);
    // }

    // changeImageAlpha(){
    //   if (this.state.tranparent)
    //     this.resetCanvas()
    //   else
    //     CanvasActions.setPixels(this.refs.canvas).then((imgData)=>{
    //       CanvasActions.updateCanvas(imgData, this.refs.canvas)
    //     })
    //     // this.setPixels(this.refs.canvas).then((imgData)=>{this.updateCanvas(imgData, this.refs.canvas)})
    //   this.state.tranparent = (!this.state.tranparent)
    // }

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('canvas', { id: 'mapCanvas', width: '1200', height: '400', ref: 'canvas' })
      );
    }
  }]);

  return Canvas;
}(_react2.default.Component);

exports.default = Canvas;

},{"../actions/CanvasActions":1,"../stores/CanvasStore":17,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClusterPickerStore = require('../stores/ClusterPickerStore');

var _ClusterPickerStore2 = _interopRequireDefault(_ClusterPickerStore);

var _ClusterPickerActions = require('../actions/ClusterPickerActions');

var _ClusterPickerActions2 = _interopRequireDefault(_ClusterPickerActions);

var _ImageViewerActions = require('../actions/ImageViewerActions');

var _ImageViewerActions2 = _interopRequireDefault(_ImageViewerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClusterPicker = function (_React$Component) {
  _inherits(ClusterPicker, _React$Component);

  function ClusterPicker(props) {
    _classCallCheck(this, ClusterPicker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClusterPicker).call(this, props));

    _this.state = _ClusterPickerStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ClusterPicker, [{
    key: 'onChange',
    value: function onChange() {
      this.setState(_ClusterPickerStore2.default.getState());
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _ClusterPickerStore2.default.listen(this.onChange);

      //Init dropdowns
      $("#clusterYearDropdown").dropdown();
      $("#clusterMonthDropdown").dropdown();
      $("#clusterNumDropdown").dropdown();
      $("#clusterVarDropdown").dropdown();
    }
  }, {
    key: 'ComponentWillUnmount',
    value: function ComponentWillUnmount() {
      _ClusterPickerStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      _ClusterPickerActions2.default.setDropdownText(event.target.text, event.target.className);
      _ImageViewerActions2.default.setClusterUrl();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      //Prepare years
      var years = [2006, 2007, 2008, 2009];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var fields = ["ps____", "ts____", "al_srf", "em_srf", "mu0___", "tlo3__", "ta____", "t_900_", "t_740_", "t_620_", "t_500_", "t_375_", "t_245_", "t_125_", "t_050_", "t_015_", "w900fl", "w740fl", "w620fl", "w500fl", "w375fl", "w245fl", "w125fl", "w050fl", "w015fl", "ntltyp", "cftp01", "cftp02", "cftp03", "cftp04", "cftp05", "cftp06", "cftp07", "cftp08", "cftp09", "cftp10", "cftp11", "cftp12", "cftp13", "cftp14", "cftp15"];

      var numOfClusters = [];
      for (var i = 1; i <= this.state.numOfClusters[this.state.clusterYear]; i++) {
        //TODO: CHANGE TO this.state.numOfClusters
        numOfClusters.push(i);
      }var yearsJSX = years.map(function (y) {
        return _react2.default.createElement(
          'li',
          { key: 'C' + y },
          _react2.default.createElement(
            'a',
            { className: 'clusterYearClass', href: '#!', onClick: _this2.handleClick },
            y
          )
        );
      });

      var monthsJSX = months.map(function (m) {
        return _react2.default.createElement(
          'li',
          { key: 'C' + m },
          _react2.default.createElement(
            'a',
            { className: 'clusterMonthClass', href: '#!', onClick: _this2.handleClick },
            m
          )
        );
      });

      var fieldsJSX = fields.map(function (f) {
        return _react2.default.createElement(
          'li',
          { key: 'C' + f },
          _react2.default.createElement(
            'a',
            { className: 'clusterFieldClass', href: '#!', onClick: _this2.handleClick },
            f
          )
        );
      });

      var numOfClustersJSX = numOfClusters.map(function (n) {
        return _react2.default.createElement(
          'li',
          { key: 'C' + n },
          _react2.default.createElement(
            'a',
            { className: 'clusterNumClass', href: '#!', onClick: _this2.handleClick },
            n
          )
        );
      });

      var monthCssClass = "dropdown-button btn spacy-dropdown";
      if (this.state.clusterCategory == "Yearly") monthCssClass += " disabled";

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col s3' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', href: '#!', 'data-activates': 'clusterCategoryDropdown' },
            this.state.clusterCategory
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s2' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', href: '#!', 'data-activates': 'clusterYearDropdown' },
            this.state.clusterYear
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s2' },
          _react2.default.createElement(
            'a',
            { className: monthCssClass, 'data-beloworigin': 'true', href: '#!', 'data-activates': 'clusterMonthDropdown' },
            this.state.clusterMonth
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s2' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', href: '#!', 'data-activates': 'clusterNumDropdown' },
            this.state.clusterNum
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s3' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', href: '#!', 'data-activates': 'clusterVarDropdown' },
            this.state.clusterVar
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-content', id: 'clusterCategoryDropdown' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'clusterCategoryClass', href: '#!', onClick: this.handleClick },
              'Yearly'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'clusterCategoryClass', href: '#!', onClick: this.handleClick },
              'Monthly'
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-content', id: 'clusterYearDropdown' },
          yearsJSX
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-content', id: 'clusterMonthDropdown' },
          monthsJSX
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-content', id: 'clusterNumDropdown' },
          numOfClustersJSX
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-content', id: 'clusterVarDropdown' },
          fieldsJSX
        )
      );
    }
  }]);

  return ClusterPicker;
}(_react2.default.Component);

exports.default = ClusterPicker;

},{"../actions/ClusterPickerActions":2,"../actions/ImageViewerActions":4,"../stores/ClusterPickerStore":18,"react":"react"}],10:[function(require,module,exports){
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

var _CanvasStore = require('../stores/CanvasStore');

var _CanvasStore2 = _interopRequireDefault(_CanvasStore);

var _CanvasActions = require('../actions/CanvasActions');

var _CanvasActions2 = _interopRequireDefault(_CanvasActions);

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
    _this.manipulateCanvas = _this.manipulateCanvas.bind(_this);
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
      $('#categoryDropdown').dropdown();
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
      console.log(fieldClass);

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
        case "categoryClass":
          field = "category";
          break;
      }

      _DataPickerActions2.default.setDropdownText(event.target.text, field);

      // Update image
      _ImageViewerActions2.default.setImageUrl();
    }
  }, {
    key: 'manipulateCanvas',
    value: function manipulateCanvas() {
      var canvasData = _CanvasStore2.default.getState();
      var canvas = document.getElementById("mapCanvas");

      if (canvasData.transparent) {
        _CanvasActions2.default.resetCanvas(canvas);
        _CanvasActions2.default.setTransparent(false);
      } else {
        _CanvasActions2.default.setPixels(canvas).then(function (imgData) {
          _CanvasActions2.default.updateCanvas(imgData, canvas);
        });
        _CanvasActions2.default.setTransparent(true);
      }

      // CanvasActions.setTransparent(!canvasData.tranparent)
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
          { className: 'col s1' },
          _react2.default.createElement(
            'a',
            { href: '#!', className: 'btn-floating waves-effect waves-dark red', onClick: this.manipulateCanvas, style: { marginTop: 65 + '%' } },
            _react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'album'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s3' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', 'data-alignment': 'right', href: '#', 'data-activates': 'categoryDropdown' },
            this.state.category
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s2' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown', 'data-beloworigin': 'true', 'data-alignment': 'right', href: '#', 'data-activates': 'yearDropdown' },
            this.state.year
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s3' },
          _react2.default.createElement(
            'a',
            { className: 'dropdown-button btn spacy-dropdown ' + (this.state.category == "Yearly" ? "disabled" : ""), 'data-beloworigin': 'true', 'data-alignment': 'right', href: '#', 'data-activates': 'monthDropdown' },
            this.state.month
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col s3' },
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
        ),
        _react2.default.createElement(
          'ul',
          { id: 'categoryDropdown', className: 'dropdown-content' },
          _react2.default.createElement(
            'li',
            { key: 'cat0' },
            _react2.default.createElement(
              'a',
              { className: 'categoryClass', href: '#!', onClick: this.handleClick },
              'Yearly'
            )
          ),
          _react2.default.createElement(
            'li',
            { key: 'cat1' },
            _react2.default.createElement(
              'a',
              { className: 'categoryClass', href: '#!', onClick: this.handleClick },
              'Monthly'
            )
          )
        )
      );
    }
  }]);

  return DataPicker;
}(_react2.default.Component);

exports.default = DataPicker;

},{"../actions/CanvasActions":1,"../actions/DataPickerActions":3,"../actions/ImageViewerActions":4,"../stores/CanvasStore":17,"../stores/DataPickerStore":19,"react":"react","react-dom":"react-dom"}],11:[function(require,module,exports){
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

},{"react":"react"}],12:[function(require,module,exports){
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

var _Canvas = require('./Canvas');

var _Canvas2 = _interopRequireDefault(_Canvas);

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
    _this.imageErrorHandler = _this.imageErrorHandler.bind(_this);
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
    key: 'imageErrorHandler',
    value: function imageErrorHandler() {
      $('.clusterImage').attr('src', "static/no_data.png");
    }
  }, {
    key: 'render',
    value: function render() {
      var url;
      var cssClass;
      switch (this.props.imgTarget) {
        case "map":
          url = this.state.imageUrl;
          cssClass = "mapImage";
          break;
        case "variable":
          url = this.state.varUrl;
          cssClass = "varImage";
          break;
        case "cluster":
          url = this.state.clusterUrl;
          cssClass = "clusterImage";
          break;
      }
      if (this.props.imgTarget == 'map') {
        return _react2.default.createElement(
          'div',
          { className: 'imgDiv' },
          _react2.default.createElement(_Canvas2.default, { imgsrc: url })
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'imgDiv' },
          _react2.default.createElement('img', { className: cssClass, src: url, onError: this.imageErrorHandler })
        );
      }
    }
  }]);

  return ImageViewer;
}(_react2.default.Component);

exports.default = ImageViewer;

},{"../actions/ImageViewerActions":4,"../stores/ImageViewerStore":20,"./Canvas":8,"react":"react"}],13:[function(require,module,exports){
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
            "In the top part of the app we can see the clustered data. To see a specific cluster, you must choose the category (yearly or monthly), year, month and cluster in the appropriate dropdown lists. ",
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
            _react2.default.createElement("br", null)
          ),
          _react2.default.createElement(
            "p",
            null,
            "When a clusters consists from a small number of points, sometimes it is hard to motice them on the mpa. To make this process easiers, you can click the red button next to the dropdown boxes. It will make the map almost completly transparent and will make the points more visible. Clicking on this button again will return the map to its original state."
          ),
          _react2.default.createElement(
            "h5",
            null,
            "Clusters Distribution"
          ),
          _react2.default.createElement(
            "p",
            null,
            "On the middle section of the app we can explore we can explore variables 1-41 from the ISCCP dataset (see ",
            _react2.default.createElement(
              "a",
              { href: "http://isccp.giss.nasa.gov/outgoing/FLUX/INP/read_i2_FD_inp.f", target: "_blank" },
              "reference"
            ),
            "). The mean and standard deviation of each varible is specified in the header. ",
            _react2.default.createElement("br", null),
            "When explorint the clusters there are two options:"
          ),
          _react2.default.createElement(
            "ol",
            null,
            _react2.default.createElement(
              "li",
              null,
              " By choosing monthly category, it is possible to explore each cluster variables according to the chosen month, year, variable name and cluster number."
            ),
            _react2.default.createElement(
              "li",
              null,
              " By choosing yearly category, it is possible to explore each cluster variables according to the chose year, variable name and cluster number."
            )
          ),
          _react2.default.createElement(
            "p",
            null,
            "Please note that some clusters does not appear in some months. In this case, an image with ",
            _react2.default.createElement(
              "striong",
              null,
              "No Data"
            ),
            " caption will be shown."
          ),
          _react2.default.createElement(
            "h5",
            null,
            "Variables Distribution"
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
              "By choosing monthly category, it is possible to explore the variables by spceifying month, year and variable name"
            ),
            _react2.default.createElement(
              "li",
              null,
              "By choosing yearly category, it is possible to explore the variables by specifying year and variable name. As the name implies, the data for each variable is for the whole year."
            )
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

},{"react":"react"}],14:[function(require,module,exports){
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

},{"react":"react"}],15:[function(require,module,exports){
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

},{"../actions/ImageViewerActions":4,"../actions/VariablePickerActions":5,"../stores/VariablePickerStore":21,"react":"react"}],16:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

},{"./components/App":7,"react":"react","react-dom":"react-dom"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _altApplication = require('../alt-application');

var _altApplication2 = _interopRequireDefault(_altApplication);

var _CanvasActions = require('../actions/CanvasActions');

var _CanvasActions2 = _interopRequireDefault(_CanvasActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasStore = function () {
  function CanvasStore() {
    _classCallCheck(this, CanvasStore);

    this.bindActions(_CanvasActions2.default);
    this.transparent = false;
    this.img = new Image();
  }

  _createClass(CanvasStore, [{
    key: 'onClearCanvas',
    value: function onClearCanvas(canvas) {
      var ctx = canvas.getContext("2d");
      ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height);
      return true;
    }
  }, {
    key: 'onSetCanvasTransparency',
    value: function onSetCanvasTransparency(trans) {
      this.transparent = trans;
    }
  }]);

  return CanvasStore;
}();

exports.default = _altApplication2.default.createStore(CanvasStore);

},{"../actions/CanvasActions":1,"../alt-application":6}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _altApplication = require('../alt-application');

var _altApplication2 = _interopRequireDefault(_altApplication);

var _ClusterPickerActions = require('../actions/ClusterPickerActions');

var _ClusterPickerActions2 = _interopRequireDefault(_ClusterPickerActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClusterPickerStore = function () {
  function ClusterPickerStore() {
    _classCallCheck(this, ClusterPickerStore);

    this.bindActions(_ClusterPickerActions2.default);
    this.clusterCategory = "Monthly"; //"Category"
    this.clusterYear = "2006"; //"Year";
    this.clusterMonth = "January"; //"Month";
    this.clusterNum = "0"; //"Cluster"
    this.clusterVar = "ps____"; //"Variable"
    this.fullSelection = false;
    this.numOfClusters = { "2009": 42, "2008": 47, "2007": 50, "2006": 37, "Year": 0 };
  }

  _createClass(ClusterPickerStore, [{
    key: 'onUpdateDropdownText',
    value: function onUpdateDropdownText(payload) {
      var text = payload.text;
      var field = payload.field;

      switch (field) {
        case "clusterYearClass":
          this.clusterYear = text;
          break;
        case "clusterCategoryClass":
          this.clusterCategory = text;
          break;
        case "clusterMonthClass":
          this.clusterMonth = text;
          break;
        case "clusterNumClass":
          this.clusterNum = text;
          break;
        case "clusterFieldClass":
          this.clusterVar = text;
          break;
      }

      if (this.clusterYear != "Year" && this.clusterNum != "Number" && this.clusterVar != "Variable") {
        if (this.clusterCategory == "Yearly") this.fullSelection = true;else if (this.clusterCategory == "Monthly") if (this.clusterMonth != "Month") this.fullSelection = true;else this.fullSelection = false;
      }
    }
  }]);

  return ClusterPickerStore;
}();

exports.default = _altApplication2.default.createStore(ClusterPickerStore);

},{"../actions/ClusterPickerActions":2,"../alt-application":6}],19:[function(require,module,exports){
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
    this.year = "2006"; //"Year";
    this.month = "January"; //"Month";
    this.cluster = "0"; //;"Cluster";
    this.category = "Monthly"; //"Category"
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
        case "category":
          this.category = data.text;
          break;
      }

      if (this.category == "Yearly" && this.year != "Year" && this.cluster != "Cluster") {
        this.fullSelection = true;
      } else if (this.category == "Monthly" && this.year != "Year" && this.cluster != "Cluster" && this.month != "Month") {
        this.fullSelection = true;
      } else this.fullSelection = false;
    }
  }]);

  return DataPickerStore;
}();

exports.default = _altApplication2.default.createStore(DataPickerStore);

},{"../actions/DataPickerActions":3,"../alt-application":6}],20:[function(require,module,exports){
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

var _ClusterPickerStore = require('../stores/ClusterPickerStore');

var _ClusterPickerStore2 = _interopRequireDefault(_ClusterPickerStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageViewerStore = function () {
  function ImageViewerStore() {
    _classCallCheck(this, ImageViewerStore);

    this.bindActions(_ImageViewerActions2.default);
    this.imageUrl = "static/2006/1_January/maps/January_2006_C0.png";
    this.varUrl = "static/2006/vars/ps____.png";
    this.clusterUrl = "static/2006/clusters/0/ps____.png";
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

        if (data.category == "Monthly") {
          if (data.cluster == "Full") {
            url = 'static/' + data.year + '/' + months[data.month] + '_' + data.month + '/maps/' + data.month + '_' + data.year + '.png';
          } else {
            url = 'static/' + data.year + '/' + months[data.month] + '_' + data.month + '/maps/' + data.month + '_' + data.year + '_C' + data.cluster + '.png';
          }
        } else {
          url = 'static/' + data.year + '/maps/' + data.year + '_C' + data.cluster + '.png';
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
  }, {
    key: 'onUpdateClusterUrl',
    value: function onUpdateClusterUrl() {
      this.waitFor(_ClusterPickerStore2.default.dispatchToken);

      var months = { January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7,
        August: 8, September: 9, October: 10, November: 11, December: 12 };

      var clusterData = _ClusterPickerStore2.default.getState();
      if (clusterData.fullSelection) {

        var year = clusterData.clusterYear;
        var clusterNum = clusterData.clusterNum;
        var clusterVar = clusterData.clusterVar;
        var clusterMonth = clusterData.clusterMonth;

        if (clusterData.clusterCategory == "Yearly") this.clusterUrl = 'static/' + year + '/clusters/' + clusterNum + '/' + clusterVar + '.png';else this.clusterUrl = 'static/' + year + '/' + months[clusterMonth] + '_' + clusterMonth + '/clusters/' + clusterNum + '/' + clusterVar + '.png';
      }
    }
  }]);

  return ImageViewerStore;
}();

exports.default = _altApplication2.default.createStore(ImageViewerStore);

},{"../actions/ImageViewerActions":4,"../alt-application":6,"../stores/ClusterPickerStore":18,"../stores/DataPickerStore":19,"../stores/VariablePickerStore":21}],21:[function(require,module,exports){
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
    this.selectedVar = "ps____"; //"Name"
    this.varCategory = "Monthly"; //"Category"
    this.varYear = "2006"; //"Year"
    this.varMonth = "January"; //"Month"
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

},{"../actions/VariablePickerActions":5,"../alt-application":6}]},{},[16])


//# sourceMappingURL=bundle.js.map

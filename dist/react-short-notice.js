(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.index = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ShortNoticeController = exports.ShortNoticeContainer = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ShortNoticeContainer = exports.ShortNoticeContainer = function (_Component) {
    _inherits(ShortNoticeContainer, _Component);

    function ShortNoticeContainer(props) {
      _classCallCheck(this, ShortNoticeContainer);

      var _this = _possibleConstructorReturn(this, (ShortNoticeContainer.__proto__ || Object.getPrototypeOf(ShortNoticeContainer)).call(this, props));

      _this.state = {
        isShow: false,
        id: _this.props.id ? _this.props.id : 'empty'
      };

      _this.timer = null;
      _this.onListener = _this.onListener.bind(_this);
      _this.show = _this.show.bind(_this);
      _this.hide = _this.hide.bind(_this);
      _this.allHide = _this.allHide.bind(_this);
      _this.clearTimer = _this.clearTimer.bind(_this);
      return _this;
    }

    _createClass(ShortNoticeContainer, [{
      key: 'onListener',
      value: function onListener(e) {
        var type = e.detail.type;


        switch (type) {
          case 'show':
            this.show(e.detail.payload);
            break;
          case 'hide':
            this.hide(e.detail.payload);
            break;
          case 'allHide':
            this.allHide();
            break;
          default:
            break;
        }
      }
    }, {
      key: 'clearTimer',
      value: function clearTimer() {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
      }
    }, {
      key: 'show',
      value: function show(payload) {
        var _this2 = this;

        var id = this.state.id;
        var timeout = this.props.timeout;

        if (id === payload.id) {
          this.setState({
            isShow: true
          }, function () {
            if (timeout) {
              _this2.clearTimer();
              _this2.timer = setTimeout(function () {
                _this2.setState({
                  isShow: false
                });
              }, timeout * 1);
            }
          });
        }
      }
    }, {
      key: 'hide',
      value: function hide(payload) {
        var id = this.state.id;

        if (id === payload.id) {
          this.clearTimer();
          this.setState({
            isShow: false
          });
        }
      }
    }, {
      key: 'allHide',
      value: function allHide() {
        var isShow = this.state.isShow;

        if (isShow === true) {
          this.clearTimer();
          this.setState({
            isShow: false
          });
        }
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        window.addEventListener('short-notice', this.onListener, false);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        window.removeEventListener('short-notice', this.onListener, false);
      }
    }, {
      key: 'render',
      value: function render() {
        var isShow = this.state.isShow;
        var transition = this.props.transition;

        if (transition) {
          return _react2.default.createElement(
            'div',
            { style: { transition: 'all ' + transition, opacity: isShow ? 1 : 0 } },
            this.props.children
          );
        } else {
          return isShow ? this.props.children : null;
        }
      }
    }]);

    return ShortNoticeContainer;
  }(_react.Component);

  var ShortNoticeController = exports.ShortNoticeController = function () {
    function ShortNoticeController() {
      _classCallCheck(this, ShortNoticeController);
    }

    _createClass(ShortNoticeController, null, [{
      key: 'show',
      value: function show(id) {
        var event = new CustomEvent('short-notice', {
          detail: {
            type: 'show',
            payload: {
              id: id
            }
          }
        });
        window.dispatchEvent(event);
      }
    }, {
      key: 'hide',
      value: function hide(id) {
        var event = new CustomEvent('short-notice', {
          detail: {
            type: 'hide',
            payload: {
              id: id
            }
          }
        });
        window.dispatchEvent(event);
      }
    }, {
      key: 'allHide',
      value: function allHide() {
        var event = new CustomEvent('short-notice', {
          detail: {
            type: 'allHide',
            payload: {}
          }
        });
        window.dispatchEvent(event);
      }
    }]);

    return ShortNoticeController;
  }();

  exports.default = { ShortNoticeContainer: ShortNoticeContainer, ShortNoticeController: ShortNoticeController };
});

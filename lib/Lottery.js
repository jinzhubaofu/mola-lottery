/*! 2016 Baidu Inc. All Rights Reserved */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mola"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["mola", "react"], factory);
	else if(typeof exports === 'object')
		exports["mola-lottery"] = factory(require("mola"), require("react"));
	else
		root["mola-lottery"] = factory(root["mola"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {;(function(module, window, undefined) {
	    "use strict";

	    var script,
	        done,
	        timer,
	        counter = 0;

	    /**
	     * Generates unique callback name.
	     *
	     * @param {String} name
	     * @returns {string}
	     */
	    function getUniqueCallbackName(name) {
	        return name + '_json' + (++counter);
	    }

	    /**
	     * Setups full URL with all parameters.
	     *
	     * @param {String} baseUrl
	     * @param {Object} params
	     * @param {String} callbackName
	     * @param {String} callbackUnique
	     * @returns {String}
	     */
	    function getQuery(baseUrl, params, callbackName, callbackUnique) {
	        var query = (baseUrl || '').indexOf('?') === -1 ? '?' : '&';

	        params = params || {};

	        for (var key in params) {
	            if (params.hasOwnProperty(key)) {
	                query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
	            }
	        }

	        return baseUrl + query + callbackName + '=' + callbackUnique;
	    }

	    /**
	     * Performs actual request.
	     *
	     * @param {String} url
	     * @param {Function} errorCallback
	     */
	    function load(url, errorCallback) {
	        script = document.createElement('script');
	        script.src = url;
	        script.async = true;

	        var errorHandler = errorCallback || config.error;

	        if (typeof errorHandler === 'function') {
	            script.onerror = errorHandler;
	        }

	        script.onload = script.onreadystatechange = function() {
	            if ( !done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
	                done = true;
	                script.onload = script.onreadystatechange = null;

	                if (script && script.parentNode) {
	                    script.parentNode.removeChild(script);
	                }
	            }
	        };

	        document.getElementsByTagName('head')[0].appendChild(script);
	    }

	    module.exports = function(url, params, options){
	        "use strict";

	        options = options || {};
	        options.timeout = options.timeout || 15000;

	        var callbackName = options.callback || 'callback',
	            callback = getUniqueCallbackName(callbackName);

	        return new Promise(function(resolve, reject) {
	            if (options.timeout) {
	                timer = setTimeout(function() {
	                    reject(new Error('JSONP request timed out.'));
	                }, options.timeout);
	            }

	            window[callback] = function(data){
	                try {
	                    delete window[callback];
	                } catch (e) {}

	                window[callback] = null;

	                clearTimeout(timer);

	                resolve(data);
	            };

	            var query = getQuery(url, params, callbackName, callback),
	                error = function() { reject(new Error('Script loading error.')) };

	            load(query, error);
	        });
	    };
	})(module, window);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6), __webpack_require__(1), __webpack_require__(2), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require('react'), require('mola'), require('jsonp-es6'), require('./constants'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.react, global.mola, global.jsonpEs6, global.constants);
	        global.Lottery = mod.exports;
	    }
	})(this, function (exports, _react, _mola, _jsonpEs, _constants) {
	    'use strict';

	    exports.__esModule = true;

	    var _react2 = _interopRequireDefault(_react);

	    var _jsonpEs2 = _interopRequireDefault(_jsonpEs);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    var _extends = Object.assign || function (target) {
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

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

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

	    function guid() {
	        return (+(Math.random() + '').substr(2, 8)).toString(36);
	    }

	    function firstLetterToUpperCase(str) {
	        return '' + str[0].toUpperCase() + str.slice(1);
	    }

	    var prefix = function () {

	        var prefixes = ['Webkit', 'Moz', 'ms', 'O'];

	        return function (styles) {

	            if (!styles) {
	                return styles;
	            }

	            var result = Object.keys(styles).reduce(function (nextStyles, key) {
	                return prefixes.reduce(function (nextStyles, prefix) {
	                    nextStyles['' + prefix + firstLetterToUpperCase(key)] = styles[key];
	                    return nextStyles;
	                }, nextStyles);
	            }, {});

	            return result;
	        };
	    }();

	    var Lottery = function (_Component) {
	        _inherits(Lottery, _Component);

	        function Lottery() {
	            _classCallCheck(this, Lottery);

	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

	            _this.draw = _this.draw.bind(_this);
	            _this.closeDialog = _this.closeDialog.bind(_this);

	            _this.state = {
	                status: 'stopped',
	                rotate: 0
	            };

	            return _this;
	        }

	        Lottery.prototype.componentWillUnmount = function componentWillUnmount() {
	            if (this.timer) {
	                clearTimeout(this.timer);
	                this.timer = null;
	            }
	            this.token = null;
	        };

	        Lottery.prototype.startRotating = function startRotating() {
	            var _this2 = this;

	            var rotateDegree = +this.props.rotateDegree;

	            return new Promise(function (resolve) {

	                _this2.setState({
	                    status: 'drawing',
	                    rotate: rotateDegree + _this2.state.rotate
	                });

	                _this2.timer = setTimeout(function () {
	                    _this2.timer = null;
	                    resolve();
	                }, 3000);
	            });
	        };

	        Lottery.prototype.stopRotating = function stopRotating(rotate) {
	            var _this3 = this;

	            return new Promise(function (resolve, reject) {

	                _this3.setState({
	                    status: 'stopping',
	                    rotate: +_this3.props.rotateDegree + Math.floor(_this3.state.rotate / 360) * 360 + rotate
	                });

	                _this3.timer = setTimeout(function () {
	                    _this3.timer = null;
	                    _this3.setState({
	                        status: 'stopped',
	                        rotate: rotate
	                    });
	                    resolve();
	                }, 4000);
	            });
	        };

	        Lottery.prototype.getRotate = function getRotate(index, total) {

	            if (index === 404) {
	                return 0;
	            }

	            var prizeRotate = 360 / total;
	            var begin = prizeRotate / 2;

	            return index * prizeRotate + begin;
	        };

	        Lottery.prototype.draw = function draw() {
	            var _this4 = this;

	            // 正在转的，不给再转
	            if (this.state.status !== 'stopped') {
	                return;
	            }

	            var _props = this.props,
	                datasource = _props.datasource,
	                prizeAmount = _props.prizeAmount;


	            // 数据请求：这个 promise 不会 reject
	            var promise = (0, _jsonpEs2['default'])(datasource, {}, { timeout: 1600 })['catch'](function (error) {
	                return {
	                    status: error.status || 500,
	                    statusInfo: error.statusInfo || '服务繁忙，请稍候再试'
	                };
	            });

	            // 请求 token
	            var token = this.token = guid();

	            // 数据请求的同时把转盘转起来！我把转盘转上五环！
	            Promise.all([promise, this.startRotating()])

	            // 数据请求结束了，转盘也转够圈了，我们把转盘停下来
	            .then(function (_ref) {
	                var data = _ref[0];


	                if (_this4.token !== token) {
	                    return;
	                }

	                var rotate = _this4.getRotate(data && data.status === 0 ? data.info.prize.id : 404, prizeAmount);

	                return _this4.
	                // 这里我们最终是需要 API 的返回数据的
	                stopRotating(rotate)
	                // 转完了来个弹窗提示
	                .then(function () {
	                    _this4.setState({
	                        prize: data
	                    });
	                });
	            });
	        };

	        Lottery.prototype.getGiftStyle = function getGiftStyle(status, rotate) {

	            switch (status) {
	                case 'drawing':
	                    return {
	                        transition: 'transform 3s ease-in',
	                        transform: 'rotate(' + rotate + 'deg)'
	                    };
	                case 'stopping':
	                    return {
	                        transition: 'transform 3s ease-out',
	                        transform: 'rotate(' + rotate + 'deg)'
	                    };
	                case 'stopped':
	                    return {
	                        transform: 'rotate(' + rotate + 'deg)'
	                    };
	                default:
	                    return {};
	            }
	        };

	        Lottery.prototype.closeDialog = function closeDialog() {
	            this.setState({ prize: null });
	        };

	        Lottery.prototype.renderDialog = function renderDialog(prize) {

	            if (!prize) {
	                return null;
	            }

	            var errorImage = this.props.errorImage;

	            var status = prize.status,
	                info = prize.info;


	            var backgroundImage = void 0;

	            var buttons = [_react2['default'].createElement('div', {
	                key: 'again',
	                className: 'mola-lottery-dialog-button-again',
	                onClick: this.closeDialog })];

	            if (status === 0) {
	                var _info$prize = info.prize,
	                    _info$prize$dialogImg = _info$prize.dialogImg,
	                    dialogImg = _info$prize$dialogImg === undefined ? errorImage : _info$prize$dialogImg,
	                    url = _info$prize.url,
	                    _type = _info$prize.type;


	                if (_type !== 'default' && url) {
	                    buttons.push(_react2['default'].createElement('a', {
	                        key: 'checkout',
	                        href: url,
	                        className: 'mola-lottery-dialog-button-checkout' }));
	                }

	                backgroundImage = dialogImg;
	            } else {
	                backgroundImage = errorImage;
	            }

	            return _react2['default'].createElement(
	                'div',
	                { className: 'mola-lottery-pop-window' },
	                _react2['default'].createElement(
	                    'div',
	                    {
	                        className: 'mola-lottery-dialog',
	                        style: {
	                            backgroundImage: 'url(' + backgroundImage + ')'
	                        } },
	                    _react2['default'].createElement('div', {
	                        className: 'mola-lottery-dialog-close',
	                        onClick: this.closeDialog }),
	                    _react2['default'].createElement(
	                        'footer',
	                        { className: 'mola-lottery-dialog-footer' },
	                        buttons
	                    )
	                )
	            );
	        };

	        Lottery.prototype.render = function render() {
	            var _props2 = this.props,
	                frameImage = _props2.frameImage,
	                prizesImage = _props2.prizesImage,
	                prizesImageScale = _props2.prizesImageScale,
	                _props2$style = _props2.style,
	                style = _props2$style === undefined ? null : _props2$style;
	            var _state = this.state,
	                status = _state.status,
	                rotate = _state.rotate,
	                prize = _state.prize;


	            return _react2['default'].createElement(
	                'div',
	                { className: 'mola-lottery', style: style },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'mola-lottery-frame' },
	                    _react2['default'].createElement('img', {
	                        src: frameImage,
	                        className: 'mola-lottery-frame-img' }),
	                    _react2['default'].createElement('div', {
	                        className: 'mola-lottery-prizes',
	                        style: _extends({
	                            backgroundImage: 'url(' + prizesImage + ')',
	                            backgroundSize: prizesImageScale + '%'
	                        }, prefix(this.getGiftStyle(status, rotate))) }),
	                    _react2['default'].createElement('div', { className: 'mola-lottery-play', onClick: this.draw })
	                ),
	                this.renderDialog(prize)
	            );
	        };

	        return Lottery;
	    }(_react.Component);

	    Lottery.displayName = 'Lottery';

	    Lottery.propTypes = {

	        // 框图片
	        frameImage: _react.PropTypes.string.isRequired,

	        // 奖品转盘图片
	        prizesImage: _react.PropTypes.string.isRequired,

	        // 奖品转盘图片缩放比例
	        prizesImageScale: _react.PropTypes.string.isRequired,

	        // 奖品种类数量
	        prizeAmount: _react.PropTypes.string.isRequired,

	        // 数据源配置
	        datasource: _react.PropTypes.string.isRequired,

	        // 出错提示框背景图片
	        errorImage: _react.PropTypes.string.isRequired,

	        // top: PropTypes.string.isRequired,

	        // rotate degree
	        rotateDegree: _react.PropTypes.string.isRequired

	    };

	    Lottery.defaultProps = {
	        prizesImageScale: '62.5',
	        errorImage: 'http://boscdn.bpc.baidu.com/mms-res/voicefe/activity/captain/react/404card.jpg',
	        rotateDegree: '1800'
	    };

	    exports['default'] = (0, _mola.registerComponent)(_constants.type, _constants.level)(Lottery);
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('mola'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.mola);
	    global.constants = mod.exports;
	  }
	})(this, function (exports, _mola) {
	  'use strict';

	  exports.__esModule = true;
	  exports.level = exports.type = undefined;
	  var type = exports.type = 'lottery'; /**
	                                        * @file constants
	                                        * @author leon <ludafa@outlook.com>
	                                        */

	  var level = exports.level = _mola.MOLA_COMPONENT_LEVEL_CONTAINER;
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }
/******/ ])
});
;
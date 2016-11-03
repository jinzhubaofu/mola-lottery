(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'inline-style-prefixer', 'mola', 'jsonp-es6', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('inline-style-prefixer'), require('mola'), require('jsonp-es6'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.inlineStylePrefixer, global.mola, global.jsonpEs6, global.babelHelpers);
        global.Lottery = mod.exports;
    }
})(this, function (exports, _react, _inlineStylePrefixer, _mola, _jsonpEs, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.level = exports.type = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _inlineStylePrefixer2 = babelHelpers.interopRequireDefault(_inlineStylePrefixer);

    var _jsonpEs2 = babelHelpers.interopRequireDefault(_jsonpEs);

    /**
     * @file Lottery
     * @author ludafa<ludafa@outlook.com>
     */

    var type = exports.type = 'Lottery';
    var level = exports.level = _mola.MOLA_COMPONENT_LEVEL_CONTAINER;

    var ROTATE_BASE_DEG = 1800;
    var ERROR_IMAGE = 'http://boscdn.bpc.baidu.com/mms-res/voicefe/activity/captain/react/404card.jpg';

    var prefixer = new _inlineStylePrefixer2['default']({
        userAgent: navigator.userAgent
    });

    var guid = 1;

    var Lottery = function (_Component) {
        babelHelpers.inherits(Lottery, _Component);

        function Lottery() {
            babelHelpers.classCallCheck(this, Lottery);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

            _this.draw = _this.draw.bind(_this);

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

            return new Promise(function (resolve) {

                _this2.setState({
                    status: 'drawing',
                    rotate: _this2.state.rotate + ROTATE_BASE_DEG
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
                    rotate: ROTATE_BASE_DEG + Math.floor(_this3.state.rotate / 360) * 360 + rotate
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
            var token = this.token = guid++;

            // 数据请求的同时把转盘转起来！我把转盘转上五环！
            Promise.all([promise, this.startRotating()])

            // 数据请求结束了，转盘也转够圈了，我们把转盘停下来
            .then(function (_ref) {
                var data = _ref[0];


                if (_this4.token !== token) {
                    return;
                }

                var rotate = _this4.getRotate(data && data.status === 0 ? data.info.prize.id : 404, prizeAmount);

                // 这里我们最终是需要 API 的返回数据的
                return _this4.stopRotating(rotate)
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

        Lottery.prototype.renderDialog = function renderDialog(prize) {
            var _this5 = this;

            if (!prize) {
                return null;
            }

            var status = prize.status,
                info = prize.info;


            var backgroundImage = ERROR_IMAGE;

            var buttons = [_react2['default'].createElement('div', {
                key: 'again',
                className: 'mola-lottery-dialog-button-again',
                onClick: function onClick() {
                    _this5.setState({
                        prize: null
                    });
                } })];

            if (status === 0) {
                var image = info.image,
                    url = info.url,
                    _type = info.type;


                if (_type !== 'default' && url) {
                    buttons.push(_react2['default'].createElement('a', {
                        key: 'checkout',
                        href: url,
                        className: 'mola-lottery-dialog-button-checkout' }));
                }

                backgroundImage = image || backgroundImage;
            }

            return _react2['default'].createElement(
                'div',
                { className: 'mola-lottery-pop-window' },
                _react2['default'].createElement(
                    'div',
                    {
                        className: 'mola-lottery-dialog',
                        style: { backgroundImage: 'url(' + backgroundImage + ')' } },
                    _react2['default'].createElement('div', {
                        className: 'mola-lottery-dialog-close',
                        onClick: this.dialogClose }),
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
                prizesImageScale = _props2.prizesImageScale;
            var _state = this.state,
                status = _state.status,
                rotate = _state.rotate,
                prize = _state.prize;


            var style = prefixer.prefix(this.getGiftStyle(status, rotate));

            return _react2['default'].createElement(
                'div',
                { className: 'mola-lottery' },
                _react2['default'].createElement(
                    'div',
                    { className: 'mola-lottery-frame' },
                    _react2['default'].createElement('img', {
                        src: frameImage,
                        className: 'mola-lottery-frame-img' }),
                    _react2['default'].createElement('div', {
                        className: 'mola-lottery-prizes',
                        style: babelHelpers['extends']({
                            backgroundImage: 'url(' + prizesImage + ')',
                            backgroundSize: prizesImageScale * 100 + '%'
                        }, style) }),
                    _react2['default'].createElement('div', { className: 'mola-lottery-play', onClick: this.draw })
                ),
                this.renderDialog(prize)
            );
        };

        return Lottery;
    }(_react.Component);

    Lottery.displayName = 'Lottery';

    Lottery.defaultProps = {
        prizesImageScale: 0.625
    };

    Lottery.propTypes = {

        // 框图片
        frameImage: _react.PropTypes.string.isRequired,

        // 奖品转盘图片
        prizesImage: _react.PropTypes.string.isRequired,

        // 奖品转盘图片缩放比例
        prizesImageScale: _react.PropTypes.number.isRequired,

        // 奖品种类数量
        prizeAmount: _react.PropTypes.number.isRequired,

        // 数据源配置
        datasource: _react.PropTypes.string.isRequired

    };

    exports['default'] = (0, _mola.registerComponent)(type, level)(Lottery);
});
//# sourceMappingURL=Lottery.js.map

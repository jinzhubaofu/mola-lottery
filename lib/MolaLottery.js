(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'melon-core/classname/cxBuilder', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('melon-core/classname/cxBuilder'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.cxBuilder, global.babelHelpers);
        global.MolaLottery = mod.exports;
    }
})(this, function (exports, _react, _cxBuilder, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    /**
     * @file MolaLottery
     * @author ludafa<ludafa@outlook.com>
     */

    var cx = (0, _cxBuilder.create)('MolaLottery');

    /**
     * melon 选色器
     */

    var MolaLottery = function (_Component) {
        babelHelpers.inherits(MolaLottery, _Component);

        function MolaLottery(props, context) {
            babelHelpers.classCallCheck(this, MolaLottery);

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props, context));

            _this.state = babelHelpers['extends']({}, _this.state);

            return _this;
        }

        /**
         * 渲染
         *
         * @public
         * @return {React.Element}
         */


        MolaLottery.prototype.render = function render() {
            return _react2['default'].createElement('div', { className: cx(this.props).build() });
        };

        return MolaLottery;
    }(_react.Component);

    exports['default'] = MolaLottery;


    MolaLottery.displayName = 'MolaLottery';

    MolaLottery.defaultProps = {};

    MolaLottery.propTypes = {};
});
//# sourceMappingURL=MolaLottery.js.map

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './constants'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./constants'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constants);
        global.LotterySchema = mod.exports;
    }
})(this, function (exports, _constants) {
    'use strict';

    exports.__esModule = true;
    Object.defineProperty(exports, 'level', {
        enumerable: true,
        get: function () {
            return _constants.level;
        }
    });
    Object.defineProperty(exports, 'type', {
        enumerable: true,
        get: function () {
            return _constants.type;
        }
    });
    var editorProps = exports.editorProps = {
        droppable: false,
        resizable: 'none',
        movable: false,
        selectable: true,
        style: {
            width: '375px'
        }
    };

    exports['default'] = {
        type: 'object',
        properties: {
            frameImage: {
                title: '框背景图片',
                type: 'string',
                format: 'uri',
                'default': 'http://gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/static/asset/activity/supergirl/turnTable/img/kuangs1.5c709d00.png'
            },
            prizesImage: {
                title: '奖品图片',
                type: 'string',
                format: 'uri',
                'default': 'http://gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/static/asset/activity/supergirl/turnTable/img/gifts.95173542.png'
            },
            prizesImageScale: {
                title: '奖品图片缩放比例',
                type: 'string',
                format: 'numeric',
                formatMinimum: '1',
                formatMaximum: '100',
                'default': '62.5'
            },
            prizeAmount: {
                title: '奖品数',
                type: 'string',
                format: 'numeric',
                formatMinimum: '4',
                formatMaximum: '12',
                'default': '8'
            },
            datasource: {
                title: '数据源',
                type: 'string',
                meta: {
                    type: 'captain/activity-service/lottery'
                }
            },
            errorImage: {
                title: '出错时弹框背景图片',
                type: 'string',
                format: 'uri',
                'default': 'http://boscdn.bpc.baidu.com/mms-res/voicefe/activity/captain/react/404card.jpg'
            },
            rotateDegree: {
                title: '抽奖时旋转角度',
                type: 'string',
                format: 'numeric',
                'default': '1800'
            }
        },
        required: ['frameImage', 'prizesImage', 'prizeAmount', 'datasource']
    };
});
//# sourceMappingURL=Lottery.schema.js.map

/**
 * @file schema
 * @author leon <ludafa@outlook.com>
 */

export {level, type} from './constants';

export const editorProps = {
    droppable: false,
    resizable: 'none',
    movable: false,
    selectable: true,
    style: {
        width: '375px'
    }
};

export default {
    type: 'object',
    properties: {
        frameImage: {
            'title': '框背景图片',
            'type': 'string',
            'format': 'uri',
            'default': 'http://gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/static/asset/activity/supergirl/turnTable/img/kuangs1.5c709d00.png'
        },
        prizesImage: {
            'title': '奖品图片',
            'type': 'string',
            'format': 'uri',
            'default': 'http://gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/static/asset/activity/supergirl/turnTable/img/gifts.95173542.png'
        },
        prizesImageScale: {
            'title': '奖品图片缩放比例',
            'type': 'string',
            'format': 'numeric',
            'formatMinimum': '1',
            'formatMaximum': '100',
            'default': '62.5'
        },
        prizeAmount: {
            'title': '奖品数',
            'type': 'string',
            'format': 'numeric',
            'formatMinimum': '4',
            'formatMaximum': '12',
            'default': '8'
        },

        // 这里的数据源，只保存一个数据服务的 id;
        // 存了 name 是为了在配置端更容易做展现
        // 在组件中的 datasource 应该是一个 string，也就是数据服务的地址
        // 具体的数据源多环境配置是在 数据服务配置 中的；
        // 在取用 数据服务配置 时，server 会按照当前的环境，给出正确唯一的 endpoint
        datasource: {
            title: '数据源',
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    minimum: 0
                },
                name: {
                    type: 'string'
                }
            },
            required: ['id', 'name'],
            media: {
                type: 'captain/activity-service/lottery'
            }
        },
        errorImage: {
            'title': '出错时弹框背景图片',
            'type': 'string',
            'format': 'uri',
            'default': 'http://boscdn.bpc.baidu.com/mms-res/voicefe/activity/captain/react/404card.jpg'
        },
        rotateDegree: {
            'title': '抽奖时旋转角度',
            'type': 'string',
            'format': 'numeric',
            'default': '1800'
        }
    },
    required: [
        'frameImage',
        'prizesImage',
        'prizeAmount',
        'datasource'
    ]
};

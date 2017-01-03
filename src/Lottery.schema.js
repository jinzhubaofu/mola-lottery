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
            title: '框背景图片',
            type: 'string',
            format: 'uri',
            default: 'http://boscdn.bpc.baidu.com/mms-res/captain/mola-lottery/frame.png'
        },
        prizesImage: {
            title: '奖品图片',
            type: 'string',
            format: 'uri',
            default: 'http://boscdn.bpc.baidu.com/mms-res/captain/mola-lottery/prize.png'
        },
        prizesImageScale: {
            title: '奖品图片绽放比例',
            type: 'string',
            format: 'numeric',
            formatMinimum: '1',
            formatMaximum: '100',
            default: '62.5'
        },
        prizeAmount: {
            title: '奖品数',
            type: 'string',
            format: 'numeric',
            formatMinimum: '4',
            formatMaximum: '12',
            default: '8'
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
            default: 'http://boscdn.bpc.baidu.com/mms-res/voicefe/activity/captain/react/404card.jpg'
        },
        rotateDegree: {
            title: '抽奖时旋转角度',
            type: 'string',
            format: 'numeric',
            default: '1800'
        }
    },
    required: [
        'frameImage',
        'prizesImage',
        'prizeAmount',
        'datasource'
    ]
};

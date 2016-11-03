/**
 * @file Lottery
 * @author ludafa<ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import Prefixer from 'inline-style-prefixer';
import {MOLA_COMPONENT_LEVEL_CONTAINER, registerComponent} from 'mola';
import jsonp from 'jsonp-es6';

export const type = 'Lottery';
export const level = MOLA_COMPONENT_LEVEL_CONTAINER;

const ROTATE_BASE_DEG = 1800;
const ERROR_IMAGE = 'http://boscdn.bpc.baidu.com/mms-res/voicefe/activity/captain/react/404card.jpg';

const prefixer = new Prefixer({
    userAgent: navigator.userAgent
});

let guid = 1;

class Lottery extends Component {

    constructor(...args) {

        super(...args);

        this.draw = this.draw.bind(this);

        this.state = {
            status: 'stopped',
            rotate: 0
        };

    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.token = null;
    }

    startRotating() {

        return new Promise(resolve => {

            this.setState({
                status: 'drawing',
                rotate: this.state.rotate + ROTATE_BASE_DEG
            });

            this.timer = setTimeout(() => {
                this.timer = null;
                resolve();
            }, 3000);

        });

    }

    stopRotating(rotate) {

        return new Promise((resolve, reject) => {

            this.setState({
                status: 'stopping',
                rotate: ROTATE_BASE_DEG
                    + (Math.floor(this.state.rotate / 360) * 360)
                    + rotate
            });

            this.timer = setTimeout(() => {

                this.timer = null;

                this.setState({
                    status: 'stopped',
                    rotate
                });

                resolve();

            }, 4000);

        });

    }

    getRotate(index, total) {

        if (index === 404) {
            return 0;
        }

        const prizeRotate = (360 / total);
        const begin = prizeRotate / 2;

        return index * prizeRotate + begin;

    }

    draw() {

        // 正在转的，不给再转
        if (this.state.status !== 'stopped') {
            return;
        }

        const {
            datasource,
            prizeAmount
        } = this.props;

        // 数据请求：这个 promise 不会 reject
        const promise = jsonp(datasource, {}, {timeout: 1600}).catch(error => {
            return {
                status: error.status || 500,
                statusInfo: error.statusInfo || '服务繁忙，请稍候再试'
            };
        });

        // 请求 token
        const token = this.token = guid++;

        // 数据请求的同时把转盘转起来！我把转盘转上五环！
        Promise.all([promise, this.startRotating()])

            // 数据请求结束了，转盘也转够圈了，我们把转盘停下来
            .then(([data]) => {

                if (this.token !== token) {
                    return;
                }

                let rotate = this.getRotate(
                    data && data.status === 0 ? data.info.prize.id : 404,
                    prizeAmount
                );

                // 这里我们最终是需要 API 的返回数据的
                return this.stopRotating(rotate)
                    // 转完了来个弹窗提示
                    .then(() => {
                        this.setState({
                            prize: data
                        });
                    });

            });



    }

    getGiftStyle(status, rotate) {

        switch (status) {
            case 'drawing':
                return {
                    transition: 'transform 3s ease-in',
                    transform: `rotate(${rotate}deg)`
                };
            case 'stopping':
                return {
                    transition: 'transform 3s ease-out',
                    transform: `rotate(${rotate}deg)`
                };
            case 'stopped':
                return {
                    transform: `rotate(${rotate}deg)`
                };
            default:
                return {};
        }

    }

    renderDialog(prize) {

        if (!prize) {
            return null;
        }

        const {
            status,
            info
        } = prize;

        let backgroundImage = ERROR_IMAGE;

        const buttons = [
            <div
                key="again"
                className="mola-lottery-dialog-button-again"
                onClick={() => {
                    this.setState({
                        prize: null
                    });
                }} />
        ];

        if (status === 0) {

            const {
                image,
                url,
                type
            } = info;

            if (type !== 'default' && url) {
                buttons.push(
                    <a
                        key="checkout"
                        href={url}
                        className="mola-lottery-dialog-button-checkout" />
                );
            }

            backgroundImage = image || backgroundImage;

        }


        return (
            <div className="mola-lottery-pop-window">
                <div
                    className="mola-lottery-dialog"
                    style={{backgroundImage: `url(${backgroundImage})`}}>
                    <div
                        className="mola-lottery-dialog-close"
                        onClick={this.dialogClose} />
                    <footer className="mola-lottery-dialog-footer">
                        {buttons}
                    </footer>
                </div>
            </div>
        );

    }

    render() {

        const {
            frameImage,
            prizesImage,
            prizesImageScale
        } = this.props;

        const {
            status,
            rotate,
            prize
        } = this.state;

        const style = prefixer.prefix(this.getGiftStyle(status, rotate));

        return (
            <div className="mola-lottery">
                <div className="mola-lottery-frame">
                    <img
                        src={frameImage}
                        className="mola-lottery-frame-img" />
                    <div
                        className="mola-lottery-prizes"
                        style={{
                            backgroundImage: `url(${prizesImage})`,
                            backgroundSize: `${prizesImageScale * 100}%`,
                            ...style
                        }} />
                    <div className="mola-lottery-play" onClick={this.draw} />
                </div>
                {this.renderDialog(prize)}
            </div>

        );

    }

}

Lottery.displayName = 'Lottery';

Lottery.defaultProps = {
    prizesImageScale: 0.625
};

Lottery.propTypes = {

    // 框图片
    frameImage: PropTypes.string.isRequired,

    // 奖品转盘图片
    prizesImage: PropTypes.string.isRequired,

    // 奖品转盘图片缩放比例
    prizesImageScale: PropTypes.number.isRequired,

    // 奖品种类数量
    prizeAmount: PropTypes.number.isRequired,

    // 数据源配置
    datasource: PropTypes.string.isRequired

};

export default registerComponent(type, level)(Lottery);

/**
 * @file MolaLottery
 * @author ludafa<ludafa@outlook.com>
 */

import React, {PropTypes, Component} from 'react';

import {create} from 'melon-core/classname/cxBuilder';

const cx = create('MolaLottery');

/**
 * melon 选色器
 */
export default class MolaLottery extends Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
            ...this.state
        };

    }


    /**
     * 渲染
     *
     * @public
     * @return {React.Element}
     */
    render() {
        return (
            <div className={cx(this.props).build()}>
            </div>
        );
    }

}

MolaLottery.displayName = 'MolaLottery';

MolaLottery.defaultProps = {
};

MolaLottery.propTypes = {
};

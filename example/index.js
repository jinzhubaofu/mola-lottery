/**
 * @file MolaLottery example
 * @author ludafa <ludafa@outlook.com>
 */

import React from 'react';
import MolaLottery from '../src/Lottery.js';
import ReactDOM from 'react-dom';

import './index.styl';

ReactDOM.render(
    <MolaLottery
        frameImage="http://gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/static/asset/activity/supergirl/turnTable/img/kuangs1.5c709d00.png"
        prizesImage="http://gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/static/asset/activity/supergirl/turnTable/img/gifts.95173542.png"
        prizeAmount='8'
        datasource={{
            endpoint: 'http://voice.baidu.com/api/lottery?page=27&act=9&preview=1'
        }} />,
    document.getElementById('app')
);

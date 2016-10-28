# mola-lottery

[![Build Status](https://travis-ci.org/react-melon/mola-lottery.svg?branch=master)](https://travis-ci.org/react-melon/mola-lottery)
[![Coverage Status](https://coveralls.io/repos/github/react-melon/mola-lottery/badge.svg?branch=master)](https://coveralls.io/github/react-melon/mola-lottery?branch=master)

## Usage

```js
import React from 'react';
import MolaLottery from 'mola-lottery';
import ReactDOM from 'react-dom';

import './index.styl';

ReactDOM.render(
    <MolaLottery />,
    document.getElementById('app')
);
```

## Setup

### webpack

1. please check out [this](https://github.com/react-melon/melon#如何在-webpack-中使用-melon) first.

2. `npm install -S mola-lottery`

### bower

1. `bower install -S mola-lottery`
2. config your `requirejs` / `esl`

    ```js
    require.config({
        paths: {
            'mola-lottery': 'bower_components/mola-lottery/lib/MolaLottery'
        }
    });
    ```

## API Document

check [this](https://doc.esdoc.org/github.com/react-melon/mola-lottery/) out

## Run the example

```sh
git clone git@github.com:react-melon/mola-lottery.git
cd mola-lottery
npm install
npm start
open http://localhost:8080/example
```

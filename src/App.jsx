import React, { PureComponent } from 'react';
import { Button } from 'antd';

import { join } from './utils/tools';

import img from './th.jpg';

import 'antd/dist/antd.css';
import './App.scss';
class APP extends PureComponent {
    render() {
        return (
            <div className="app">
                <div>
                    <img src={img} />
                </div>
                React App<br />
                <Button
                    onClick={() => {
                        window.alert("Hello")
                    }}

                >点我！</Button>
                {join("hello", 'world')}
            </div>
        )
    }
}

export default APP;
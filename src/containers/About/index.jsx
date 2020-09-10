import React, { PureComponent } from 'react';
import { join } from '../../utils/tools';
//sdfdf
//sdfdf/
//sfdfsafds

import './index.css';

export class About extends PureComponent {
    render() {
        return (
            <div className="about">
                关于我的页面
                <div>
                    {join('a', 'b')}
                </div>
            </div>
        )
    }
}

export default About;
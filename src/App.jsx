import React, { PureComponent } from 'react';

import { join } from './utils/tools';

class APP extends PureComponent {
    render() {
        return (
            <div>
                React App<br />
                {join("hello", 'world')}
            </div>
        )
    }
}

export default APP;
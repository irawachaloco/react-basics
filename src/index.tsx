import './style.styl';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Shell } from './views/shell';

ReactDOM.render(
    <Shell/>,
    document.getElementById('root') as HTMLElement,
);

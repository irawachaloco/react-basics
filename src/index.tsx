
import * as React from "react";
import * as ReactDOM from 'react-dom';

import Hello from './Hello';
import Welcome from './home';
import HeroName from './heroName';

//esto es sintactic-sugar
const hello = <Hello name="pancho"/>

//aquí lo mismo de arriba sin sintactic-sugar
const hello2 = new Hello({name:'pancho'});

const main = 
    <div>
        <HeroName name='irawachaloco'/>
    </div>;


ReactDOM.render(
    main,
    document.getElementById('root') as HTMLElement
);
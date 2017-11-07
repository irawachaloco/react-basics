import './navbar.styl';

import * as React from 'react';

interface NavBarItemProps {
    caption: string;
    path: string;
}

const NavBarItem = (props: NavBarItemProps) => <li><a href={props.path}>{props.caption}</a></li>;

export const NavBar = () =>
<ul className='navbar_list'>
    <NavBarItem caption='digital' path='/digital'/>
    <NavBarItem caption='plástica' path='/plastica'/>
    <NavBarItem caption='cv' path='/cv'/>
</ul>;

import './navbar.styl';

import * as React from 'react';

import {
    Link,
  } from 'react-router-dom';

interface NavBarItemProps {
    caption: string;
    path: string;
}

const NavBarItem = (props: NavBarItemProps) => <li><Link to={props.path}>{props.caption}</Link></li>;

export const NavBar = () =>
    <ul className='navbar_list'>
        <NavBarItem caption='home' path='/'/>
        <NavBarItem caption='cv' path='/cv'/>
        <NavBarItem caption='gallery' path='/gallery'/>
        <NavBarItem caption='gallery2' path='/gallery2'/>
        <NavBarItem caption='carousel_test' path='/carousel_test'/>
    </ul>;

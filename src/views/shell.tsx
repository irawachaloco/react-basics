import * as React from 'react';

import { CurriculumVitae } from './curriculum';
import { Gallery } from './gallery';
import { NavBar } from './navbar';
import SiteName from './site_name';

import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';

const Home = () =>
    <div className='content-box'>
        <section>hola</section>
    </div>;

export const Shell = () =>
    <Router>
        <div className='content-box'>
            <SiteName name='irawachaloco'/>
            <NavBar/>
            <Route exact path='/' component={ Home } />
            <Route path='/cv' component={ CurriculumVitae } />
            <Route path='/gallery' component={ Gallery } />
        </div>
    </Router>;

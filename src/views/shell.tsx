import * as React from 'react';

import CurriculumVitae from './curriculum';
import { NavBar } from './navbar';
import SiteName from './site_name';

export const Shell = () =>
    <div className='content-box'>
        <SiteName name='irawachaloco'/>
        <NavBar/>
        <CurriculumVitae/>
    </div>;

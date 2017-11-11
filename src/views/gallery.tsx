import * as React from 'react';

const testImage = require('../images/test.jpg');

export const Gallery = () =>
    <section>
        <div className=''>
            <div className='gallery'>
                <div className='gallery-item'>
                    <img src={testImage} />
                </div>
                <div className='gallery-item'></div>
                <div className='gallery-item'></div>
                <div className='gallery-item'></div>
                <div className='gallery-item'></div>
                <div className='gallery-item'></div>
                <div className='gallery-item'></div>
            </div>
        </div>
    </section>;

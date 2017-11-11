import * as React from 'react';

const testImage = require('../images/test.jpg');

export const Gallery = () =>
    <section>
        <div className=''>
            <div className='gallery'>
                <div className='gallery-item'
                    style={{
                        backgroundImage: 'url(' + testImage + ')',
                        backgroundSize: 'cover',
                    }}>
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

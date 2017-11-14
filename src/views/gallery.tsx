import * as React from 'react';

const testImage = require('../images/test.jpg');

const img1 = require('../images/ceramic/teteraytaza-min.jpg');
const img2 = require('../images/ceramic/platosHCH-min.jpg');
const img3 = require('../images/ceramic/tazasG-min.jpg');
const img4 = require('../images/ceramic/jarraytazas-min.jpg');
const img5 = require('../images/ceramic/platosHG-min.jpg');
const img6 = require('../images/ceramic/tazasG3-min.jpg');

export const Gallery = () =>
    <section>
        <div className=''>
            <div className='gallery'>
                <div className='gallery-item'
                    style={{
                        backgroundImage: 'url(' + img1 + ')',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                </div>
                <div className='gallery-item'
                    style={{
                        backgroundImage: 'url(' + img2 + ')',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                </div>
                <div className='gallery-item'
                    style={{
                        backgroundImage: 'url(' + img3 + ')',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                </div>
                <div className='gallery-item'
                    style={{
                        backgroundImage: 'url(' + img4 + ')',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                </div>
                <div className='gallery-item'
                    style={{
                        backgroundImage: 'url(' + img5 + ')',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                </div>
                <div className='gallery-item'
                    style={{
                        backgroundImage: 'url(' + img6 + ')',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                </div>

            </div>
        </div>
    </section>;

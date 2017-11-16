import './gallery.styl';

import * as React from 'react';

const testImage = require('../images/test.jpg');

// cerámica
const img1 = require('../images/ceramic/teteraytaza-min.jpg');
const img2 = require('../images/ceramic/platosHCH-min.jpg');
const img3 = require('../images/ceramic/tazasG-min.jpg');
const img4 = require('../images/ceramic/jarraytazas-min.jpg');
const img5 = require('../images/ceramic/platosHG-min.jpg');
const img6 = require('../images/ceramic/tazasG3-min.jpg');

// pintura / serie
// juguetes_patologicos
// cómo ordenar 'bloques' como series
// cada imagen debe tener más datos asociados p.ej. titulo, medidas, tecnica. Parecido a 'Avocet'
const jp1 = require('../images/paint/juguetes_patologicos/jp1-min.jpg');
const jp2 = require('../images/paint/juguetes_patologicos/jp2-min.jpg');
const jp3 = require('../images/paint/juguetes_patologicos/jp3-min.jpg');
const jp4 = require('../images/paint/juguetes_patologicos/jp4-min.jpg');
const jp5 = require('../images/paint/juguetes_patologicos/jp5-min.jpg');
const jp6 = require('../images/paint/juguetes_patologicos/jp6-min.jpg');
const jp7 = require('../images/paint/juguetes_patologicos/jp7-min.jpg');
const jp8 = require('../images/paint/juguetes_patologicos/jp8-min.jpg');
const jp9 = require('../images/paint/juguetes_patologicos/jp9-min.jpg');
const jp10 = require('../images/paint/juguetes_patologicos/jp10-min.jpg');
const jp11 = require('../images/paint/juguetes_patologicos/jp11-min.jpg');
const jp12 = require('../images/paint/juguetes_patologicos/jp12-min.jpg');
const jp13 = require('../images/paint/juguetes_patologicos/jp13-min.jpg');

interface GalleryItem {
    path: string;
}

const GalleryItem = (props: GalleryItem) =>
    <div className='gallery-item'
        style={{
            backgroundImage: 'url(' + props.path + ')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // cómo manejar dos tipos de 'background-size' (p.ej contain y cover)
            // backgroundSize: 'contain',
        }}>
    </div>;

export const Gallery2 = () =>
    <section>
        <div className=''>
            <div className='gallery'>
                <GalleryItem path={jp1}/>
                <GalleryItem path={jp2}/>
                <GalleryItem path={jp3}/>
                <GalleryItem path={jp4}/>
                <GalleryItem path={jp5}/>
                <GalleryItem path={jp6}/>
                <GalleryItem path={jp7}/>
                <GalleryItem path={jp8}/>
                <GalleryItem path={jp9}/>
                <GalleryItem path={jp10}/>
            </div>
        </div>
    </section>;

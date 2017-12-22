import './gallery.styl';

import { juguetesPatologicos } from '../data/paint/juguetesPatologicos';

import * as React from 'react';

const testImage = require('../images/test.jpg');

// pintura / serie
// juguetes_patologicos
// cómo ordenar 'bloques' como series
// cada imagen debe tener más datos asociados p.ej. titulo, medidas, tecnica. Parecido a 'Avocet'

interface GalleryItemProps {
    path: string;
    title: string;
}

const GalleryItem = (props: GalleryItemProps) =>
    <div className='gallery-item'
        style={{
            backgroundImage: 'url(' + props.path + ')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // cómo manejar dos tipos de 'background-size' (p.ej contain y cover)
            // backgroundSize: 'contain',
        }}>
        <p>{props.title}</p>
    </div>;

export const Gallery2 = () =>
    <section>
        <div className=''>
            <div className='gallery'>
                {juguetesPatologicos.map((artwork, i) =>
                    <GalleryItem key={i} path={artwork.imageUrl} title={artwork.title}/>)}
            </div>
        </div>
    </section>;

import './gallery.styl';

import { ceramic } from '../data/ceramic/ceramic';

import * as React from 'react';

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
            backgroundSize: 'cover',
        }}>
        <p>{props.title}</p>
    </div>;

export const Gallery = () =>
    <section>
        <div className=''>
            <div className='gallery'>
                {ceramic.map((artwork, i) =>
                    <GalleryItem key={i} path={artwork.imageUrl} title={artwork.title}/>)}
            </div>
        </div>
    </section>;

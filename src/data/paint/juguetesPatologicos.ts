import { Artwork } from '../../models/artwork';

const image1 = require('../../images/paint/juguetes_patologicos/image1-min.jpg');
const image2 = require('../../images/paint/juguetes_patologicos/image2-min.jpg');
const image3 = require('../../images/paint/juguetes_patologicos/image3-min.jpg');
const image4 = require('../../images/paint/juguetes_patologicos/image4-min.jpg');
const image5 = require('../../images/paint/juguetes_patologicos/image5-min.jpg');
const image6 = require('../../images/paint/juguetes_patologicos/image6-min.jpg');
const image7 = require('../../images/paint/juguetes_patologicos/image7-min.jpg');
const image8 = require('../../images/paint/juguetes_patologicos/image8-min.jpg');
const image9 = require('../../images/paint/juguetes_patologicos/image9-min.jpg');
const image10 = require('../../images/paint/juguetes_patologicos/image10-min.jpg');
const image11 = require('../../images/paint/juguetes_patologicos/image11-min.jpg');
const image12 = require('../../images/paint/juguetes_patologicos/image12-min.jpg');
const image13 = require('../../images/paint/juguetes_patologicos/image13-min.jpg');
const image14 = require('../../images/paint/juguetes_patologicos/image14-min.jpg');

export const juguetesPatologicos: Artwork[] = [
    {
        author: 'pepe',
        creationDate: new Date('1977-09-22'),
        imageUrl: image13,
        technique: 'mixta',
        title: 'cuadro primero',
    },
    {
        author: 'pepe',
        creationDate: new Date('1977-04-22'),
        imageUrl: image14,
        technique: 'mixta',
        title: 'cuadro segundo',
    },
];

export interface Artwork {
    // qué hacer cuando no existe algún campo
    // cómo definir los que son obligatorios
    // este campo tiene que estar en un jason aparte.
    author: string;
    title: string;
    creationDate: Date;
    technique: string;
    // esto puede ser un conjunto de imágenes
    imageUrl: string;
}

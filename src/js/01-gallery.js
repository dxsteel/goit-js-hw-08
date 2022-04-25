// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



console.log(galleryItems);

const galleryCards = document.querySelector('.gallery');
const createPhotoCardMarkup = galleryItems.map(({ preview, original, description }) => {
    return `   
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
}).join('');

galleryCards.insertAdjacentHTML('afterbegin', createPhotoCardMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
    captionDelay: 250,

});
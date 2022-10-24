import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createMarkupGallery(galleryItems) {
    return galleryItems.map(item => `<div class="gallery__item">
<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>
</div>`
    ).join("");
}
const markupGallery = createMarkupGallery(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", markupGallery)

new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});


console.log(galleryItems);

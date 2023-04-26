export { renderGallery }

const gallery = document.querySelector('.gallery');
const galleryEl = document.querySelector('.gallery');


function renderGallery(images) {
    const markup = images.map(images => {
        const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = images;

        return `<div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>`
    }).join('');

    gallery.insertAdjacentHTML('beforeend', markup)
}
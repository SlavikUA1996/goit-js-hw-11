export { renderGallery }

const gallery = document.querySelector('.gallery');
const galleryEl = document.querySelector('.gallery .a');


function renderGallery(images) {
    const markup = images.map(images => {
        const {id, webformatURL, largeImageURL, tags, likes, views, comments, downloads } = images;

      return `<a href="${largeImageURL}">
        <div class="photo-card" id="${id}">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${likes}
    </p>
    <p class="info-item">
      <b>Views</b>${views}
    </p>
    <p class="info-item">
      <b>Comments</b>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${downloads}
    </p>
  </div>
</div>
</>`
    }).join('');

    gallery.insertAdjacentHTML('beforeend', markup)
}
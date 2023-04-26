import { fetchImages } from './js/fetchImages';
import { renderGallery } from './js/renderGallery';
import Notiflix from 'notiflix';


const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.btn-load-more');
let query = '';


searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);

function onSearchForm(e) {
    e.preventDefault();
    gallery.innerHTML = '';
    loadMoreBtn.classList.add('is-hidden');

if (query === '') {
    alertNoEmptySearch();

    return
    }
    

    fetchImages(query, page, perPage)
        .then(({ data }) => {
            if (data === 0) {
                alertNoImagesFound()
            }
            else {
                renderGallery(data.hits)

                alert.ImagesFound(data);

                if (data.totalHits > perPage) {
                    loadMoreBtn.classList.remove('is-hidden')
                }


            }
        }).catch(error => console.log(error));
}

function onLoadMoreBtn() {
    page += 1;

    fetchImages(query, page, perPage)
        .then(({ data }) => {
            renderGallery(data.hits)
            
            const totalPages = Math.ceil(data.totalHits / perPage);

            if (page > totalPages) {
                loadMoreBtn.classList.add('is-hidden');
                alertEndOfSearch()
            }
    }).catch(error => console.log(error))
}


function alertNoEmptySearch() {
    Notiflix.Notify.failure('The search string cannot be empty. Please specify your search query.');
}
    
function alertEndOfSearch() {
    Notiflix.Notify.failure('Were sorry, but youve reached the end of search results.');
}
    
function alertNoImagesFound() {
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    }
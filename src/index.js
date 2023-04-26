import { fetchImages } from './js/fetchImages';
import { renderGallery } from './js/renderGallery';
import Notiflix from 'notiflix';


const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.btn-load-more')

searchForm.addEventListener('submit, onSearchForm');
loadMoreBtn.addEventListener('click, onLoadMoreBtn');
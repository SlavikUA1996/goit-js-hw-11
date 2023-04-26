import axios from 'axios';
export { fetchImages };

axios.defaults.baseURL = 'https://pixabay.com/api/'
let KEY = '35787564-e8d28bcd5aa9cdca1bcff6632';


async function fetchImages(query, page, perPage) {
    const response = await axios.get(`?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)

    return response
}
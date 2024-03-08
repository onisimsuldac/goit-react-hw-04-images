import axios from 'axios';

export const fetchImages = async (query, page) => {
  const API_KEY = '40986310-b3196d090df98d57789873b7a';
  const perPage = 12;
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

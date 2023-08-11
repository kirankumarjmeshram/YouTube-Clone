import axios from 'axios';
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'ac820a33bemshf786ef479433b02p1e0c5fjsn322b3f0dda7f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};
//console.log(process.env.RAPID_API_KEY)
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
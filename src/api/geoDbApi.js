import axios from 'axios';

const API_URL = process.env.REACT_APP_GEO_DB_API_URL;
const API_KEY = process.env.REACT_APP_GEO_DB_API_KEY;
console.log("API_URL",process.env)
const geoDbApi = {
  async getCities(searchTerm, limit,offset) {
    const response = await axios.get(`${API_URL}/geo/cities`, {
      params: {
        namePrefix: searchTerm,
        limit,
        offset:offset
      },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      },
    });
    return response.data;
  },
};

export default geoDbApi;
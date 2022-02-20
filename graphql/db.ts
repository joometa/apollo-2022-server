import axios from "axios";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit: any, rating: any) => {
  let REQ_URL = API_URL;
  if (limit > 0) {
    REQ_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQ_URL += `&rating=${rating}`;
  }

  return axios.get(REQ_URL).then((res) => res.data.data.movies);
};

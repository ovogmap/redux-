import axios from 'axios'

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = "1d3ad3a1e497c9afbe443d1443905c3f";
const LANGUAGE = "ko-KR";

const getQuery = (path) => {
  let url = `${BASE_URL}${path}?api_key=${API_KEY}&language=${LANGUAGE}`
  return url
}
export default async function fetchData(path) {
  const url = getQuery(path)
  const result = await axios.get(url)
  const jsonResult = JSON.parse(result.request.response);
  // const jsonResult = result.request.response
  return jsonResult;
}
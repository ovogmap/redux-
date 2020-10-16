import fetchData from '../../util/fetchData'
import axios from 'axios'

export default async function introApi() {
  const randomMovie = {};
  let responseData = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=1d3ad3a1e497c9afbe443d1443905c3f&language=ko-KR")
  .then(response => response )
  responseData = responseData.data.results;
  let Id = responseData[Math.floor(Math.random() * responseData.length)].id;

  while(
    !randomMovie.backdropPath ||
    !randomMovie.title ||
    !randomMovie.tagline 
  ) {
    Id = responseData[Math.floor(Math.random() * responseData.length)].id;
    const result = await fetchData(`${Id}`)
    randomMovie.backdropPath = `${result.backdrop_path}`;
    randomMovie.title = result.title;
    randomMovie.tagline = result.tagline;
    randomMovie.id = result.id;
  }

  return randomMovie
}
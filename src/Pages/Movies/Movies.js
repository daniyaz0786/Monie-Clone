import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../../Cpmponents/Pagination/CustomPagination";
import SingleContent from "../../Cpmponents/SingleContent/SingleContent";
import Genres from "../../Cpmponents/Genres/Genres";
import useGenre from "../../hooks/useGenre";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state added
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
      );
      console.log(data.results);
      setContent(data.results);
      setNumOfPages(data.total_pages);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
  }, [genreforURL, page, setContent, setNumOfPages]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {loading ? (
          <p>Loading...</p>
        ) : (
          content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))
        )}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;

import Movie from "../Movie/Movie";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie, item) => {
        return (
          <li key={`${movie.id}-${item}`}>
            <Movie movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

import { Link, useLocation } from "react-router-dom";

const Movie = ({ movie }) => {
  const location = useLocation();
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <div>
        <img
          src={
            movie.backdrop_path
              ? `${baseURL}/${movie.backdrop_path}`
              : "https://kartinki.pics/pics/uploads/posts/2022-08/1659664031_1-kartinkin-net-p-kino-abstraktsiya-krasivo-1.jpg"
          }
        />
      </div>
      <Link
        to={`/movies/${movie.id}`}
        state={{ from: location }}
      >
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
};
export default Movie;

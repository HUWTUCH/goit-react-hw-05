import { FaStar } from "react-icons/fa";

const MovieDetails = ({ movie }) => {
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
      <h3>{movie.title}</h3>
      <div>
        <p>{movie.overview}</p>
        <p>Release date: {movie.release_date}</p>
        <p>Runtime: {movie.runtime}min.</p>
        <p>
          Rating: {movie.vote_average} <FaStar />
        </p>
        <div>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>
                <p>{genre.name},</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;

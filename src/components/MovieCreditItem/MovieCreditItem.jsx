const MovieCreditItem = ({ cast }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <div>
        <img
          src={
            cast.profile_path
              ? `${baseURL}/${cast.profile_path}`
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP7Pk3ppYdHyWvhwMLfP1biWPxNg6QzrqgAY-D7h-_Zg&s"
          }
        />
      </div>
      <h3>{cast.name}</h3>
    </div>
  );
};
export default MovieCreditItem;

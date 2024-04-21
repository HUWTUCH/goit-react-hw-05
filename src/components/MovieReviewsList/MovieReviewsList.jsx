
const MovieReviewsList = ({ reviews }) => {
  return (
    <ul >
      {reviews.map((review) => {
        return (
          <li key={review.id} >
            <p >
              Author name: {review.author}. Rating:{" "}
              {review.author_details.rating}.
            </p>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieReviewsList;

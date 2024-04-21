
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";

const MovieSearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === "") {
      toast.error("Please enter search term!");
      onSearch("");
    }
    const form = evt.target;
    const result = form.elements.query.value.trim();
    onSearch(result);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Search movie..."
        autoFocus
        name="query"
      />
      <button type="submit" title="Search">
        <IoSearch />
      </button>
    </form>
  );
};

export default MovieSearchForm;

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const searchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      toast.error("Enter search query");
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header>
      <form>
        <input
          onChange={handleChange}
          value={searchQuery}
          name="search"
          required
          type="text"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default searchBar;

import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toggleSearchBar } from "../../features/searchState/searchSlice";


const OnScreenSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filtered, setFilteredSearch] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch(); 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchInput) {
        handleSearch(searchInput);
      }
    }, 500); 
    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCN4mthTIbBlmaIvj-5gdDTszhztCjsQw8&maxResults=3`
      );
      setFilteredSearch(response.data.items || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch search results. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    setError(null); 
  };

  const handleClose = () => {
    dispatch(toggleSearchBar()); 
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm lg:max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-6 rounded-t-md p-2 text-gray-400 hover:text-gray-700"
        >
          ✕
        </button>
        
        <input
          type="text"
          name="search"
          onChange={handleInputChange}
          className="w-full text-center outline-none border-b-2 text-gray-400"
          placeholder="Search Google Books"
        />
        
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        
        <ul className="mt-4">
          {filtered.map((book) => (
            <li
              className="text-gray-400 hover:bg-gray-200 rounded-md shadow-sm px-4 py-2"
              key={book.id}
            >
              {book.volumeInfo?.title || "No title available"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OnScreenSearch;

import { IoIosAdd } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa";
import { addToFavorite, removeFromFavorite, addToNextRead, removeFromNextRead } from "../../features/cart/cartSlice";
import books from "../../data/books";
import { useDispatch, useSelector } from "react-redux";

function BookCard({ id, title, image, description, likes, category }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cart.favorites);
  const nextRead = useSelector((state) => state.cart.nextRead);

  const isFavorite = favorites.some((book) => book.id === id);
  const isNextRead = nextRead.some((book) => book.id === id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite({ id, title, image, description, likes, category }));
    }
  };

  const handleNextReadToggle = () => {
    if (isNextRead) {
      dispatch(removeFromNextRead(id));
    } else {
      dispatch(addToNextRead({ id, title, image, description, likes, category }));
    }
  };

  return (
    <article className="flex gap-4 max-w-96 border rounded-md p-2">
      <img className="max-w-32 rounded-md" src={image} alt={title} />
      <div className="flex flex-col justify-between">
        <h4 className="font-semibold text-custom-yellow text-lg">{title}</h4>
        <p className="text-sm leading-relaxed tracking-wide opacity-70">{description}</p>
        <p className="text-sm opacity-70">{category}</p>
        <div>
          <span className="text-sm">Likes {likes}</span>
        </div>
        <div className="flex items-center">
          <button 
            className={`flex items-center ${isNextRead ? 'bg-red-200' : 'bg-[#9cbcb4]'} hover:bg-red-300 text-white p-1 px-4 rounded-sm`} 
            onClick={handleNextReadToggle} 
            disabled={isNextRead}
          >
            <IoIosAdd size={20} /> {isNextRead ? "Added" : "NextRead"}
          </button>
          <button onClick={handleFavoriteToggle} className="ml-2 text-yellow-500">
            {isFavorite ? <FaStar size={20} /> : <FaRegStar size={20} />}
          </button>
        </div>
      </div>
    </article>
  );
}

function BookList() {
  return (
    <section className="flex flex-wrap justify-between gap-4">
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          category={book.category}
          image={book.image}
          description={book.description}
          likes={book.likes}
        />
      ))}
    </section>
  );
}

export default BookList;

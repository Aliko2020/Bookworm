import { useState } from "react";
import { addToFavorite, removeFromFavorite, addToNextRead, removeFromNextRead } from "../../features/cart/cartSlice";
import books from "../../data/books";
import { useDispatch, useSelector } from "react-redux";
import SkeletonCard from "./BookSkeleton";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


function BookCard({ id, title, image, description, likes, category }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
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
      {!isImageLoaded && <SkeletonCard />}
      <img className={`max-w-32 rounded-md ${!isImageLoaded && 'hidden'}`} src={image} alt={title} onLoad={() => setIsImageLoaded(true)} />
      {isImageLoaded && (
        <div className="flex flex-col justify-between">
          <h4 className="font-semibold text-custom-yellow text-lg">{title}</h4>
          <p className="text-sm leading-relaxed tracking-wide opacity-70">{description}</p>
          <div className="flex items-center">
            <button
              className={`flex items-center ${isNextRead ? 'bg-gray-700' : 'bg-gray-700'} hover:bg-gray-800 text-white p-1 px-8 rounded-2xl`}
              onClick={handleNextReadToggle}
              disabled={isNextRead}
            >
             {isNextRead ? "Added" : "Read"}
            </button>
            <button onClick={handleFavoriteToggle} className="ml-2 text-red-700">
              {isFavorite ? <FaHeart size={20} />:<CiHeart size={24} />  }
            </button>
          </div>
        </div>
      )}
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

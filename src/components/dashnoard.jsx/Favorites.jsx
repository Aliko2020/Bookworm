import { useSelector } from "react-redux";
import emptybox from "../../assets/images/empty-box.png"


const Favorites = () => {
  const favorites = useSelector((state) => state.cart.favorites);
  return (
    <div className="py-4">
      
      <div className="flex gap-4 flex-wrap mt-4">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <div key={favorite.id} className="max-w-sm p-4 bg-custom-gray rounded-md shadow-md">
              <h2 className="text-lg text-custom-yellow font-semibold">{favorite.title}</h2>
              <hr />
              <p className="text-sm text-gray-600">{favorite.description}</p>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center w-full">
            <img className="mt-20 max-w-72 filter grayscale" src={emptybox} alt="empty-box"/>
            <p className="text-lg p-4 text-center text-custom-yellow">Your favorites list is empty.Books you stared⭐ appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;

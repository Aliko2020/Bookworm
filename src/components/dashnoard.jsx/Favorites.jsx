import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.cart.favorites);

  return (
    <div className="py-4">
      
      <div className="flex gap-4 flex-wrap mt-4">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <div key={favorite.id} className="max-w-sm p-4 bg-custom-gray rounded-md shadow-md">
              {/* <img
                src={favorite.image}
                alt={favorite.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              /> */}
              <h2 className="text-lg text-custom-yellow font-semibold">{favorite.title}</h2>
              <hr />
              <p className="text-sm text-gray-600">{favorite.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Your favorites list is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;

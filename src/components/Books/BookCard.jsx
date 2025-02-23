import { IoIosAdd } from "react-icons/io";
import books from "../../data/Books";


function BookCard({ title, image, description, likes,category }) {
    return (
        <article className="flex gap-4 max-w-sm border p-2">
            <img className="max-w-44" src={image} alt={title} />
            <div className="flex flex-col justify-between">
                <h4 className="font-bold text-lg">{title}</h4>
                <p className="text-sm">{description}</p>
                <p className="text-sm">{category}</p>
                <div>
                    <span className="text-sm">Likes {likes}</span>
                </div>
                <div>
                    <button className="flex gap-1 justify-center items-center bg-custom-yellow text-white px-2 rounded-sm">
                        <IoIosAdd size={20} /> Dashboard
                    </button>
                </div>
            </div>
        </article>
    );
}

function BookList() {
    return (
        <section className="flex flex-wrap gap-4">
            {books.map((book) => (
                <BookCard
                key={book.id}
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

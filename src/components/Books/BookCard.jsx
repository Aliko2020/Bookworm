import { IoIosAdd } from "react-icons/io";
import books from "../../data/Books";


function BookCard({ title, image, description, likes,category }) {
    return (
        <article className="flex gap-4 max-w-96 border rounded-md p-2">
            <img className="max-w-32 rounded-md" src={image} alt={title} />
            <div className="flex flex-col justify-between">
                <h4 className="font-simibold text-custom-yellow text-lg">{title}</h4>
                <p className="text-sm leading-relaxed tracking-wide opacity-70">{description}</p>
                <p className="text-sm opacity-70">{category}</p>
                <div>
                    <span className="text-sm">Likes {likes}</span>
                </div>
                <div>
                    <button className="flex items-center bg-[#9cbcb4] text-white p-1 px-4 rounded-sm">
                        <IoIosAdd size={20} /> Add
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

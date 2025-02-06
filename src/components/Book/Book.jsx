import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { image, bookName, author, review, tags, category, rating, bookId } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 bg-gray-700 h-96 shadow-xl p-6 ">
                <figure className="bg-gray-500 py-8 rounded-2xl">
                    <img
                        src={image}
                        className="h-[166px]"
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-3">
                        {
                            tags.map((tag, index) => <button
                                key={index}
                                className="btn bg-red-400 text-white btn-xs">{tags}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between pt-5">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
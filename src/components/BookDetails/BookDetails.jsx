import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    const { bookId: current, image } = book;
    return (

        <div className="my-12">
            <h2>Book Details</h2>
            <img className="w-36" src={image} alt="" />
            <br />
            <button className="btn btn-outline btn-accent mr-4">Read</button>
            <button className="btn btn-active  btn-accent">Wishlist</button>

        </div>
    );
};

export default BookDetails;
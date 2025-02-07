import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/addToDb";


const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)

    const { bookId: current, image } = book;

    const handleMarkAsRead = (id) => {
        /**
         * 1. understand what to store or save: => bookId
         * 2.where to store: database
         * 3.array, list, collection:
         * 4.check: if the book is already in the readlist.
         * 5. if not, then add the book to the list 
         * 6. if yes, do not add the book
         * 
         */

        addToStoredReadList(id);
    }

    const handAddToWishList = (id) => {
        addToStoredWishList(id);
    }
    return (

        <div className="my-12">
            <h2>Book Details</h2>
            <img className="w-36" src={image} alt="" />
            <br />
            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline btn-accent mr-4">mark as Read</button>
            <button onClick={() => handAddToWishList(bookId)} className="btn btn-active  btn-accent">Wishlist</button>

        </div>
    );
};

export default BookDetails;
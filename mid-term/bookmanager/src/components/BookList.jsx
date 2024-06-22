/* eslint-disable react/prop-types */
function BookList({ books, selected, onClick }) {
    return (
        <>
            <h2>Select a Book</h2>
            <div className="book-list">
                {books.map((book) => (
                    <div
                        key={crypto.randomUUID()}
                        className={`book ${
                            selected === book.id ? "selected" : ""
                        }`}
                        onClick={() => onClick(book.id)} // Pass the book id to the onClick handler
                    >
                        <img
                            src={book.coverImg}
                            alt={`Cover of the book ${book.name}`}
                            className="book-image"
                        />
                        <p
                            className={`book-name ${
                                selected === book.id ? "selected" : ""
                            }`}
                        >
                            {book.name}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BookList;

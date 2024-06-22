/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const BookViewer = ({ book }) => {
    // Check if the book has any sequels and render them appropriately
    const renderSequels = () => {
        if (book.sequels && book.sequels.length > 0) {
            return (
                <ul>
                    {book.sequels.map((sequel, index) => (
                        <li key={crypto.randomUUID()}>
                            <span>
                                {index + 1}. {sequel}
                            </span>
                        </li>
                    ))}
                </ul>
            );
        }
        // Display nothing if there are no sequels"
        return <ol></ol>;
    };

    // Function to render stars based on the rating
    const renderStars = () => {
        return (
            <div className="book-rating">
                {"⭐️".repeat(book.rating)}
            </div>
        );
    };

    return (
        <div className="book-viewer">
            <div className="book-cover">
                <img src={book.coverImg} alt={book.name} />
            </div>
            <div className="book-details">
                <h2>{book.name}</h2>
                {renderSequels()}
                {renderStars()}
            </div>
        </div>
    );
};

export default BookViewer;

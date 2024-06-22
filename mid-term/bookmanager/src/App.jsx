import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import BookViewer from "./components/BookViewer";

import books from "./data";

function App() {
    const [selected, setSelected] = useState(0);
    const [book, setBook] = useState(books[0]);

    const handleBookClick = (bookId) => {
        // alert(bookId);
        setSelected(bookId);
        setBook(books.find((book) => book.id === bookId));
    };

    return (
        <div className="app-container">
            <div
                className="blurred-background"
                style={{ backgroundImage: `url(${book.coverImg})` }}
            ></div>
            <div className="content">
                <h1>Book Manager</h1>
                <BookViewer book={book} />
                <BookList
                    books={books}
                    selected={selected}
                    onClick={handleBookClick}
                />
            </div>
        </div>
    );
}

export default App;

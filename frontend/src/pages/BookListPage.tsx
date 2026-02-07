import BookCard from "../components/BookCard";

export default function BookListPage() {
    const book = {
        title: "1984",
        author: "George Orwell",
        category: "Dystopian",
        owner: "Laura",
        coverColor: "#e5e7eb",
    };

    return (
        <div style={{ padding: 40 }}>
            <h1>Browse Books</h1>
            <BookCard book={book} />
        </div>
    );
}

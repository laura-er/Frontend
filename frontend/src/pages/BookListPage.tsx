import BookCard from "../components/BookCard";

export default function BookListPage() {
    return (
        <div>
            <h1>Browse Books</h1>

            <BookCard title="1984" author="George Orwell" />
            <BookCard title="The Hobbit" author="J.R.R. Tolkien" />
        </div>
    );
}

export default function BookCard(props: {
    book: {
        title: string;
        author: string;
        category: string;
        owner: string;
        coverColor: string;
    };
}) {
    const { book } = props;

    return (
        <div style={{ background: book.coverColor, padding: 16, width: 220 }}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.category}</p>
            <p>{book.owner}</p>
        </div>
    );
}

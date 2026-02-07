type BookCardProps = {
    title: string;
    author: string;
};

export default function BookCard(props: BookCardProps) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
        </div>
    );
}

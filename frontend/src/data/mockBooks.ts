export interface Book {
    id: string;
    title: string;
    author: string;
    category: string;
    owner: string;
    coverColor: string;
}

export const mockBooks: Book[] = [
    {
        id: "1",
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        category: "Computer Science",
        owner: "Alex Johnson",
        coverColor: "#715A5A"
    },
    {
        id: "2",
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        owner: "Sarah Smith",
        coverColor: "#8A784E"
    },
    {
        id: "3",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Literature",
        owner: "Mike Brown",
        coverColor: "#f59e0b"
    },
    {
        id: "4",
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        category: "Literature",
        owner: "Emma Wilson",
        coverColor: "#2A3666"
    }
];


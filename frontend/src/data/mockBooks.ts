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
        coverColor: "#3b82f6"
    },
    {
        id: "2",
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        owner: "Sarah Smith",
        coverColor: "#10b981"
    },
    {
        id: "3",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Literature",
        owner: "Mike Brown",
        coverColor: "#f59e0b"
    }
];


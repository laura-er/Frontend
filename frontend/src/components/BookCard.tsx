import { BookOpen, User, ArrowRightLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BookCardProps {
    book: {
        title: string;
        author: string;
        category: string;
        owner: string;
        coverColor: string;
    };
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <article className="group flex flex-col overflow-hidden rounded-lg border bg-card shadow-card transition-shadow duration-200 hover:shadow-card-hover">
            {/* Book Cover Illustration */}
            <div
                className="flex h-44 items-center justify-center"
                style={{ backgroundColor: book.coverColor }}
            >
                <BookOpen className="h-12 w-12 text-primary-foreground opacity-60" />
            </div>
            {/* Card Body */}
            <div className="flex flex-1 flex-col p-5">
                <Badge variant="secondary" className="mb-3 w-fit text-xs font-medium">
                    {book.category}
                </Badge>
                <h3 className="mb-1 font-heading text-base font-bold leading-snug text-card-foreground line-clamp-2">
                    {book.title}
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">{book.author}</p>
                <div className="mt-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                    <User className="h-3.5 w-3.5" />
                    <span>Offered by <span className="font-semibold text-foreground">{book.owner}</span></span>
                </div>
            </div>
            {/* Footer */}
            <div className="border-t px-5 py-3">
                <Button className="w-full gap-2" size="sm">
                    <ArrowRightLeft className="h-4 w-4" />
                    Request Swap
                </Button>
            </div>
        </article>
    );
};

export default BookCard;
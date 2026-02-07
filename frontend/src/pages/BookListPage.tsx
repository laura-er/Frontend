import { BookOpen } from "lucide-react";

export default function BookListPage() {
    return (
        <div className="min-h-screen bg-background">
            <header className="border-b bg-card">
                <div className="container flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <BookOpen className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                            <h1 className="font-heading text-xl font-bold text-foreground">BookSwap</h1>
                            <p className="text-xs text-muted-foreground"> Book Exchange</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}



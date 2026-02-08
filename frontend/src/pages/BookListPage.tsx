import { useState } from "react";
import { BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { mockBooks } from "@/data/mockBooks";

const categories = ["All", ...Array.from(new Set(mockBooks.map((b) => b.category)))];

export default function BookListPage() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b bg-card m-0">
                <div className="container flex items-center justify-between py-0.5">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <BookOpen className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                            <h1 className="font-heading text-xl font-bold text-foreground">BookSwap</h1>
                            <p className="text-xs text-muted-foreground">Book Exchange</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container py-8">
                <div className="mb-8 flex flex-row items-end justify-between gap-6">
                    <div>
                        <h2 className="font-heading text-3xl font-bold text-foreground">Browse Books</h2>
                        <p className="mt-1 text-muted-foreground">
                            Find textbooks and novels available for swapping with fellows.
                        </p>
                    </div>

                    <Field orientation="horizontal" className="w-auto shrink-0">
                        <Input
                            type="search"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-48"
                        />
                        <Button>
                            <Search className="h-4 w-4" />
                        </Button>
                    </Field>
                </div>

                {/* Category Filters */}
                <div className="mb-6 border-b border-border">
                    <div className="flex">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{ marginRight: '32px' }}
                                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors rounded-t-md ${
                                    activeCategory === cat
                                        ? "text-foreground border-primary"
                                        : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}


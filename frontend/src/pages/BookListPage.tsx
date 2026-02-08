import { useState } from "react";
import { BookOpen, Search, Library, Laptop, Heart, BookText, Ghost, Eye, Lightbulb, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import BookCard from "@/components/BookCard";
import { mockBooks } from "@/data/mockBooks";

const categories = [
    "All",
    "Computer Science",
    "Romance",
    "Literature",
    "Horror",
    "Mystery/Thriller",
    "Self-Help",
    "History"
];

const categoryIcons: Record<string, LucideIcon> = {
    "All": Library,
    "Computer Science": Laptop,
    "Romance": Heart,
    "Literature": BookText,
    "Horror": Ghost,
    "Mystery/Thriller": Eye,
    "Self-Help": Lightbulb,
    "History": Globe
};

export default function BookListPage() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <div style={{ minHeight: '100vh', background: '#ffffff' }}>
            {/* Header */}
            <header style={{ borderBottom: '1px solid #e5e7eb', padding: '4px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: '#1f2937', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <BookOpen style={{ width: '20px', height: '20px', color: 'white' }} />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>BookSwap</h1>
                        <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Book Exchange</p>
                    </div>
                </div>
            </header>

            {/* Main */}
            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
                {/* Title & Search */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', gap: '24px' }}>
                    <div>
                        <h2 style={{ fontSize: '30px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Browse Books</h2>
                        <p style={{ color: '#6b7280', margin: 0 }}>Find textbooks and novels available for swapping with fellows.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                        <input
                            type="search"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                width: '200px',
                                padding: '8px 12px',
                                border: '1px solid #d1d5db',
                                borderRadius: '6px',
                                fontSize: '14px'
                            }}
                        />
                        <button style={{
                            padding: '8px 16px',
                            background: '#1f2937',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Search style={{ width: '16px', height: '16px' }} />
                        </button>
                    </div>
                </div>

                {/* Category Tags */}
                <div style={{ marginBottom: '32px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        {categories.map((cat) => {
                            const Icon = categoryIcons[cat] || Library;
                            const isActive = activeCategory === cat;

                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '8px 16px',
                                        background: isActive ? '#E6501B' : '#f3f4f6',
                                        color: isActive ? 'white' : '#374151',
                                        border: 'none',
                                        borderRadius: '20px',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <Icon style={{ width: '16px', height: '16px' }} />
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Results Count */}
                <p style={{ marginBottom: '16px', fontSize: '14px', color: '#6b7280' }}>
                    Showing {mockBooks.length} books
                </p>

                {/* Book Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '24px'
                }}>
                    {mockBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </main>
        </div>
    );
}

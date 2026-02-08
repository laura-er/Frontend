import { BookOpen, User, ArrowRightLeft } from "lucide-react";

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
        <article style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            background: 'white',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s'
        }}>
            {/* Book Cover */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '170px',
                backgroundColor: book.coverColor
            }}>
                <BookOpen style={{ width: '64px', height: '64px', color: 'white', opacity: 0.6 }} />
            </div>

            {/* Card Body */}
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    background: '#f3f4f6',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    width: 'fit-content',
                    marginBottom: '6px'
                }}>
                    {book.category}
                </span>

                <h3 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginBottom: '4px',
                    lineHeight: '1.4'
                }}>
                    {book.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>
                    {book.author}
                </p>

                <div style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#6b7280'
                }}>
                    <User style={{ width: '14px', height: '14px' }} />
                    <span>Offered by <strong style={{ color: '#1f2937' }}>{book.owner}</strong></span>
                </div>
            </div>

            {/* Footer */}
            <div style={{ borderTop: '1px solid #e5e7eb', padding: '12px 20px' }}>
                <button
                    onClick={() => alert('Request sent for: ' + book.title)}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#d14516';
                        e.currentTarget.style.transform = 'scale(0.98)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#E6501B';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onMouseDown={(e) => {
                        e.currentTarget.style.transform = 'scale(0.95)';
                        e.currentTarget.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.3)';
                    }}
                    onMouseUp={(e) => {
                        e.currentTarget.style.transform = 'scale(0.98)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                    style={{
                        width: '100%',
                        padding: '8px 16px',
                        background: '#E6501B',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'all 0.15s ease'
                    }}
                >
                    <ArrowRightLeft style={{ width: '16px', height: '16px' }} />
                    Request Swap
                </button>
            </div>
        </article>
    );
};

export default BookCard;
import { BookDeletion } from "@/components/books/delete/BookDeletion";

type PageProps = {
    params: Promise<{
        bookId: string;
    }>;
};

export default async function Page({ params }: PageProps) {
    const { bookId } = await params;

    return <BookDeletion bookId={bookId} />;
}
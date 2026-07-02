import { BookEdition } from "@/components/books/edit/BookEdition";

type PageProps = {
    params: Promise<{
        bookId: string;
    }>;
};

export default async function Page({ params }: PageProps) {
    const { bookId } = await params;

    return <BookEdition bookId={bookId} />;
}
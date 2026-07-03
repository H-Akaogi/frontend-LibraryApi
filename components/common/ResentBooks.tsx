"use client";
import { useSearchBook } from "../hooks/useSearchBook";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../ui/card";
import {
    BookOpen,
} from "lucide-react";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "../ui/table";
export const RecentBooks = () => {
    const { books } = useSearchBook();

    const recentBooks = books.slice(0, 5);
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    最近登録された図書
                </CardTitle>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>書名</TableHead>
                            <TableHead>著者</TableHead>
                            <TableHead>カテゴリ</TableHead>
                            <TableHead>在庫</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {recentBooks.map((book) => (
                            <TableRow key={book.bookId}>
                                <TableCell>{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.category.name}</TableCell>
                                <TableCell>{book.stock}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
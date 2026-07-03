"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CommonAlert } from "@/components/common/CommonAlert";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { AlertCircle } from "lucide-react";
import { useSearchBook } from "@/components/hooks/useSearchBook";
import { useRouter } from "next/navigation";
import { BookDeletion } from "./BookDeletion";
export const GetIdforDelete = () => {
    const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
    const router = useRouter();
    // 検索ボックスに入力されたキーワード文字列を保持するローカルState
    const [keyword, setKeyword] = useState<string>("");
    // バリデーションエラーを保持するState
    const [validationError, setValidationError] = useState<string>("");
    // カスタムフックから検索結果(books)、ローディング状態(isLoading)、エラー状態(error)、検索実行関数(search)を取得する
    const { books, isLoading, error, search } = useSearchBook();
    // 検索ボタンのクリックイベントハンドラ
    // 検索ボタンのクリックイベントハンドラ
    const handleSearchClick = () => {
        // 前回のバリデーションエラーをクリア
        setValidationError("");

        // 空文字チェック
        if (!keyword.trim()) {
            setValidationError("検索キーワードを入力してください。");
            return;
        }

        // 文字数チェック
        if (keyword.length > 50) {
            setValidationError("検索キーワードは50文字以内で入力してください。");
            return;
        }

        // 入力されているキーワードを引数に渡し、実際の検索処理を実行する
        search(keyword);
    };
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center border-b pb-4">
                図書削除
            </h2>
            <p>削除する図書を検索して選択してください。</p>
            {/* エラーメッセージ */}
            <div className="space-y-3 mb-6">
                {validationError && (
                    <CommonAlert message={validationError} />
                )}

                {error && (
                    <CommonAlert message={`検索処理中にエラーが発生しました。${error}`} />
                )}
            </div>

            {/* 検索入力エリア */}
            <div className="mb-10">
                <div className="max-w-2xl mx-auto space-y-2">
                    <Label htmlFor="bookKeyword" className="font-medium">
                        書名キーワード
                    </Label>

                    <div className="flex gap-3">
                        <Input
                            id="bookKeyword"
                            type="text"
                            value={keyword}
                            onChange={(e) => {
                                setKeyword(e.target.value);

                                if (validationError) {
                                    setValidationError("");
                                }
                            }}
                            placeholder="例：React、TypeScript、設計"
                            className="flex-1 h-12 text-lg"
                        />

                        <Button
                            onClick={handleSearchClick}
                            disabled={isLoading}
                            className="px-8 h-12"
                        >
                            {isLoading ? "検索中..." : "検索"}
                        </Button>
                    </div>

                    <p
                        className={`text-left text-sm ${keyword.length > 50
                            ? "text-red-500"
                            : "text-muted-foreground"
                            }`}
                    >
                        50文字以内で入力してください ({keyword.length}/50)
                    </p>
                </div>
            </div>


            {/* 検索結果の表示エリア */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">

                    <p className="text-sm text-muted-foreground">
                        検索結果：{books.length}件
                    </p>
                </div>
                {/* 図書が見つからない場合のメッセージ */}
                {books.length === 0 && !isLoading && (
                    <p className="text-center text-muted-foreground py-4">
                        該当する図書が見つかりませんでした。
                    </p>
                )}

                {/* 図書が見つかった場合のテーブル表示 */}
                {books.length > 0 && (
                    <div className="border rounded-md">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50">
                                    <TableHead className="font-semibold text-foreground">書名</TableHead>
                                    <TableHead className="font-semibold text-foreground text-right">著者名</TableHead>
                                    <TableHead className="font-semibold text-foreground text-center">分類</TableHead>
                                    <TableHead className="font-semibold text-foreground text-right">蔵書数</TableHead>
                                    <TableHead className="font-semibold text-foreground text-right">操作</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {books.map((book) => (
                                    <TableRow key={book.bookId}>
                                        <TableCell className="font-medium">
                                            {book.title}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {book.author.toLocaleString()}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                                {book.category.name}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {book.stock} <span className="text-muted-foreground text-xs">冊</span>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                className="flex-1 h-10"
                                                disabled={isLoading}
                                                onClick={() => setSelectedBookId(book.bookId)}
                                            >
                                                削除
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </div>
            {selectedBookId && (
                <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm">
                    <div className="w-full max-w-2xl rounded-t-2xl bg-white p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
                        <BookDeletion
                            bookId={selectedBookId}
                            onClose={() => setSelectedBookId(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
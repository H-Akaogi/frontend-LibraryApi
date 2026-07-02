"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useSearchBook } from "../hooks/useSearchBook";
import { AlertCircle } from "lucide-react";
import { CommonAlert } from "@/components/common/CommonAlert";
/**
 * 演習 8-7 バックエンドにアクセスするリポジトリを実装して切り替える
 * ユーザーからの入力を受け付け、カスタムフック経由で検索処理を呼び出す
 */
export const BookSearch = () => {

    // 検索ボックスに入力されたキーワード文字列を保持するローカルState
    const [keyword, setKeyword] = useState<string>("");
    // カスタムフックから検索結果(books)、ローディング状態(isLoading)、エラー状態(error)、検索実行関数(search)を取得する
    const { books, isLoading, error, search } = useSearchBook();
    // 検索ボタンのクリックイベントハンドラ
    const handleSearchClick = () => {
        // 入力されているキーワードを引数に渡し、実際の検索処理(ユースケース)を実行する
        search(keyword);
    };

    /**
     * UIを構成するコンポーネントを返す
     */
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center border-b pb-4">
                図書キーワード検索
            </h2>

            {/* 検索入力エリア */}
            <div className="flex justify-center items-center gap-4 mb-8">
                <Input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="書名を入力..."
                    className="max-w-sm"
                />
                <Button
                    onClick={handleSearchClick}
                    disabled={isLoading}
                    className="px-8"
                >
                    {isLoading ? "検索中..." : "検索"}
                </Button>
            </div>

            {/* エラーメッセージを表示する */}
            {error && (
                <CommonAlert
                    title="エラー"
                    message={error}
                />
            )}

            {/* 検索結果の表示エリア */}
            <div>
                {/* 図書が見つからない場合のメッセージ */}
                {books.length === 0 && !isLoading && (
                    <p className="text-center text-muted-foreground py-4">
                        図書が見つかりません。検索ボタンを押してください。
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
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {books.map((book) => (
                                    <TableRow key={book.bookUuid}>
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
                                            {book.stock.stock} <span className="text-muted-foreground text-xs">冊</span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </div>
        </div>
    );
};
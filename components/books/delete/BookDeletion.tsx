"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    BookCheckIcon,
    Loader2,
    Trash2
} from "lucide-react";
import { useRouter } from "next/navigation";
import { InfoIcon } from "lucide-react";
import { useDeleteBook } from "@/components/hooks/useDeleteBook";
/**
 * 演習 8-12 図書削除画面コンポーネントを実装し動作確認する
 * 図書削除画面のUIコンポーネント
 */
type BookDeletionProps = {
    bookId: string;
    onClose: () => void;
};

export const BookDeletion = ({ bookId, onClose }: BookDeletionProps) => {
    const router = useRouter();

    // カスタムHookから状態と関数を取得する
    const {
        book,
        categoryName,
        errors,
        isLoading,
        isSuccess,
        handleDelete,
        closeSuccess,
    } = useDeleteBook(bookId);

    // フォーム送信時のUI側イベントハンドラ
    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault(); // デフォルトの画面遷移を防止する
        const isDeleted = await handleDelete(); // Hookの送信処理を実行する

        if (!isDeleted) {
            return;
        }

        toast.success("図書を削除しました。");

        router.push("/home");
    };


    if (isLoading && !book) {
        return (
            <div className="container mx-auto py-10 max-w-lg">
                <p className="text-center text-muted-foreground">
                    図書情報を読み込み中です...
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="container mx-auto py-10 max-w-lg">
                <h1 className="text-2xl font-bold mb-6">図書削除</h1>

                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <div>
                            <h1>図書を削除しますか？</h1>
                            <p>この操作は取り消せません。</p>
                        </div>
                    </div>

                    <div>
                        <p>{book?.title ?? ""}</p>
                        <p>著者：{book?.author ?? ""}／分類：{book?.category.name ?? ""}／蔵書数：{book?.stock ?? ""}</p>
                    </div>


                    {/* 通信エラー等の表示 */}
                    {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}
                    {errors.system && <p className="text-sm text-red-500">{errors.system}</p>}

                    {/* 削除ボタン */}
                    <div className="flex w-full gap-4 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1 h-10"
                            disabled={isLoading}
                            onClick={onClose}
                        >
                            キャンセル
                        </Button>

                        <Button
                            type="submit"
                            className="flex-[2] h-10"
                            variant="destructive"
                            disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    削除中...
                                </>
                            ) : (
                                <>
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    削除
                                </>
                            )}
                        </Button>


                    </div>

                </form >
            </div >
        </>
    );
};
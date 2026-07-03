"use client";
import { toast } from "sonner";
import { useChangeBook } from "@/components/hooks/useChangeBook";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { InfoIcon } from "lucide-react";
/**
 * 演習 8-12 図書変更画面コンポーネントを実装し動作確認する
 * 図書変更画面のUIコンポーネント
 */
type BookEditionProps = {
    bookId: string;
    onClose: () => void;
};

export const BookEdition = ({ bookId, onClose }: BookEditionProps) => {
    const router = useRouter();

    // カスタムHookから状態と関数を取得する
    const {
        formData,
        categoryName,
        errors,
        isLoading,
        isSuccess,
        handleChange,
        handleSubmit,
        closeSuccess
    } = useChangeBook(bookId);

    // フォーム送信時のUI側イベントハンドラ
    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault(); // デフォルトの画面遷移を防止する
        if (hasValidationError) {
            return;
        }
        const isChanged = await handleSubmit(); // Hookの送信処理を実行する
        toast.success("図書を変更しました。");
        router.push("/home");
    };

    const isTitleOverLimit = formData.title.length > 50;
    const isTitleBlank = formData.title.length === 0;
    const isAuthorOverLimit = formData.author.length > 30;
    const isAuthorBlank = formData.author.length === 0;
    const isStockBlank = formData.stock === null || formData.stock === undefined;
    const isStockInvalid = Number(formData.stock) < 0;

    const hasValidationError =
        isTitleBlank ||
        isTitleOverLimit ||
        isAuthorBlank ||
        isAuthorOverLimit ||
        isStockBlank ||
        isStockInvalid;

    if (isLoading && !formData.title) {
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
                <h1 className="text-2xl font-bold mb-6">図書変更</h1>

                <form onSubmit={onSubmit} className="space-y-6">
                    {/* 書名入力 */}
                    <div className="space-y-2">
                        <Label htmlFor="title" className="font-medium">書名<span className="ml-1 text-red-500">*</span></Label>
                        <Input
                            id="title"
                            name="title"
                            value={formData.title ?? ""}
                            onChange={handleChange}
                            required
                            minLength={1}
                            className={`w-full h-10 ${isTitleBlank || isTitleOverLimit || errors.title
                                ? "border-red-500 focus-visible:ring-red-500"
                                : ""
                                }`
                            }
                        />
                        {isTitleBlank ? (
                            <p className="flex items-start gap-1 text-sm text-red-500">
                                <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>書名は必須です。</span>
                            </p>
                        ) : isTitleOverLimit ? (
                            <p className="flex items-start gap-1 text-sm text-red-500">
                                <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>書名は50文字以内で入力してください。</span>
                            </p>
                        ) : errors.title ? (
                            <p className="text-sm text-red-500">
                                {errors.title}
                            </p>
                        ) : (
                            <p className="text-sm text-gray-500">
                                1〜50文字
                            </p>
                        )}
                    </div>

                    {/* 著者名入力 */}
                    <div className="space-y-2">
                        <Label htmlFor="author" className="font-medium">著者名<span className="ml-1 text-red-500">*</span></Label>
                        <Input
                            id="author"
                            name="author"
                            type="text"
                            value={formData.author}
                            onChange={handleChange}
                            required
                            minLength={1}
                            maxLength={30}
                            className={`w-full h-10 ${isAuthorBlank || isAuthorOverLimit || errors.author
                                ? "border-red-500 focus-visible:ring-red-500"
                                : ""
                                }`}
                        />
                        {isAuthorBlank ? (
                            <p className="flex items-start gap-1 text-sm text-red-500">
                                <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>著者名は必須です。</span>
                            </p>
                        ) : isAuthorOverLimit ? (
                            <p className="flex items-start gap-1 text-sm text-red-500">
                                <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>著者名は30文字以内で入力してください。</span>
                            </p>
                        ) : errors.author ? (
                            <p className="text-sm text-red-500">
                                {errors.author}
                            </p>
                        ) : (
                            <p className="text-sm text-gray-500">
                                1〜30文字
                            </p>
                        )}
                    </div>

                    {/* 分類表示 */}
                    <div className="space-y-2">
                        <Label htmlFor="category" className="font-medium">
                            分類
                        </Label>

                        <Input
                            id="category"
                            value={categoryName}
                            disabled
                            className="w-full h-10 bg-gray-100 text-gray-600"
                        />

                        <p className="text-sm text-gray-500">
                            分類は変更できません。
                        </p>
                    </div>

                    {/* 蔵書数入力 */}
                    <div className="space-y-2">
                        <Label htmlFor="stock" className="font-medium">蔵書数<span className="ml-1 text-red-500">*</span></Label>
                        <Input
                            id="stock"
                            name="stock"
                            type="number"
                            value={formData.stock || ""}
                            onChange={handleChange}
                            min="0"
                            required
                            className={`w-full h-10 ${isStockBlank || isStockInvalid || errors.stock
                                ? "border-red-500 focus-visible:ring-red-500"
                                : ""
                                }`}
                        />
                        {isStockBlank ? (
                            <p className="flex items-start gap-1 text-sm text-red-500">
                                <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>蔵書数は必須です。</span>
                            </p>
                        ) : isStockInvalid ? (
                            <p className="flex items-start gap-1 text-sm text-red-500">
                                <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>蔵書数は0以上の整数で入力してください。</span>
                            </p>
                        ) : errors.stock ? (
                            <p className="flex items-start gap-1 text-sm text-red-500">
                                <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>{errors.stock}</span>
                            </p>
                        ) : (
                            <p className="text-sm text-gray-500">
                                0以上の整数
                            </p>
                        )}
                    </div>


                    {/* 通信エラー等の表示 */}
                    {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}
                    {errors.system && <p className="text-sm text-red-500">{errors.system}</p>}

                    {/* 変更ボタン */}
                    <div className="flex w-full gap-4 pt-4">
                        <Button
                            type="submit"
                            className="flex-[2] h-10"
                            disabled={isLoading || hasValidationError}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    変更中...
                                </>
                            ) : (
                                "変更"
                            )}
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1 h-10"
                            disabled={isLoading}
                            onClick={() => router.push("/books/edit")}
                        >
                            キャンセル
                        </Button>
                    </div>

                </form >
            </div >

            {/* ★ カスタムHookの isSuccess に応じてモーダルを表示 */}
            {
                isSuccess && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
                            <h3 className="text-xl font-bold mb-4">変更完了</h3>
                            <p className="text-gray-600 mb-8">図書の変更が完了しました。</p>
                            <Button
                                onClick={() => router.push("/books/edit")}
                                // ユーザーが「確認」を押したタイミングで入力画面へ遷移する
                                className="w-full">
                                検索画面に戻る
                            </Button>
                        </div>
                    </div>
                )
            }
        </>
    );
};
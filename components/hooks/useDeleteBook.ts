import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import { IDeleteBookService } from "@/interfaces/IDeleteBookService";
import { Book } from "@/models/Book";
import { BookChange } from "@/models/BookChange";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";

/**
 * 図書削除画面の状態管理とイベントハンドリングを行うカスタムHook
 */
export const useDeleteBook = (bookId: string) => {
    // DIコンテナからサービスを取得する
    const service = useMemo(
        () => container.get<IDeleteBookService>(TYPES.IDeleteBookService),
        []
    );
    // 削除フォームの状態
    const [book, setBook] = useState<Book | null>(null);

    // 表示専用のカテゴリ名
    const [categoryName, setCategoryName] = useState<string>("");

    // エラー情報
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // ローディング状態
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 削除成功状態
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    /**
     * 初期表示時に、削除対象の図書情報を取得する
     */
    useEffect(() => {
        const fetchInitialData = async () => {
            if (!bookId) {
                return;
            }
            setIsLoading(true);
            setErrors({});
            try {
                const data = await service.getById(bookId);

                setBook(data);
                setCategoryName(data.category.name);
            } catch (error: any) {
                setErrors((prev) => ({
                    ...prev,
                    system: error.message || "図書情報の取得に失敗しました。",
                }));
            } finally {
                setIsLoading(false);
            }
        };

        fetchInitialData();
    }, [bookId, service]);


    /**
     * 削除処理
     */
    const handleDelete = useCallback(async (): Promise<boolean> => {
        if (!bookId) {
            return false;
        }
        setIsLoading(true);
        setErrors({});

        try {
            await service.execute(bookId);
            setIsSuccess(true);
            return true;
        } catch (error: any) {
            setErrors((prev) => ({
                ...prev,
                submit: error.message || "図書の削除に失敗しました。",
            }));
            return false;
        } finally {
            setIsLoading(false);
        }
    }, [bookId, service]);

    /**
     * 成功モーダルを閉じる
     */
    const closeSuccess = useCallback(() => {
        setIsSuccess(false);
    }, []);

    return {
        book,
        categoryName,
        errors,
        isLoading,
        isSuccess,
        handleDelete,
        closeSuccess,
    };
};
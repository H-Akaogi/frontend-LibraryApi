import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import { IChangeBookService } from "@/interfaces/IChangeBookService";
import { Book } from "@/models/Book";
import { BookChange } from "@/models/BookChange";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";

/**
 * 図書変更画面の状態管理とイベントハンドリングを行うカスタムHook
 */
export const useChangeBook = (bookId: string) => {
    // DIコンテナからサービスを取得する
    const service = useMemo(
        () => container.get<IChangeBookService>(TYPES.IChangeBookService),
        []
    );
    // 変更フォームの状態
    const [formData, setFormData] = useState<BookChange>({
        bookId: bookId,
        title: "",
        author: "",
        stock: 0,
    });

    // 表示専用のカテゴリ名
    const [categoryName, setCategoryName] = useState<string>("");

    // エラー情報
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // ローディング状態
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 変更成功状態
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    /**
     * 初期表示時に、変更対象の図書情報を取得する
     */
    useEffect(() => {
        const fetchInitialData = async () => {
            if (!bookId) {
                return;
            }
            setIsLoading(true);

            try {
                const book = await service.getById(bookId);

                setFormData({
                    bookId: book.bookId,
                    title: book.title,
                    author: book.author,
                    stock: book.stock,
                });

                setCategoryName(book.category.name);
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
     * 入力変更時の処理
     */
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name === "stock" ? Number(value) : value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
            submit: "",
            system: "",
        }));
    }, []);

    /**
     * 変更処理
     */
    const handleSubmit = useCallback(async (): Promise<Book | null> => {
        setIsLoading(true);
        setErrors({});

        try {
            const result = await service.execute(formData);

            if (result) {
                setIsSuccess(true);
            }

            return result;
        } catch (error: any) {
            setErrors((prev) => ({
                ...prev,
                submit: error.message || "図書の変更に失敗しました。",
            }));

            return null;
        } finally {
            setIsLoading(false);
        }
    }, [formData, service]);

    /**
     * 成功モーダルを閉じる
     */
    const closeSuccess = useCallback(() => {
        setIsSuccess(false);
    }, []);

    return {
        formData,
        categoryName,
        errors,
        isLoading,
        isSuccess,
        handleChange,
        handleSubmit,
        closeSuccess,
    };
};
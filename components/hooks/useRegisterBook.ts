import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import { IRegisterBookService } from "@/interfaces/IRegisterBookService";
import { Book } from "@/models/Book";
import { BookCategory } from "@/models/BookCategory";
import { BookRegistration } from "@/models/BookRegistation";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

/**
 * 演習 8-11 状態管理とサービスを繋ぐカスタムHookを実装する
 * 図書登録画面の状態管理とイベントハンドリングを行うカスタムHook
 */
export const useRegisterBook = () => {
    // DIコンテナからサービスを取得する
    const service = container.get<IRegisterBookService>(TYPES.IRegisterBookService);

    // --- Stateの定義 ---
    const [formData, setFormData] = useState<BookRegistration>({
        title: "",
        author: "",
        categoryId: "",
        stock: 0
    });

    const [categories, setCategories] = useState<BookCategory[]>([]);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // 入力フォームと状態を初期化して、入力画面に戻る処理
    const resetForm = useCallback(() => {
        setFormData({
            title: "",
            author: "",
            categoryId: "",
            stock: 0,
        });
        setErrors({});
        setIsSuccess(false);
    }, []);

    // --- 画面初期表示時にカテゴリ一覧を取得する ---
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await service.getCategories();
                setCategories(data);
            } catch (error: any) {
                setErrors((prev) => ({
                    ...prev,
                    system: "カテゴリ一覧の取得に失敗しました。"
                }));
            }
        };

        fetchCategories();
    }, [service]);

    // --- 入力の変更イベント ---
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            // stockだけ数値に変換する
            [name]: name === "stock" ? Number(value) : value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
            submit: "",
            system: "",
        }));
    }, []);

    // --- カテゴリ選択時の処理 ---
    const handleCategoryChange = useCallback((categoryId: string) => {
        setFormData((prev) => ({
            ...prev,
            categoryId: categoryId
        }));
    }, []);

    // --- 書名入力終了時に重複を検証する ---
    const handleNameBlur = useCallback(async () => {
        if (!formData.title) return; // 空の場合は検証しない
        try {
            // 検証前にエラーをクリアする
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors.title;
                return newErrors;
            });
            await service.validateBookName(formData.title);
        } catch (error: any) {
            // 重複エラーなどを title のエラーとしてセットする
            setErrors((prev) => ({
                ...prev,
                title: error.message || "図書名の検証に失敗しました。",
            }));
        }
    }, [formData.title]);

    // --- [登録]ボタンクリック時にデータを永続化する ---
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
                title: error.message || "図書の登録に失敗しました。"
            }));

            return null;
        } finally {
            setIsLoading(false);
        }
    }, [formData, service]);

    return {
        formData,
        categories,
        errors,
        isLoading,
        isSuccess,
        handleChange,
        handleCategoryChange,
        handleSubmit,
        handleNameBlur,
        resetForm
    };
};
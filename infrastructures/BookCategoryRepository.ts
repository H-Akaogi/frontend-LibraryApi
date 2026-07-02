import { IBookCategoryRepository } from "@/interfaces/IBookCategoryRepository";
import { BookCategory } from "@/models/BookCategory";
import { injectable } from "inversify";
//import { getSession } from "next-auth/react";
/**
 * 演習 8-9 リポジトリの実装を作成する
 * 図書カテゴリリポジトリ実装クラス
 */
@injectable()
export class BookCategoryRepository implements IBookCategoryRepository {
    /**
     * すべての図書カテゴリを取得する
     * @returns すべての図書カテゴリのリスト（非同期）
     */
    async findAll(): Promise<BookCategory[]> {
        //const session = await getSession();
        //const token = (session as any)?.user?.token;
        const response = await fetch("/proxy-api/library/api/categories", {
            method: "GET",
            headers: {
                // "Authorization": `Bearer ${token}`,
                //"Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("図書カテゴリの取得に失敗しました。");
        }
        return await response.json();
    }
    /**
     * 指定したIDの図書カテゴリを取得する
     * @param id 図書カテゴリId(UUID)
     * @returns 図書カテゴリ（非同期）
     */
    async findById(id: string): Promise<BookCategory> {
        //const session = await getSession();
        //const token = (session as any)?.user?.token;
        const response = await fetch(`/proxy-api/library/api/categories/${id}`, {
            method: "GET",
            headers: {
                // "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("図書カテゴリ詳細の取得に失敗しました。");
        }
        return await response.json();
    }
}
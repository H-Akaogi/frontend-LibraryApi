import { IBookRepository } from "@/interfaces/IBookRepository";
import { Book } from "@/models/Book";
import { injectable } from "inversify";
// import { getSession } from "next-auth/react";
/**
 * バックエンドから返ってくる図書データの型
 */
type BookResponse = {
    bookId: string;
    title: string;
    author: string;
    category: {
        categoryId: string;
        name: string;
    };
    stock: number;
};
/**
 * 演習 8-7 バックエンドにアクセスするリポジトリを実装して切り替える
 * バックエンドAPIと通信を行い、図書データを取得する
 */
@injectable()
export class BookRepository implements IBookRepository {
    /**
     * 指定したキーワードで図書を検索する
     * @param keyword 検索キーワード
     * @returns 検索結果の図書リスト
     */
    public async searchKeyword(keyword: string): Promise<Book[]> {
        // NextAuthのセッションからアクセストークンを取得する
        //const session = await getSession();
        //const token = (session as any)?.user?.token;

        // 検索クエリパラメータの構築
        const params = new URLSearchParams({ Keyword: keyword });

        // API呼び出し(next.config.tsで設定したプロキシ経由)
        const response = await fetch(`/proxy-api/library/api/books?${params.toString()}`, {
            method: "GET",
            /*headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }*/
        });

        // ステータスコードに応じたエラーハンドリング
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            // バックエンドで設定した "message" (検索キーワードを入力してください。等) があればそれを投げる
            if (errorData.message) {
                throw new Error(errorData.message);
            }
            // それ以外のエラーへの対応
            if (errorData.errors) {
                const messages = Object.values(errorData.errors).flat().join("\n");
                throw new Error(messages);
            }
            throw new Error(`検索に失敗しました (Status: ${response.status})`);
        }

        // 成功時は図書リスト(JSON)をパースして返却する
        const data: BookResponse[] = await response.json();
        // バックエンドの形をフロント側のBook型に変換する
        const books: Book[] = data.map((book) => ({
            bookUuid: book.bookId,
            title: book.title,
            author: book.author,
            category: {
                categoryId: book.category.categoryId,
                name: book.category.name,
            },
            stock: book.stock,
        }));
        return books;
    }
}
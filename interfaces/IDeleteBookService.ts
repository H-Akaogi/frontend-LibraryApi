import { Book } from "@/models/Book";
import { BookCategory } from "@/models/BookCategory";

/**
 * 演習 8-10 図書登録サービスを実装してDIコンテナに登録する
 * 図書登録画面におけるUIイベントに対応するサービスのインターフェース
 */
export interface IDeleteBookService {
    /**
     * IDから図書を取得
     */
    getById(bookId: string): Promise<Book>;

    /**
     * 分類一覧の取得
     */
    getCategories(): Promise<BookCategory[]>;

    /**
     * 図書を削除する
     */
    execute(bookId: string): Promise<void>;
}
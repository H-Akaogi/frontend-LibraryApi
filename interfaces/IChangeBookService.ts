import { Book } from "@/models/Book";
import { BookCategory } from "@/models/BookCategory";
import { BookChange } from "@/models/BookChange";
import { BookRegistration } from "@/models/BookRegistation";

/**
 * 演習 8-10 図書登録サービスを実装してDIコンテナに登録する
 * 図書登録画面におけるUIイベントに対応するサービスのインターフェース
 */
export interface IChangeBookService {
    /**
     * IDから図書を取得
     */
    getById(bookId: string): Promise<Book>;
    /**
     * 分類一覧の取得
     */
    getCategories(): Promise<BookCategory[]>;
    /**
     * 入力終了時: 図書名の重複を検証する
     * @param name 入力された図書名
     * @throws 図書名が重複している場合はエラーをスローする
     */
    validateBookName(name: string): Promise<void>;

    /**
     * 登録実行時: 図書データを永続化する
     * @param book 登録する図書データ
     * @return 登録された図書（非同期）
     */
    execute(book: BookChange): Promise<Book>;
}
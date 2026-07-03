import { Book } from "../models/Book";
import { BookRegistration } from "@/models/BookRegistation";
import { BookChange } from "@/models/BookChange";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 図書リポジトリインターフェース
 */
export interface IBookRepository {
    /**
     * 指定したキーワードで図書を検索して取得する
     * @param keyword 検索キーワード
     * @returns 検索にヒットした図書のリスト（非同期）
     */
    searchKeyword(keyword: string): Promise<Book[]>;
    /**
     * 演習 8-8 リポジトリとDTOインターフェイスを実装する
     * 図書の重複を検証する
     * @param name 検証する図書名
     */
    existsByName(name: string): Promise<void>;
    /**
     * 演習 8-8 リポジトリとDTOインターフェイスを実装する
     * 図書を登録する
     * @param book 登録する図書
     * @returns 登録された図書（非同期）
     */
    register(book: BookRegistration): Promise<Book>;
    /**
     * 図書を変更する
     * @param book
     */
    change(book: BookChange): Promise<Book>;
    getById(bookId: string): Promise<Book>;
    /**
     * 図書を削除する
     */
    deleteById(bookId: string): Promise<void>;
}
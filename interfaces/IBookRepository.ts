import { Book } from "../models/Book";
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
}
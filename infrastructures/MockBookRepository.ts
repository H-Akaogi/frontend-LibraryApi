import { injectable } from "inversify";
import { IBookRepository } from "../interfaces/IBookRepository";
import { Book } from "../models/Book";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 図書リポジトリの実装(モック)
 */
@injectable()
export class MockBookRepository implements IBookRepository {

    // テスト用のダミーデータ（モックデータ）を準備
    private readonly mockBooks: Book[] = [
        {
            bookUuid: "b-001",
            title: "プログラミング入門",
            author: "山田太郎",
            category: { categoryUuid: "c-001", name: "技術書" },
            stock: { stockUuid: "s-001", stock: 3 }
        },
        {
            bookUuid: "b-002",
            title: "データベース設計入門",
            author: "佐藤花子",
            category: { categoryUuid: "c-001", name: "技術書" },
            stock: { stockUuid: "s-002", stock: 5 }
        },
        {
            bookUuid: "b-003",
            title: "JavaScript実践ガイド",
            author: "鈴木一郎",
            category: { categoryUuid: "c-001", name: "技術書" },
            stock: { stockUuid: "s-003", stock: 2 }
        }
    ];

    /**
     * 指定したキーワードで図書を検索して取得する
     * @param keyword 検索キーワード
     * @returns 検索にヒットした図書のリスト(非同期)
     */
    public async searchKeyword(keyword: string): Promise<Book[]> {
        // キーワードが空の場合は、全件を返す
        if (!keyword) {
            return this.mockBooks;
        }
        // キーワードが図書名(name)に含まれているものをフィルタリングする
        const filteredBooks = this.mockBooks.filter(book =>
            book.title.includes(keyword)
        );
        // asyncメソッドなので、自動的にPromiseでラップされて返却される
        return filteredBooks;
    }
}
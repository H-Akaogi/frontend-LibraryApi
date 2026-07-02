import { injectable } from "inversify";
import { IBookRepository } from "../interfaces/IBookRepository";
import { Book } from "../models/Book";
import { BookRegistration } from "../models/BookRegistation";

/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 図書リポジトリの実装(モック)
 */
@injectable()
export class MockBookRepository implements IBookRepository {
    // テスト用のダミーデータ（モックデータ）を準備
    private mockBooks: Book[] = [
        {
            bookUuid: "b-001",
            title: "プログラミング入門",
            author: "山田太郎",
            category: { categoryId: "c-001", name: "技術書" },
            stock: 3
        },
        {
            bookUuid: "b-002",
            title: "データベース設計入門",
            author: "佐藤花子",
            category: { categoryId: "c-001", name: "技術書" },
            stock: 5
        },
        {
            bookUuid: "b-003",
            title: "JavaScript実践ガイド",
            author: "鈴木一郎",
            category: { categoryId: "c-001", name: "技術書" },
            stock: 2
        }
    ];

    /**
     * 指定したキーワードで図書を検索して取得する
     * @param keyword 検索キーワード
     * @returns 検索にヒットした図書のリスト(非同期)
     */
    public async searchKeyword(keyword: string): Promise<Book[]> {
        if (!keyword) {
            return this.mockBooks;
        }

        const filteredBooks = this.mockBooks.filter(book =>
            book.title.includes(keyword)
        );

        return filteredBooks;
    }

    /**
     * 図書名の重複を検証する
     * @param name 検証する図書名
     */
    public async existsByName(name: string): Promise<void> {
        const exists = this.mockBooks.some(book => book.title === name);

        if (exists) {
            throw new Error("同じ書名の図書が既に登録されています。");
        }
    }

    /**
     * 図書を登録する
     * @param book 登録する図書
     * @returns 登録された図書
     */
    public async register(book: BookRegistration): Promise<Book> {
        const newBook: Book = {
            bookUuid: crypto.randomUUID(),
            title: book.title,
            author: book.author,
            category: {
                categoryId: book.categoryId,
                name: "未設定"
            },
            stock: book.stock
        };

        this.mockBooks.push(newBook);

        return newBook;
    }
}
import { Book } from "@/models/Book";
import { BookCategory } from "@/models/BookCategory";
import { BookChange } from "@/models/BookChange";
import { IChangeBookService } from "@/interfaces/IChangeBookService";
import { TYPES } from "@/di/types";
import { inject, injectable } from "inversify";
import type { IBookCategoryRepository } from "@/interfaces/IBookCategoryRepository";
import type { IBookRepository } from "@/interfaces/IBookRepository";

/**
 * 図書変更サービス
 * 図書変更画面におけるUIイベントに対応するサービス
 */
@injectable()
export class ChangeBookService implements IChangeBookService {
    /**
     * コンストラクタ
     * @param bookRepository 図書リポジトリ
     * @param categoryRepository 図書カテゴリリポジトリ
     */
    constructor(
        @inject(TYPES.IBookRepository) private bookRepository: IBookRepository,
        @inject(TYPES.IBookCategoryRepository) private categoryRepository: IBookCategoryRepository
    ) { }

    /**
     * IDから変更対象の図書を取得する
     * @param bookId 図書ID
     * @returns 図書情報
     */
    public async getById(bookId: string): Promise<Book> {
        return await this.bookRepository.getById(bookId);
    }

    /**
     * 分類一覧を取得する
     * @returns 図書分類一覧
     */
    public async getCategories(): Promise<BookCategory[]> {
        return await this.categoryRepository.findAll();
    }

    /**
     * 入力終了時: 図書名の重複を検証する
     * @param name 入力された図書名
     */
    public async validateBookName(name: string): Promise<void> {
        await this.bookRepository.existsByName(name);
    }

    /**
     * 変更実行時: 図書データを更新する
     * @param book 変更する図書データ
     * @returns 変更後の図書
     */
    public async execute(book: BookChange): Promise<Book> {
        return await this.bookRepository.change(book);
    }
}
import { Book } from "@/models/Book";
import { BookCategory } from "@/models/BookCategory";
import { BookChange } from "@/models/BookChange";
import { IDeleteBookService } from "@/interfaces/IDeleteBookService";
import { TYPES } from "@/di/types";
import { inject, injectable } from "inversify";
import type { IBookCategoryRepository } from "@/interfaces/IBookCategoryRepository";
import type { IBookRepository } from "@/interfaces/IBookRepository";

/**
 * 図書変更サービス
 * 図書変更画面におけるUIイベントに対応するサービス
 */
@injectable()
export class DeleteBookService implements IDeleteBookService {
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
 * 変更実行時: 図書データを更新する
 * @param bookId 変更する図書ID
 * @returns 変更後の図書
 */
    public async execute(bookId: string): Promise<void> {
        return await this.bookRepository.deleteById(bookId);
    }
}
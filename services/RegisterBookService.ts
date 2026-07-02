import { TYPES } from "@/di/types";
import type { IBookCategoryRepository } from "@/interfaces/IBookCategoryRepository";
import type { IBookRepository } from "@/interfaces/IBookRepository";
import { IRegisterBookService } from "@/interfaces/IRegisterBookService";
import { Book } from "@/models/Book";
import { BookCategory } from "@/models/BookCategory";
import { BookRegistration } from "@/models/BookRegistation";
import { inject, injectable } from "inversify";

/**
 * 演習 8-10 図書登録サービスを実装してDIコンテナに登録する
 * 図書登録に関する各種データアクセスを統括するFacadeサービス
 */
@injectable()
export class RegisterBookService implements IRegisterBookService {

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
     * 画面初期表示時: すべての図書カテゴリを取得する
     * @return すべての図書カテゴリのリスト（非同期）
     */
    async getCategories(): Promise<BookCategory[]> {
        return await this.categoryRepository.findAll();
    }

    /**
     * カテゴリ選択時: 指定したIDの図書カテゴリ詳細を取得する
     * @param id 図書カテゴリId(UUID)
     * @return 図書カテゴリ（非同期）
     */
    async getCategoryById(id: string): Promise<BookCategory> {
        return await this.categoryRepository.findById(id);
    }

    /**
     * 入力終了時: 図書名の重複を検証する
     * @param name 入力された図書名
     * @throws 図書名が重複している場合はエラーをスローする
     */
    async validateBookName(name: string): Promise<void> {
        await this.bookRepository.existsByName(name);
    }

    /**
     * 登録実行時: 図書データを永続化する
     * @param book 登録する図書データ
     * @return 登録された図書（非同期）
     */
    async execute(book: BookRegistration): Promise<Book> {
        return await this.bookRepository.register(book);
    }
}
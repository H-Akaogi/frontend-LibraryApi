import { injectable, inject } from "inversify";
import type { ISearchBookService } from "../interfaces/ISearchBookService";
import type { IBookRepository } from "../interfaces/IBookRepository";
import type { Book } from "@/models/Book";
import { TYPES } from "@/di/types";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 図書キーワード検索サービスインターフェイスの実装
 */
// @injectable()デコレータを付与: SearchBookServiceクラスはDIコンテナの管理対象
@injectable()
export class SearchBookService implements ISearchBookService {

    /**
     * コンストラクタ
     * @param bookRepository IBookRepositoryの実装をインジェクションする
     * @inject(識別子)の付与により、必要なインターフェースをコンストラクタの引数として受け取る
     * コンストラクタの引数と変数を同時に記述している
     * [@inject(TYPES.IBookRepository)...] :DIコンテナに登録されたIBookRepositoryが必要なのでインジェクションしてください
     * [...private bookRepository: IBookRepository] :IBookRepositoryをbookRepository変数に代入してください
     */
    constructor(
        @inject(TYPES.IBookRepository) private bookRepository: IBookRepository
    ) { }

    /**
     * 図書検索を実行する
     * @param keyword 検索キーワード
     * @returns 検索結果の図書のリスト
     * 非同期処理asyncのため、Promiseを返す
     */
    public async execute(keyword: string): Promise<Book[]> {
        // ユースケース固有のビジネスロジックをここに記述可能
        return await this.bookRepository.searchKeyword(keyword);
    }
}
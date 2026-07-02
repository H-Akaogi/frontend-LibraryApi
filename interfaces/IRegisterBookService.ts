import { Book } from "@/models/Book";
import { BookCategory } from "@/models/BookCategory";
import { BookRegistration } from "@/models/BookRegistation";

/**
 * 演習 8-10 図書登録サービスを実装してDIコンテナに登録する
 * 図書登録画面におけるUIイベントに対応するサービスのインターフェース
 */
export interface IRegisterBookService {
    /**
     * 画面初期表示時: すべての図書カテゴリを取得する
     * @return すべての図書カテゴリのリスト（非同期）
     */
    getCategories(): Promise<BookCategory[]>;

    /**
     * カテゴリ選択時: 指定したIDの図書カテゴリ詳細を取得する
     * @param id 図書カテゴリId(UUID)
     * @return 図書カテゴリ（非同期）
     */
    getCategoryById(id: string): Promise<BookCategory>;

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
    execute(book: BookRegistration): Promise<Book>;
}
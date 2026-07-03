import { IBookRepository } from "@/interfaces/IBookRepository";
import { ISearchBookService } from "@/interfaces/ISearchBookService";
import { Container } from "inversify";
import { TYPES } from "./types";
import { SearchBookService } from "@/services/SearchBookService";
import { BookRepository } from "@/infrastructures/BookRepository";
/*import { IRegisterUserService } from "@/interfaces/IRegisterUserService";
import { RegisterUserService } from "@/services/RegisterUserService";
import { IUserRepository } from "@/interfaces/IUserRepository";
import { UserRepository } from "@/infrastructures/UserRepository";
*/
import { IBookCategoryRepository } from "@/interfaces/IBookCategoryRepository";
import { BookCategoryRepository } from "@/infrastructures/BookCategoryRepository";

import { IRegisterBookService } from "@/interfaces/IRegisterBookService";
import { RegisterBookService } from "@/services/RegisterBookService";
import { IChangeBookService } from "@/interfaces/IChangeBookService";
import { ChangeBookService } from "@/services/ChangeBookService";
import { IDeleteBookService } from "@/interfaces/IDeleteBookService";
import { DeleteBookService } from "@/services/DeleteBookService";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * DIコンテナの初期化と依存関係の登録
 * 「このSymbolが呼ばれたら、このクラスを渡す」というルール
 */
// Container(DIコンテナ本体)の生成
const container = new Container();
// ---------------------------------------------------------
// バインディング（登録）設定
// container.bind<インターフェース名>(TYPES.Symbol名: bindメソッドで登録するSymbolを定義).to(紐付けるリポジトリ: 登録するインターフェース実装クラス)
// ---------------------------------------------------------
// リポジトリの登録(モック版を紐付ける)
//container.bind<IBookRepository>(TYPES.IBookRepository).to(MockBookRepository);

/**
 * 演習 8-7 バックエンドにアクセスするリポジトリを実装して切り替える
 * モック版からバックエンドAPI版(BookRepository)へ切り替える
 */
container.bind<IBookRepository>(TYPES.IBookRepository).to(BookRepository);

// サービス(ユースケース)の登録
container.bind<ISearchBookService>(TYPES.ISearchBookService).to(SearchBookService);
/**
 * 演習 8-4 Serviceの実装とDIコンテナへの登録
 */
// container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
// container.bind<IRegisterUserService>(TYPES.IRegisterUserService).to(RegisterUserService);

/**
 * 演習 8-9 リポジトリの実装を作成する
 */
container.bind<IBookCategoryRepository>(TYPES.IBookCategoryRepository).to(BookCategoryRepository);

/**
 * 演習 8-10 図書登録サービスを実装してDIコンテナに登録する
 */
container.bind<IRegisterBookService>(TYPES.IRegisterBookService).to(RegisterBookService);
/**
 * 図書変更
 */
container.bind<IChangeBookService>(TYPES.IChangeBookService).to(ChangeBookService);
/**
 * 図書削除
 */
container.bind<IDeleteBookService>(TYPES.IDeleteBookService).to(DeleteBookService);

export { container };
import { BookCategory } from "./BookCategory";
import { BookStock } from "./BookStock";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 図書インターフェイス
 */
export interface Book {
    bookUuid: string;        // 図書Id(UUID)
    title: string;               // 書名
    author: string;              // 著者名
    category: BookCategory;  // 分類
    stock: BookStock;        // 蔵書数
}
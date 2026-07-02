import { BookCategory } from "./BookCategory";
import { BookStock } from "./BookStock";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 図書インターフェイス
 */
export interface Book {
    bookId: string;        // 図書Id(UUID)
    title: string;               // 書名
    author: string;              // 著者名
    category: {
        categoryId: string;
        name: string;
    };
    stock: number;
}
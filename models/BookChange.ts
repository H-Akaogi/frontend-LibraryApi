/**
 * 図書変更APIに送るリクエストDTO
 */
export interface BookChange {
    bookId: string; // 図書ID
    title: string;       // 書名
    author: string;      // 著者名
    stock: number;       // 蔵書数
}
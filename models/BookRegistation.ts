/**
 * 図書登録APIに送るリクエストDTO
 */
export interface BookRegistration {
    title: string;       // 書名
    author: string;      // 著者名
    categoryId: string;  // 分類Id(UUID)
    stock: number;       // 蔵書数
}
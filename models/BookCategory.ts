/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 分類インターフェイス
 */
export interface BookCategory {
    categoryUuid: string;  // 分類Id(UUID)
    name: string;          // 分類名
}
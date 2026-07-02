/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 蔵書インターフェイス
 */
export interface BookStock {
    stockUuid: string;  // 蔵書Id(UUID)
    stock: number;      // 蔵書数
}
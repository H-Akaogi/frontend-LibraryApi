/**
 * 演習 3-2 Rootレイアウトを作成する
 * Rootレイアウト（全ページ共通の枠組み）
 */

// app/layout.tsx
// グローバルなCSSを読み込む（Tailwind CSSなどを適用するため）
import "../globals.css";

// metadata はページのタイトルなどを設定するNext.jsの機能です（今回はそのまま使用します）
export const metadata = {
    title: "React & Next.js フロントエンド開発",
    description: "3-4. Next.jsの画面構成(App Router)",
};

// RootLayoutコンポーネント
// { children } に各ページ (page.tsx) の内容が自動的にはめ込まれます
export default function RootLayout({
    children,
}: {
    // {children: React.ReactNode} はTypeScriptの型定義.
    // React.ReactNode型のchildrenというプロパティを持っているオブジェクト
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body className="flex flex-col min-h-screen">

                {/* === ここから：全ページ共通のヘッダー === */}
                <header className="bg-blue-600 text-white p-4 shadow-md">
                    <div className="container mx-auto">
                        <h1 className="text-xl font-bold">演習アプリケーション</h1>
                        <nav className="mt-2 text-sm flex gap-4">
                            {/* href="..."でURLパスを指定する */}
                            <a href="/" className="hover:underline">ホーム</a>
                            <a href="/chapter03/ex3-2/about" className="hover:underline">アバウト</a>
                            <a href="/chapter03/ex3-2/profile/setting" className="hover:underline">設定</a>
                            {/* 演習 3-3 データ受け渡しできるコンポーネントを作成する */}
                            <a href="/chapter03/ex3-3" className="hover:underline">商品一覧</a>
                            {/* 
                            リスト3-3 コンポーネント間のデータ受け渡し
                            リスト4-7 UserCard(ユーザー一覧)コンポーネントの実装
                             */}
                            <a href="/chapter04/list4/list" className="hover:underline">ユーザー（リスト）</a>
                            {/* リスト4-8 UserTable(ユーザー一覧)コンポーネントの実装 */}
                            <a href="/chapter04/list4/table" className="hover:underline">ユーザー（表）</a>
                            {/* 演習 4-1 計算機を作成する(加算機能のみ) */}
                            <a href="/chapter04/ex4-1" className="hover:underline">計算機(ラジオボタン)</a>
                            {/* 演習 4-2 計算の種類をプルダウンで選択可能にする */}
                            <a href="/chapter04/ex4-2" className="hover:underline">計算機(プルダウン)</a>
                            {/* 演習 5-2 shadcn/uiの利用 */}
                            <a href="/chapter05/calc" className="hover:underline">計算機(shadcn/ui)</a>
                            {/* 演習 5-3 shadcn/uiの利用 */}
                            <a href="/chapter05/survey" className="hover:underline">選択コンポーネント</a>
                            <a href="/chapter04/list4/profile" className="hover:underline">プロフィール</a>
                        </nav>
                    </div>
                </header>
                {/* === ここまで：ヘッダー === */}

                {/* === ここに各ページのコンテンツ (page.tsx) が入る === */}
                <main className="flex-grow container mx-auto p-4">
                    {/* 例）商品一覧ページにアクセスした場合、<ProductListPage />の表示内容が{children}に入る */}
                    {children}
                </main>

                {/* === ここから：全ページ共通のフッター === */}
                <footer className="bg-gray-800 text-white text-center p-3 text-sm">
                    © 2026 Fullness, Inc. All rights reserved.
                </footer>
                {/* === ここまで：フッター === */}

            </body>
        </html>
    );
}
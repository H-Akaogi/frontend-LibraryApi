/**
 * 演習 5-5 ナビゲーションメニューで新しい共通ページを作成する
 * メニューのレイアウト
 */
import Header from "./header";
import Footer from "./footer";

export default function FrontMenuLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
            {/* === ここからヘッダー === */}
            <Header />
            {/* === ここまで：ヘッダー === */}

            {/* === ここに各ページのコンテンツ page.tsx が入る === */}
            <main className="flex-1 container mx-auto p-4 md:p-8">
                {children}
            </main>

            {/* === ここからフッター === */}
            <Footer />
            {/* === ここまで：フッター === */}
        </div>
    );
}
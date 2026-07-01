/**
 * 演習 5-5 ナビゲーションメニューで新しい共通ページを作成する
 * メニューのフッター
 */
export default function Footer() {
    return (
        <footer className="bg-blue-100 border-t border-blue-200 p-4 text-center text-sm text-blue-900 mt-auto">
            &copy; {new Date().getFullYear()} Fullness,Inc. All Rights Reserved.
        </footer>
    );
}
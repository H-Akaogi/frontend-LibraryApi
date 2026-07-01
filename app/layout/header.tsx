/**
 * 演習 5-5 ナビゲーションメニューで新しい共通ページを作成する
 * メニューのヘッダー
 */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


export default function Header() {

    const router = useRouter();



    return (
        <header className="border-b border-blue-200 bg-blue-100 p-4 shadow-sm">
            <div className="container mx-auto flex items-center justify-between">

                <h1 className="text-xl font-bold text-blue-900">
                    <Link href="/">図書管理システム</Link>
                </h1>

                <NavigationMenu>
                    {/* 💡 項目が増えたため、スマホなどの狭い画面でも綺麗に折り返せるよう flex-wrap をこっそり付けておくと安全です */}
                    <NavigationMenuList className="flex flex-wrap justify-end">
                        {/* メニュー2：ログアウト */}
                        {/* ログイン中のみ[ログアウト]を表示 */}
                        {status === "authenticated" && (
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={`${navigationMenuTriggerStyle()} text-blue-900 bg-transparent hover:bg-blue-200`}>
                                    {/* Linkからbuttonに変更して、signOut()関数を呼び出す */}
                                    <button type="button">ログアウト</button>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}
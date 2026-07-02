/**
 * 演習 5-5 ナビゲーションメニューで新しい共通ページを作成する
 * メニューのヘッダー
 */
"use client";

import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { signOut } from "next-auth/react";
// import { useState } from "react";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
// import { Spinner } from "@/components/ui/spinner";

export default function Header() {
    // const router = useRouter();

    // ログアウト中かどうかを管理するState
    // const [isLoggingOut, setIsLoggingOut] = useState(false);

    // ログアウト処理
    // const handleLogout = async () => {
    //   try {
    //     setIsLoggingOut(true);

    //     await signOut({
    //       redirect: false,
    //     });

    //     toast.success("ログアウトしました。");
    //     router.push("/login");
    //   } catch (error) {
    //     toast.error("ログアウトに失敗しました。");
    //     setIsLoggingOut(false);
    //   }
    // };

    return (
        <header className="border-b border-blue-200 bg-blue-100 p-4 shadow-sm">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold text-blue-900">
                    <Link href="/">図書管理システム</Link>
                </h1>

                <NavigationMenu>
                    <NavigationMenuList className="flex flex-wrap justify-end">
                        {/* メニュー2：ログアウト */}
                        {/* 今はログアウト機能未実装のため、見た目だけ配置 */}
                        <NavigationMenuItem>
                            <Button
                                type="button"
                                className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-200 px-4 py-2 text-blue-900 hover:bg-blue-300 hover:text-blue-900 active:text-blue-900"
                                // disabled={isLoggingOut}
                                // onClick={handleLogout}
                                disabled
                            >
                                {/* {isLoggingOut ? (
                  <Spinner className="h-4 w-4" />
                ) : ( */}
                                <img
                                    src="/icons/logout.svg"
                                    alt="ログアウトアイコン"
                                    className="h-4 w-4"
                                />
                                {/* )} */}

                                ログアウト
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}
/**
 * 演習 5-5 ナビゲーションメニューで新しい共通ページを作成する
 * メニューのヘッダー
 */
"use client";

import Link from "next/link";
//import { signOut } from "next-auth/react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
    Bell,
    BellRing,
    BellDot,
    BellOff,
} from "lucide-react";
import { InfoDialog } from "@/components/common/InfoDialog";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
export default function Header() {
    // モーダルのためのフック
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    return (
        <>
            <header className="border-b border-blue-200 bg-blue-100 p-4 shadow-sm">
                <div className="container mx-auto flex items-center justify-between">
                    <h1>
                        <Link
                            href="/"
                            className="flex items-center gap-3 text-xl font-bold text-blue-900"
                        >
                            <img
                                src="/icons/bookstand.svg"
                                alt="図書管理システムアイコン"
                                className="h-8 w-8"
                            />
                            <span>図書管理システム</span>
                        </Link>
                    </h1>

                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-wrap justify-end">
                            {/* お知らせ表示ベルマーク */}
                            <NavigationMenuItem>
                                <Button
                                    type="button"
                                    className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-200 px-4 py-2 text-blue-900 hover:bg-blue-300 hover:text-blue-900 active:text-blue-900"
                                    onClick={() => setIsInfoOpen(true)}
                                >
                                    <BellRing className="h-5 w-5" />
                                </Button>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Button
                                    type="button"
                                    className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-200 px-4 py-2 text-blue-900 hover:bg-blue-300 hover:text-blue-900 active:text-blue-900"
                                    disabled
                                >

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
            <InfoDialog
                open={isInfoOpen}
                onOpenChange={setIsInfoOpen}
            />
        </>
    );
}
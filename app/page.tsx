"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";

export default function TopPage() {
    // スピナー表示
    const router = useRouter();
    const [loadingPath, setLoadingPath] = useState<string | null>(null);
    // ログアウト中かどうかを管理するState
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    // 画面遷移時に呼び出す関数
    const handleNavigate = (path: string) => {
        setLoadingPath(path);
        router.push(path);
    };
    // 他のボタンを押せないようにするための判定
    const isAnyLoading = loadingPath !== null || isLoggingOut;
    return (
        <div className="p-8 max-w-4xl mx-auto space-y-8">

            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">蔵書を、いつでもどこでも</h1>
                <p className="text-gray-500">蔵書の検索・登録・管理を、いつでもどこでも。</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <Card className="hover:shadow-lg transition-shadow  border-blue-200 bg-white">
                    <CardHeader>
                        <CardTitle className="font-bold">🌱 ホーム画面</CardTitle>
                        <CardDescription>ログイン画面を作っていないので、ホーム画面に遷移します</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button
                            variant="outline"
                            className="w-full"
                            disabled={loadingPath !== null}
                            onClick={() => handleNavigate("/home")}
                        >
                            {loadingPath === "/home" && (
                                <Spinner className="mr-2 h-4 w-4" />
                            )}
                            ホーム画面へ
                        </Button>
                    </CardContent>
                </Card>

                {/* メニュー3：ユーザー登録 */}
                <Card className="hover:shadow-lg transition-shadow  border-blue-200 bg-white">
                    <CardHeader>
                        <CardTitle className="font-bold">🌱 ユーザー登録</CardTitle>
                        <CardDescription>新しいユーザーをシステムに登録します</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button
                            variant="outline"
                            className="w-full"
                            disabled={loadingPath !== null}
                            onClick={() => handleNavigate("/register")}
                        >
                            {loadingPath === "/register" && (
                                <Spinner className="mr-2 h-4 w-4" />
                            )}
                            ユーザー登録画面へ
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
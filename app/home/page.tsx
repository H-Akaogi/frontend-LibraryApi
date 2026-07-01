"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";



export default function HomePage() {

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
        <h1 className="text-3xl font-bold tracking-tight">トップメニュー</h1>
        <p className="text-gray-500">操作したいメニューを選択してください</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">




        {/* メニュー4：図書検索 */}
        <Card className="hover:shadow-lg transition-shadow  border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="font-bold">🔎 図書検索</CardTitle>
            <CardDescription>登録されている図書をキーワードで検索します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200"
              disabled={loadingPath !== null}
              onClick={() => handleNavigate("/books")}
            >
              {loadingPath === "/books" && (
                <Spinner className="mr-2 h-4 w-4" />
              )}
              検索画面へ
            </Button>
          </CardContent>
        </Card>

        {/* メニュー5：図書登録 */}
        <Card className="hover:shadow-lg transition-shadow  border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="font-bold">📦 図書登録</CardTitle>
            <CardDescription>新しい図書をシステムに登録します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="hover:text-blue-900 hover:bg-blue-300 active:text-blue-900 w-full text-blue-900 bg-blue-200 border-blue-200"
              disabled={isAnyLoading}
              onClick={() => handleNavigate("/books/new")}
            >
              {loadingPath === "/books/new" && (
                <Spinner className="mr-2 h-4 w-4" />
              )}
              登録画面へ進む
            </Button>
          </CardContent>
        </Card>

        {/* メニュー6：図書変更 */}
        <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="font-bold">🪄 図書の変更</CardTitle>
            <CardDescription>登録済みの図書情報を変更・更新します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="secondary"
              className="w-full"
              disabled={isAnyLoading}
              onClick={() => handleNavigate("/books/edit")}
            >
              {loadingPath === "/books/edit" && (
                <Spinner className="mr-2 h-4 w-4" />
              )}
              変更画面へ進む
            </Button>
          </CardContent>
        </Card>

        {/* メニュー7：図書削除 */}
        <Card className="hover:shadow-lg transition-shadow border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="font-bold">🪄 図書の削除</CardTitle>
            <CardDescription>登録済みの図書情報を削除します</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="secondary"
              className="w-full"
              disabled={isAnyLoading}
              onClick={() => handleNavigate("/books/delete")}
            >
              {loadingPath === "/books/delete" && (
                <Spinner className="mr-2 h-4 w-4" />
              )}
              変更画面へ進む
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
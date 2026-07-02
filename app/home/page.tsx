"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";

export default function HomePage() {
  // スピナー表示
  const router = useRouter();
  const [loadingPath, setLoadingPath] = useState<string | null>(null);

  // 画面遷移時に呼び出す関数
  const handleNavigate = (path: string) => {
    setLoadingPath(path);
    router.push(path);
  };

  // 他のカードを押せないようにするための判定
  const isAnyLoading = loadingPath !== null;

  return (
    <div className="min-h-[calc(100vh-120px)] bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="text-center space-y-3">

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            メニュー
          </h1>

          <p className="text-slate-500">
            利用する機能を選択してください。
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {/* メニュー4：図書検索 */}
          <Card
            role="button"
            tabIndex={0}
            onClick={() => {
              if (!isAnyLoading) {
                handleNavigate("/books");
              }
            }}
            onKeyDown={(event) => {
              if (!isAnyLoading && (event.key === "Enter" || event.key === " ")) {
                handleNavigate("/books");
              }
            }}
            className={`
              group cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm
              transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-blue-300
              ${isAnyLoading && loadingPath !== "/books" ? "pointer-events-none opacity-50" : ""}
            `}
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-100">
                  {loadingPath === "/books" ? (
                    <Spinner className="h-6 w-6 text-blue-600" />
                  ) : (
                    <Image
                      src="/icons/book-search.svg"
                      alt="図書検索アイコン"
                      width={28}
                      height={28}
                    />
                  )}
                </div>

                <div className="space-y-1">
                  <CardTitle className="text-lg font-bold text-slate-900">
                    図書検索
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-slate-500">
                    書名のキーワードで蔵書を検索します。
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                <span>
                  {loadingPath === "/books" ? "移動中..." : "検索画面へ"}
                </span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </CardContent>
          </Card>

          {/* メニュー5：図書登録 */}
          <Card
            role="button"
            tabIndex={0}
            onClick={() => {
              if (!isAnyLoading) {
                handleNavigate("/books/new");
              }
            }}
            onKeyDown={(event) => {
              if (!isAnyLoading && (event.key === "Enter" || event.key === " ")) {
                handleNavigate("/books/new");
              }
            }}
            className={`
              group cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm
              transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-blue-300
              ${isAnyLoading && loadingPath !== "/books/new" ? "pointer-events-none opacity-50" : ""}
            `}
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-100">
                  {loadingPath === "/books/new" ? (
                    <Spinner className="h-6 w-6 text-blue-600" />
                  ) : (
                    <Image
                      src="/icons/book-add.svg"
                      alt="図書登録アイコン"
                      width={28}
                      height={28}
                    />
                  )}
                </div>

                <div className="space-y-1">
                  <CardTitle className="text-lg font-bold text-slate-900">
                    図書登録
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-slate-500">
                    新しい図書を蔵書に登録します。
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                <span>
                  {loadingPath === "/books/new" ? "移動中..." : "登録画面へ"}
                </span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </CardContent>
          </Card>

          {/* メニュー6：図書変更 */}
          <Card
            role="button"
            tabIndex={0}
            onClick={() => {
              if (!isAnyLoading) {
                handleNavigate("/books/edit");
              }
            }}
            onKeyDown={(event) => {
              if (!isAnyLoading && (event.key === "Enter" || event.key === " ")) {
                handleNavigate("/books/edit");
              }
            }}
            className={`
              group cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm
              transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-blue-300
              ${isAnyLoading && loadingPath !== "/books/edit" ? "pointer-events-none opacity-50" : ""}
            `}
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-100">
                  {loadingPath === "/books/edit" ? (
                    <Spinner className="h-6 w-6 text-blue-600" />
                  ) : (
                    <Image
                      src="/icons/book-edit.svg"
                      alt="図書変更アイコン"
                      width={28}
                      height={28}
                    />
                  )}
                </div>

                <div className="space-y-1">
                  <CardTitle className="text-lg font-bold text-slate-900">
                    図書変更
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-slate-500">
                    検索して選んだ図書の情報を変更します。
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                <span>
                  {loadingPath === "/books/edit" ? "移動中..." : "変更画面へ"}
                </span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </CardContent>
          </Card>

          {/* メニュー7：図書削除 */}
          <Card
            role="button"
            tabIndex={0}
            onClick={() => {
              if (!isAnyLoading) {
                handleNavigate("/books/delete");
              }
            }}
            onKeyDown={(event) => {
              if (!isAnyLoading && (event.key === "Enter" || event.key === " ")) {
                handleNavigate("/books/delete");
              }
            }}
            className={`
              group cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm
              transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-blue-300
              ${isAnyLoading && loadingPath !== "/books/delete" ? "pointer-events-none opacity-50" : ""}
            `}
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-100">
                  {loadingPath === "/books/delete" ? (
                    <Spinner className="h-6 w-6 text-blue-600" />
                  ) : (
                    <Image
                      src="/icons/book-delete.svg"
                      alt="図書削除アイコン"
                      width={28}
                      height={28}
                    />
                  )}
                </div>

                <div className="space-y-1">
                  <CardTitle className="text-lg font-bold text-slate-900">
                    図書削除
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-slate-500">
                    検索して選んだ図書を蔵書から削除します。
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                <span>
                  {loadingPath === "/books/delete" ? "移動中..." : "削除画面へ"}
                </span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
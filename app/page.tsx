"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    BookOpen,
    Home,
    UserPlus,
    ArrowRight,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";

export default function TopPage() {
    const router = useRouter();
    const [loadingPath, setLoadingPath] = useState<string | null>(null);

    const handleNavigate = (path: string) => {
        setLoadingPath(path);
        router.push(path);
    };

    const isAnyLoading = loadingPath !== null;

    const menuItems = [
        {
            title: "ホーム画面",
            description: "図書検索・登録・変更・削除などのメニューへ移動します。",
            buttonText: "ホーム画面へ",
            path: "/home",
            icon: Home,
            iconBg: "bg-sky-50",
            iconText: "text-sky-600",
            hoverBg: "group-hover:bg-sky-100",
            actionBg: "group-hover:bg-sky-50",
            actionText: "group-hover:text-sky-700",
        },
        {
            title: "ユーザー登録",
            description: "新しいユーザーを図書管理システムに登録します。",
            buttonText: "ユーザー登録画面へ",
            path: "/register",
            icon: UserPlus,
            iconBg: "bg-emerald-50",
            iconText: "text-emerald-600",
            hoverBg: "group-hover:bg-emerald-100",
            actionBg: "group-hover:bg-emerald-50",
            actionText: "group-hover:text-emerald-700",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 px-6 py-10">
            <div className="mx-auto max-w-5xl space-y-10">
                <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div className="relative px-8 py-10 md:px-12 md:py-14">
                        <div className="absolute right-8 top-8 hidden h-28 w-28 rounded-full bg-sky-50 md:block" />
                        <div className="absolute bottom-8 right-28 hidden h-16 w-16 rounded-full bg-emerald-50 md:block" />

                        <div className="relative max-w-2xl space-y-5">
                            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700">
                                <BookOpen className="h-4 w-4" />
                                Library Management System
                            </div>

                            <div className="space-y-3">
                                <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                                    蔵書を、いつでもどこでも
                                </h1>

                                <p className="text-base leading-relaxed text-slate-500 md:text-lg">
                                    図書の検索・登録・変更・削除を、ひとつの画面からわかりやすく管理できます。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold text-slate-900">
                            はじめに
                        </h2>
                        <p className="text-sm text-slate-500">
                            利用する画面を選択してください。
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isLoading = loadingPath === item.path;

                            return (
                                <Card
                                    key={item.title}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => {
                                        if (!isAnyLoading) {
                                            handleNavigate(item.path);
                                        }
                                    }}
                                    onKeyDown={(event) => {
                                        if (
                                            !isAnyLoading &&
                                            (event.key === "Enter" || event.key === " ")
                                        ) {
                                            handleNavigate(item.path);
                                        }
                                    }}
                                    className={`
                                        group cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-sm
                                        transition-all duration-200 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md
                                        focus:outline-none focus:ring-2 focus:ring-sky-300
                                        ${isAnyLoading && !isLoading ? "pointer-events-none opacity-50" : ""}
                                    `}
                                >
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <div
                                                className={`
                                                    flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl
                                                    ${item.iconBg} ${item.hoverBg} transition-colors
                                                `}
                                            >
                                                {isLoading ? (
                                                    <Spinner className={`h-6 w-6 ${item.iconText}`} />
                                                ) : (
                                                    <Icon className={`h-6 w-6 ${item.iconText}`} />
                                                )}
                                            </div>

                                            <div className="space-y-1">
                                                <CardTitle className="text-lg font-bold text-slate-900">
                                                    {item.title}
                                                </CardTitle>
                                                <CardDescription className="leading-relaxed text-slate-500">
                                                    {item.description}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <div
                                            className={`
                                                flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3
                                                text-sm font-medium text-slate-700 transition-colors
                                                ${item.actionBg} ${item.actionText}
                                            `}
                                        >
                                            <span>
                                                {isLoading ? "移動中..." : item.buttonText}
                                            </span>

                                            {isLoading ? (
                                                <Spinner className="h-4 w-4" />
                                            ) : (
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}
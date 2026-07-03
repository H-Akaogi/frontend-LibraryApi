"use client";

import { BellRing } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { notices, typeClasses } from "./notice";

export const NoticeCard = () => {
    return (
        <Card className="overflow-hidden rounded-2xl border-blue-100 bg-white shadow-sm">
            <CardHeader className="rounded-t-2xl bg-blue-50 px-4 py-3">
                <CardTitle className="flex items-center gap-2 text-lg font-bold text-blue-900">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
                        <BellRing className="h-5 w-5 text-blue-600" />
                    </div>
                    お知らせ
                </CardTitle>

                <p className="text-sm text-blue-700">
                    最新のお知らせを表示しています
                </p>
            </CardHeader>

            <CardContent className="space-y-3 p-4">
                {notices.slice(0, 3).map((notice) => (
                    <div
                        key={notice.date + notice.message}
                        className="rounded-xl border border-slate-100 bg-slate-50 p-3"
                    >
                        <div className="mb-2 flex items-center justify-between gap-2">
                            <span
                                className={`rounded-full px-2.5 py-1 text-xs font-bold ${typeClasses[notice.type]
                                    }`}
                            >
                                {notice.type}
                            </span>

                            <span className="text-xs text-slate-500">
                                {notice.date}
                            </span>
                        </div>

                        <p className="text-sm font-medium text-slate-700">
                            {notice.message}
                        </p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};
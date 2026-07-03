"use client";

import { Bell } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

type InfoDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const InfoDialog = ({ open, onOpenChange }: InfoDialogProps) => {
    const notices = [
        {
            date: "2025/05/18",
            type: "システム",
            message: "システムメンテナンスのお知らせ",
        },
        {
            date: "2025/05/15",
            type: "イベント",
            message: "読書週間イベントを開催します",
        },
        {
            date: "2025/05/10",
            type: "重要",
            message: "延滞資料の返却にご協力ください",
        },
    ];

    const typeClasses = {
        システム: "bg-sky-100 text-sky-700",
        イベント: "bg-emerald-100 text-emerald-700",
        重要: "bg-red-100 text-red-700",
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-xl rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl font-bold text-slate-900">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100">
                            <Bell className="h-5 w-5 text-sky-700" />
                        </span>
                        お知らせ
                    </DialogTitle>

                    <DialogDescription>
                        図書管理システムからのお知らせです。
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-4 space-y-3">
                    {notices.map((notice) => (
                        <div
                            key={notice.date + notice.message}
                            className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                        >
                            <div className="mb-2 flex items-center gap-2">
                                <span className="text-sm text-slate-500">
                                    {notice.date}
                                </span>

                                <span
                                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${typeClasses[
                                        notice.type as keyof typeof typeClasses
                                        ]
                                        }`}
                                >
                                    {notice.type}
                                </span>
                            </div>

                            <p className="text-sm font-medium text-slate-700">
                                {notice.message}
                            </p>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};
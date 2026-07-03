"use client";

import { Bell } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { notices, typeClasses } from "./notice";

type InfoDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const InfoDialog = ({ open, onOpenChange }: InfoDialogProps) => {

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
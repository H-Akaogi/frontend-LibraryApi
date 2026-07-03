"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Clock, Info } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const LibraryCalendar = () => {
    const [date, setDate] = useState<Date | undefined>();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        setDate(new Date());
    }, []);

    return (
        <Card className="overflow-hidden rounded-2xl border-blue-100 bg-white shadow-sm">
            <CardHeader className="rounded-2xl  bg-blue-50 px-4 py-3">

                <CardTitle className="flex items-center gap-2 text-lg font-bold text-blue-900">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
                        <CalendarDays className="h-5 w-5 text-blue-600" />
                    </div>
                    開館カレンダー
                </CardTitle>

                <p className="text-sm text-blue-700">
                    開館日・休館日を確認できます
                </p>
            </CardHeader>

            <CardContent className="space-y-5 p-4">
                <div className="rounded-2xl border bg-slate-50 p-2">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="mx-auto rounded-xl bg-white p-3"
                        modifiers={{
                            closed: [
                                new Date(2025, 4, 3),
                                new Date(2025, 4, 4),
                                new Date(2025, 4, 5),
                                new Date(2025, 4, 10),
                                new Date(2025, 4, 11),
                                new Date(2025, 4, 17),
                                new Date(2025, 4, 18),
                                new Date(2025, 4, 24),
                                new Date(2025, 4, 25),
                                new Date(2025, 4, 31),
                            ],
                            short: [
                                new Date(2025, 4, 15),
                                new Date(2025, 4, 29),
                            ],
                        }}
                        modifiersClassNames={{
                            closed:
                                "bg-red-100 text-red-700 hover:bg-red-200 hover:text-red-800",
                            short:
                                "bg-amber-100 text-amber-700 hover:bg-amber-200 hover:text-amber-800",
                            selected:
                                "bg-blue-600 text-white hover:bg-blue-700 hover:text-white",
                            today:
                                "border border-blue-400 font-bold text-blue-700",
                        }}
                    />
                </div>

                <div className="rounded-2xl bg-blue-50 p-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-blue-900">
                        <Clock className="h-4 w-4" />
                        本日の開館時間
                    </div>

                    <p className="mt-2 text-2xl font-bold text-blue-900">
                        9:00〜18:00
                    </p>

                    <p className="mt-1 text-xs text-blue-700">
                        ※ 短縮開館日は 9:00〜13:00 です
                    </p>
                </div>

                <div className="grid gap-2 text-sm">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-blue-500" />
                            <span className="font-medium text-slate-700">開館日</span>
                        </div>
                        <span className="text-slate-500">9:00〜18:00</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-red-50 px-3 py-2">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-500" />
                            <span className="font-medium text-red-700">休館日</span>
                        </div>
                        <span className="text-red-500">土日・祝日</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-amber-50 px-3 py-2">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-amber-400" />
                            <span className="font-medium text-amber-700">短縮開館</span>
                        </div>
                        <span className="text-amber-600">9:00〜13:00</span>
                    </div>
                </div>

                {date && (
                    <div className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-600">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                        <p>
                            選択日：
                            <span className="font-bold text-slate-800">
                                {date.toLocaleDateString("ja-JP", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    weekday: "short",
                                })}
                            </span>
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
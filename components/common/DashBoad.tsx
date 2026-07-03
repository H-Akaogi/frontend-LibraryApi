"use client";

import { BookOpen, BookCheck, AlertCircle } from "lucide-react";
import { useSearchBook } from "../hooks/useSearchBook";

export const BookDashboard = () => {
    const { books } = useSearchBook();

    const totalBooks = books.length;
    const availableBooks = books.filter((book) => book.stock > 0).length;
    const outOfStockBooks = books.filter((book) => book.stock === 0).length;
    const colorClasses = {
        blue: {
            bg: "bg-blue-50",
            text: "text-blue-600",
            icon: "text-blue-500",
        },
        green: {
            bg: "bg-green-50",
            text: "text-green-600",
            icon: "text-green-500",
        },
        red: {
            bg: "bg-red-50",
            text: "text-red-600",
            icon: "text-red-500",
        },
    };
    const dashboardItems = [
        {
            title: "登録図書数",
            value: totalBooks,
            unit: "冊",
            icon: BookOpen,
            color: "blue",
        },
        {
            title: "在庫あり",
            value: availableBooks,
            unit: "冊",
            icon: BookCheck,
            color: "green",
        },
        {
            title: "在庫なし",
            value: outOfStockBooks,
            unit: "冊",
            icon: AlertCircle,
            color: "red",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {dashboardItems.map((item) => {
                const Icon = item.icon;
                const colors = colorClasses[item.color as keyof typeof colorClasses];
                return (
                    <div
                        key={item.title}
                        className="rounded-xl border bg-white p-5 shadow-sm"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-2xl font-bold text-slate-800">
                                    {item.value}
                                    <span className="ml-1 text-sm font-medium">
                                        {item.unit}
                                    </span>
                                </p>
                            </div>

                            <Icon className={`h-8 w-8 ${colors.icon}`} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
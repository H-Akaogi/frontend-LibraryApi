export const notices = [
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
] as const;

export const typeClasses = {
    システム: "bg-sky-100 text-sky-700",
    イベント: "bg-emerald-100 text-emerald-700",
    重要: "bg-red-100 text-red-700",
} as const;
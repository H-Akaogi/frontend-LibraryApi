"use client";

import { Toaster } from "@/components/ui/sonner";

export const CommonSonner = () => {
    return <Toaster
        className="font-medium"
        position="top-center"
        richColors
        closeButton
        toastOptions={{
            classNames: {
                toast:
                    "min-w-[360px] rounded-xl border shadow-lg font-medium",
                title: "text-base font-bold",
                description: "text-sm",
                actionButton: "font-bold",
                cancelButton: "font-bold",
            }
        }}
    />;
};
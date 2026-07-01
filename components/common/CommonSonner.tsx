"use client";

import { Toaster } from "@/components/ui/sonner";

export const CommonSonner = () => {
    return <Toaster
        className="font-medium"
        position="top-right"
        richColors
    />;
};
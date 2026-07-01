"use client";

import { CheckCircle2Icon, InfoIcon } from "lucide-react";
import {
    Alert,
    AlertAction,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";

type CommonAlertProps = {
    title?: string;
    message: string;
    variant?: "default" | "destructive";
};

export const CommonAlert = ({
    title = "エラー",
    message,
    variant = "destructive",
}: CommonAlertProps) => {
    if (!message) {
        return null;
    }

    return (
        <Alert variant={variant} className="mb-6 p-4 animate-in fade-in slide-in-from-top-1 border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-50">
            <InfoIcon />
            {title && <AlertTitle className="font-medium">{title}</AlertTitle>}
            <AlertDescription className="font-medium">{message}</AlertDescription>
        </Alert>
    );
};
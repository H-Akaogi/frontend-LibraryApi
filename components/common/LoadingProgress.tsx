"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

/** 
 * プログレスバーの追加
 */
type LoadingProgressProps = {
    isLoading: boolean;
    message?: string;
};
export const LoadingProgress = ({
    isLoading,
    message = "処理中です..."
}: LoadingProgressProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (isLoading) {
            setProgress(13);

            const timer = setTimeout(() => {
                setProgress(66);
            }, 500);

            return () => clearTimeout(timer);
        }

        setProgress(0);
    }, [isLoading]);

    if (!isLoading) {
        return null;
    }

    return (
        <div className="mb-4">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-gray-500 mt-2 text-center">
                {message}
            </p>
        </div>
    );
};
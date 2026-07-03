"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

export const ShareButton = () => {
    const handleShare = async () => {
        const shareData = {
            title: "図書管理システム",
            text: "図書館の蔵書検索や貸出管理ができる図書管理システムです。",
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                return;
            }

            await navigator.clipboard.writeText(window.location.href);
            toast.success("URLをコピーしました");
        } catch (error) {
            console.error(error);
            toast.error("共有に失敗しました");
        }
    };

    return (
        <Button
            type="button"
            variant="outline"
            onClick={handleShare}
            className="gap-2"
        >
            <Share2 className="h-4 w-4" />
            共有
        </Button>
    );
};
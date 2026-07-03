"use client";

import Link from "next/link";
import {
    BookOpen,
    Search,
    PlusCircle,
    Trash2,
    Home,
    LogOut,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
    {
        title: "ホーム",
        url: "/home",
        icon: Home,
    },
    {
        title: "図書検索",
        url: "/books",
        icon: Search,
    },
    {
        title: "図書登録",
        url: "/books/new",
        icon: PlusCircle,
    },
    {
        title: "図書削除",
        url: "/books/delete",
        icon: Trash2,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <div className="flex items-center gap-2 px-2 py-2">
                    <BookOpen className="h-9 w-9 text-sky-700" />
                    <span className="text-lg font-bold text-sky-800">図書管理システム</span>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel
                        className="text-lg font-bold"
                    >メニュー</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu
                            className="text-lg font-medium"
                        >
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <LogOut />
                            <span>ログアウト</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
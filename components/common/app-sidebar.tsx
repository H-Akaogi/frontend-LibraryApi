"use client";

import Link from "next/link";
import {
    BookOpen,
    Search,
    PlusCircle,
    Trash2,
    Home,
    LogOut,
    Pencil,
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
        className: "text-slate-700 hover:bg-sky-50 hover:text-sky-700",
    },
    {
        title: "図書検索",
        url: "/books",
        icon: Search,
        className: "text-slate-700 hover:bg-sky-50 hover:text-sky-700",
    },
    {
        title: "図書登録",
        url: "/books/new",
        icon: PlusCircle,
        className: "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700",
    },
    {
        title: "図書変更",
        url: "/books/edit",
        icon: Pencil,
        className: "text-slate-700 hover:bg-orange-50 hover:text-orange-700",
    },
    {
        title: "図書削除",
        url: "/books/delete",
        icon: Trash2,
        className: "text-slate-700 hover:bg-red-50 hover:text-red-700",
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" className="border-r bg-white">
            <SidebarHeader className="border-b px-3 py-4 group-data-[collapsible=icon]:px-2">
                <div className="
                flex items-center gap-3 rounded-xl bg-sky-50 px-3 py-3
                group-data-[collapsible=icon]:justify-center
                group-data-[collapsible=icon]:bg-transparent
                group-data-[collapsible=icon]:px-0">
                    <div
                        className="
                    flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm
                    group-data-[collapsible=icon]:h-10
                    group-data-[collapsible=icon]:w-10
                    group-data-[collapsible=icon]:rounded-full
                    group-data-[collapsible=icon]:bg-sky-100
                    group-data-[collapsible=icon]:shadow-none">
                        <BookOpen className="h-6 w-6 text-sky-700" />
                    </div>

                    <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                        <span className="text-base font-bold text-sky-900">
                            図書管理
                        </span>
                        <span className="text-xs text-sky-700">
                            Library System
                        </span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-2 py-4">
                <SidebarGroup>
                    <SidebarGroupLabel className="mb-2 px-3 text-xs font-bold tracking-wider text-slate-500">
                        MENU
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className={`h-11 rounded-xl px-3 text-base font-medium transition-colors ${item.className}`}
                                    >
                                        <Link href={item.url}>
                                            <item.icon className="h-5 w-5" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t p-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="h-11 rounded-xl px-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900">
                            <LogOut className="h-5 w-5" />
                            <span>ログアウト</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
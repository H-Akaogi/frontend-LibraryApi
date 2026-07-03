import Header from "./header";
import Footer from "./footer";
import { AppSidebar } from "@/components/common/app-sidebar";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

export default function FrontMenuLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full flex-col bg-slate-50 font-sans">
                <Header />

                <div className="flex flex-1">
                    <AppSidebar />

                    <SidebarInset>
                        <main className="flex-1 p-6">
                            <SidebarTrigger className="mb-4" />
                            {children}
                        </main>
                    </SidebarInset>
                </div>

                <Footer />
            </div>
        </SidebarProvider>
    );
}
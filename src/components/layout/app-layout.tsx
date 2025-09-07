"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  PanelLeft,
  Sparkles,
  Users,
} from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Directory", icon: Users },
  { href: "/jobs", label: "Job Board", icon: Briefcase },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/mentor-finder", label: "Mentor Finder", icon: Sparkles },
];

function MainSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="border-r border-border/80 bg-background"
    >
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="w-7 h-7 text-primary" />
          <span
            className={cn(
              "font-bold text-lg whitespace-nowrap transition-opacity duration-300",
              state === "collapsed" && "opacity-0 hidden"
            )}
          >
            AlumniVerse
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                variant="ghost"
                isActive={pathname === item.href}
                tooltip={{ children: item.label, side: "right" }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <PanelLeft />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-72 bg-card">
        <div className="p-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="w-7 h-7 text-primary" />
            <span className="font-bold text-lg">AlumniVerse</span>
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <div className="flex flex-col w-full md:peer-data-[state=expanded]:pl-[--sidebar-width] md:peer-data-[state=collapsed]:peer-data-[collapsible=icon]:pl-[--sidebar-width-icon] transition-[padding-left] duration-300 ease-in-out">
        <header className="p-2 md:hidden flex items-center gap-2 border-b">
          <MobileSidebar />
           <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="font-bold">AlumniVerse</span>
          </Link>
        </header>
        <SidebarInset className="bg-background max-h-screen overflow-hidden flex flex-col">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

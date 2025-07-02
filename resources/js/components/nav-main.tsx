import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();

    const getStatusDisplay = (item: NavItem) => {
        // возврат false только при явном указывании
        const itemNotNull = item.isDisplay !== undefined && item.isDisplay !== null;
        return (itemNotNull && item.isDisplay) || !itemNotNull;
    };

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Панель упраления</SidebarGroupLabel>
            <SidebarMenu>
                {items.map(
                    (item) =>
                        getStatusDisplay(item) && (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild isActive={page.url.startsWith(item.href)} tooltip={{ children: item.title }}>
                                    <Link href={item.href} prefetch>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ),
                )}
            </SidebarMenu>
        </SidebarGroup>
    );
}

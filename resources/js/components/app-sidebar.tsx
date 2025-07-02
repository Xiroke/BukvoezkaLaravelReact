import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { LayoutGrid } from 'lucide-react';

const getMainNavItems = (is_admin: boolean): NavItem[] => [
    {
        title: 'Кабинет',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Создать карточку',
        href: route('books.create'),
        icon: LayoutGrid,
    },
    {
        title: 'Панель администратора',
        href: route('books.review'),
        icon: LayoutGrid,
        isDisplay: is_admin,
    },
];

//пример
// const footerNavItems: NavItem[] = [
//     {
//         title: 'Repository',
//         href: 'https://github.com/laravel/react-starter-kit',
//         icon: Folder,
//     },
//     {
//         title: 'Documentation',
//         href: 'https://laravel.com/docs/starter-kits#react',
//         icon: BookOpen,
//     },
// ];

const footerNavItems: NavItem[] = [];

export function AppSidebar() {
    const { is_admin }: { is_admin: boolean } = usePage().props;

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarContent>
                <NavMain items={getMainNavItems(is_admin)} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isDisplay?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    fio: string;
    phone: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface BookType {
    id: number;
    title: string;
    author: string;
    is_my_book: boolean;
    is_valid: boolean | null;
    reject_reason: string | null;
    publisher: string | null;
    year: number | null;
    typeBinding: string | null;
    quality: string | null;
    created_at: string;
    updated_at: string;
}

export const bindingEnum = ['твердый', 'мягкий'];
export type typeBindingType = 'твердый' | 'мягкий';

export const qualityEnum = ['идеальное', 'нормальное', 'требует внимания', 'годится чтобы подпирать ножку стола'];
export type qualityType = 'идеальное' | 'нормальное' | 'требует внимания' | 'годится чтобы подпирать ножку стола';

export type BookForm = {
    title: string;
    author: string;
    is_my_book: boolean | null;
    publisher: string | null;
    year: number | null;
    typeBinding: typeBindingType | null;
    quality: qualityType | null;
};

export interface PropsHtmlChildren<HTMLElementType extends HTMLElement = HTMLElement> extends React.HTMLAttributes<HTMLElementType> {
    children?: React.ReactNode;
}

export type PaginateLinkType = { url: string; label: string; active: boolean };

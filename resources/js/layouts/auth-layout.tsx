import LayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function Layout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <LayoutTemplate title={title} description={description} {...props}>
            {children}
        </LayoutTemplate>
    );
}

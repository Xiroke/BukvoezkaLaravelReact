import BlockCards, { BookCardDefault } from '@/components/book/BookCards';
import { H2 } from '@/components/ui/Heading';
import AppLayout from '@/layouts/app-layout';
import { BookType, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Кабинет',
        href: route('dashboard'),
    },
];

export default function Dashboard({ books }: { books: BookType[] | undefined }) {
    // страница профиля
    const my_book_filtered = books?.filter((book) => !!book.is_my_book === true && !!book.is_valid === true);
    const want_get_filtered = books?.filter((book) => !!book.is_my_book === false && !!book.is_valid === true);
    const no_checked_filtered = books?.filter((book) => book.is_valid === null);
    const rejected_filtered = books?.filter((book) => book.is_valid === false);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Мой профиль" />

            <div className="flex flex-col gap-6 p-12 max-sm:items-center max-sm:p-4">
                <H2 className="mt-10">Текущие карточки книг</H2>
                <BlockCards title="Мои книги" cards={my_book_filtered} CardItem={BookCardDefault} />
                <BlockCards title="Хочу получить" cards={want_get_filtered} CardItem={BookCardDefault} />
                <BlockCards title="На рассмотрении" cards={no_checked_filtered} CardItem={BookCardDefault} />
                <BlockCards title="Отклоненные" cards={rejected_filtered} CardItem={BookCardDefault} cardProps={{ isHideButton: true }} />
            </div>
        </AppLayout>
    );
}

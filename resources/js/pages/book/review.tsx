import BlockCards, { BookCardDefault } from '@/components/book/BookCards';
import PaginationBookReview from '@/components/book/Pagination';
import { H2 } from '@/components/ui/Heading';
import AppLayout from '@/layouts/app-layout';
import { BookType, PaginateLinkType, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Рассмотрение карточек',
        href: route('books.review'),
    },
];

type PaginatedBookProps = {
    data: BookType[];
    current_page: number;
    last_page: number;
    // 0 - предыдущаая, last_page + 1 - следующая
    links: PaginateLinkType[];
};

export default function Review({ books }: { books: PaginatedBookProps | undefined }) {
    // проверка
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Мой профиль" />

            <div className="flex flex-col gap-6 p-12 max-sm:items-center max-sm:p-4">
                <H2 className="mt-10">Текущие карточки книг</H2>
                {books && (
                    <>
                        <BlockCards title="На рассмотрении" cards={books.data} cardProps={{ isCanAccept: true }} CardItem={BookCardDefault} />
                        <PaginationBookReview curentPage={books.current_page} numPages={books.last_page} links={books.links} />
                    </>
                )}
            </div>
        </AppLayout>
    );
}

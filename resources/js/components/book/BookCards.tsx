import { BookType } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { H3 } from '../ui/Heading';
import { Button } from '../ui/button';
import RejectBookDialog from './RejectBookDialog';

export const BookCardEmpty = () => {
    return (
        <div className="flex min-h-[250px] w-[100%] flex-col items-center justify-center rounded-xl border-2 px-6 py-6 lg:min-w-[300px]">
            Здесь пусто
        </div>
    );
};

type BookCardDefaultType = {
    book: BookType;
    // для очистки карточек
    setCards: CallableFunction | undefined;
    isCanAccept?: boolean;
    isHideButton?: boolean;
};

export const BookCardDefault = ({ book, setCards, isHideButton = false, isCanAccept = false }: BookCardDefaultType) => {
    const props = usePage().props;

    if (!book) {
        return <BookCardEmpty />;
    }

    const onPublicate = () => {
        router.patch(
            route('books.handleReviewStatus', book.id),
            {
                _token: props.csrf_token as string,
                is_accept: true,
            },
            {
                only: ['books'],
                preserveScroll: true,
            },
        );
    };

    const onReject = (reason: string) => {
        router.patch(
            route('books.handleReviewStatus', book.id),
            {
                _token: props.csrf_token as string,
                is_accept: false,
                reject_reason: reason,
            },
            {
                only: ['books'],
                preserveScroll: true,
            },
        );
    };

    const fields = [
        { title: 'Автор:', value: book.author },
        { title: 'Издательство:', value: book.publisher },
        { title: 'Год издательства:', value: book.year },
        { title: 'Качество:', value: book.quality },
        { title: 'Тип переплета:', value: book.typeBinding },
    ];

    if (book.is_valid == false) {
        fields.push({ title: 'Причина отклонения:', value: book.reject_reason });
    }

    return (
        <div className="flex min-h-[250px] flex-col rounded-xl border-2 px-6 py-6 lg:min-w-[300px] 2xl:max-w-[40vw]">
            <div className="mb-6 text-2xl">{book.title.length < 70 ? book.title : book.title.slice(0, 27) + '...'}</div>
            <div className="mb-4">
                {fields.map((field, index) => (
                    <div key={index} className="flex justify-between max-sm:flex-col">
                        <div className="text-xm font-medium max-sm:mt-2 max-sm:text-base">{field.title}</div>
                        <div className="max-sm:text-xm text-base">{field.value || '...'}</div>
                    </div>
                ))}
            </div>
            {!isHideButton && (
                <div className="mt-auto mb-0 flex gap-4">
                    {isCanAccept ? (
                        <>
                            <RejectBookDialog onApply={onReject} Trigger={<Button variant={'outline'}>Отклонить</Button>} />

                            <Button variant={'default'} onClick={onPublicate}>
                                Опубликовать
                            </Button>
                        </>
                    ) : (
                        <Button variant={'outline'} onClick={() => onReject('Отклонено пользователем')}>
                            Отклонить
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

const BlockCards = ({
    title,
    cards,
    CardItem,
    cardProps,
}: {
    title: string;
    cards: BookType[] | undefined;
    cardProps?: Omit<BookCardDefaultType, 'book' | 'setCards'>;
    CardItem: React.ComponentType<BookCardDefaultType>;
}) => {
    const [booksCards, setBooksCards] = useState<BookType[]>(cards ?? []);

    return (
        <div className="flex w-full flex-col">
            <H3 className="mt-4">{title}</H3>
            <div className="mt-4 grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
                {cards && cards?.length > 0 ? (
                    cards.map((book) => <CardItem key={book.id} book={book} setCards={setBooksCards} {...cardProps} />)
                ) : (
                    <BookCardEmpty />
                )}
            </div>
        </div>
    );
};

export default BlockCards;

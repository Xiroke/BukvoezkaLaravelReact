import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/layouts/auth-layout';
import { BookForm, bindingEnum, qualityEnum, qualityType, typeBindingType } from '@/types/index.d';

export default function CreateBook() {
    // создание книги
    const { data, setData, post, processing, errors } = useForm<BookForm>({
        title: '',
        author: '',
        is_my_book: null,
        publisher: null,
        year: null,
        typeBinding: null,
        quality: null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('books.store'));
    };

    return (
        <Layout title="Создать запрос на книгу" description="Заполните данные ниже">
            <Head title="Запрос" />

            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Название</Label>
                        <Input
                            id="title"
                            type="text"
                            required
                            tabIndex={1}
                            autoComplete="title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            placeholder="Капитанская дочка"
                        />
                        <InputError message={errors.title} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="author">Автор</Label>
                        <Input
                            id="author"
                            type="text"
                            required
                            tabIndex={2}
                            autoComplete="author"
                            value={data.author}
                            onChange={(e) => setData('author', e.target.value)}
                            placeholder="А.С. Пушкин"
                        />
                        <InputError message={errors.author} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="is_my_book">Статус книги</Label>
                        <RadioGroup className="mt-2" onValueChange={(value) => setData('is_my_book', value == 'true' ? true : false)}>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="false" id="r1" />
                                <Label htmlFor="r1">Хочу в свою библиотеку.</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="true" id="r2" />
                                <Label htmlFor="r2">Готов поделиться.</Label>
                            </div>
                        </RadioGroup>
                        <InputError message={errors.is_my_book} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="publisher">Издательство</Label>
                        <Input
                            id="publisher"
                            type="text"
                            tabIndex={3}
                            autoComplete="publisher"
                            value={data.publisher ?? ''}
                            onChange={(e) => setData('publisher', e.target.value)}
                            placeholder="Эксмо"
                        />
                        <InputError message={errors.publisher} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="year">Год издания</Label>
                        <Input
                            id="year"
                            type="number"
                            tabIndex={4}
                            autoComplete="year"
                            value={data.year ?? ''}
                            onChange={(e) => setData('year', Number(e.target.value))}
                            placeholder="1999"
                        />
                        <InputError message={errors.year} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="typeBinding">Тип переплета</Label>
                        <Select onValueChange={(value: typeBindingType) => setData('typeBinding', value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Выберите переплет" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Переплеты</SelectLabel>
                                    {bindingEnum.map((str) => (
                                        <SelectItem key={str} value={str}>
                                            {str}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <InputError message={errors.typeBinding} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="quality">Качество книги</Label>
                        <Select onValueChange={(value: qualityType) => setData('quality', value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Выберите качество" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Качества</SelectLabel>
                                    {qualityEnum.map((str) => (
                                        <SelectItem key={str} value={str}>
                                            {str}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <InputError message={errors.quality} />
                    </div>

                    <Button type="submit" className="w-full" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Отправить
                    </Button>
                    <a className="w-full" href={route('dashboard')}>
                        <Button type="button" className="w-full" variant={'outline'}>
                            Отмена
                        </Button>
                    </a>
                </div>
            </form>

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
        </Layout>
    );
}

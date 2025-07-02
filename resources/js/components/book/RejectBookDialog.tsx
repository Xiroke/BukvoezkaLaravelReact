import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ReactNode, useRef } from 'react';

const RejectBookDialog = ({ Trigger, onApply }: { onApply: (reason: string) => void; Trigger: ReactNode }) => {
    const reasonRef = useRef<HTMLInputElement>(null);
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>{Trigger}</DialogTrigger>
                <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
                    <DialogHeader>
                        <DialogTitle>Отлонение карточки книги</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="reject_reason">Введите причину отказа</Label>
                            <Input id="reject_reason" ref={reasonRef} name="reject_reason" placeholder="Причина отказа" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Закрыть</Button>
                        </DialogClose>
                        <Button type="submit" onClick={() => onApply(reasonRef.current?.value ?? '')}>
                            Отклонить
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
};

export default RejectBookDialog;

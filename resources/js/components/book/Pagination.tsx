import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { PaginateLinkType } from '@/types';

const PaginationBookReview = ({ curentPage, numPages, links }: { curentPage: number; numPages: number; links: PaginateLinkType[] }) => {
    const arrayOfNums = [...Array(numPages >= 5 ? 5 : numPages).keys()];
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    {/* путь к предыдущей странице */}
                    <PaginationPrevious href={links[0].url} />
                </PaginationItem>
                {arrayOfNums.map((num) => (
                    <PaginationItem key={num}>
                        <PaginationLink href={links[num + 1].url} isActive={num + 1 === curentPage}>
                            {num + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {numPages > 4 + curentPage && (
                    <>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    </>
                )}
                <PaginationItem>
                    {/* путь к следующей странице */}
                    <PaginationNext href={links[numPages + 1].url} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationBookReview;

const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
};

interface UsePaginationProps {
    totalItems          : number;
    currentPage         : number;
    itemsToShowEachSide : number;
}

interface UsePaginationResult {
    items: (number | string)[];
    totalPages: number;
    rangeStart: number;
    rangeEnd: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
}

export const usePagination = (
    {
        totalItems,
        currentPage,
        itemsToShowEachSide,
    }: UsePaginationProps): UsePaginationResult => {
    const totalPages = totalItems; // Each item gets its own page

    const items = (() => {
        const totalNumbers = itemsToShowEachSide * 2 + 1;
        let pageNumbers: (number | string)[] = [];

        if (totalPages <= totalNumbers) {
            // If we have fewer pages than the desired display count, show all pages
            pageNumbers = range(1, totalPages);
        } else {
            const leftSideNumbers = Math.min(currentPage - 1, itemsToShowEachSide);
            const rightSideNumbers = Math.min(totalPages - currentPage, itemsToShowEachSide);

            // Always show first page
            pageNumbers.push(1);

            // Add ellipsis after first page if needed
            if (currentPage - itemsToShowEachSide > 2) {
                pageNumbers.push("...");
            }

            // Add pages around current page
            const rangeStart = Math.max(2, currentPage - leftSideNumbers);
            const rangeEnd = Math.min(totalPages - 1, currentPage + rightSideNumbers);
            pageNumbers.push(...range(rangeStart, rangeEnd));

            // Add ellipsis before last page if needed
            if (totalPages - currentPage > itemsToShowEachSide + 1) {
                pageNumbers.push("...");
            }

            // Always show last page if we're not already at it
            if (rangeEnd < totalPages) {
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    })();

    return {
        items,
        totalPages,
        rangeStart: currentPage,
        rangeEnd: currentPage,
        hasPrevPage: currentPage > 1,
        hasNextPage: currentPage < totalPages,
    };
};

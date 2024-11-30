// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";
import { Div } from "../Element/Tags";
import { Text } from "../Typography/Text";
import { Spinner } from "../Spinner/Spinner";
import { Button } from "../Button/Button";

// HOOKS ===============================================================================================================
import { usePagination } from "./usePagination";

// STYLES ==============================================================================================================
import "./pagination.css";

// TYPES ===============================================================================================================
import { PaginationProps, PaginationElementType, RenderItemProps } from "./constants";


const defaultRenderItem = (
    {
        type,
        page,
        selected,
        disabled,
        onClick,
        key,
        ...props
    }: RenderItemProps) => {
    if (type === "ellipsis") {
        return (
            <Text className="pagination-ellipsis">...</Text>
        );
    }

    const paginationItemProps = {
        type      : "button",
        className : `pagination-item ${selected ? "selected" : ""} ${disabled ? "disabled" : ""}`,
        onClick,
        disabled,
        ...props,
    };

    let content;
    switch (type) {
        case "first":
            content = content = (
                <svg viewBox="0 0 24 24">
                    <line x1="5" y1="18" x2="5" y2="6" />
                    <polyline points="14 18 9 12 14 6" />
                    <line x1="10" y1="12" x2="19" y2="12" />
                </svg>
            );
            break;
        case "previous":
            content = (
                <svg viewBox="0 0 24 24">
                    <polyline points="12 18 7 12 12 6" />
                    <line x1="8" y1="12" x2="17" y2="12" />
                </svg>
            );
            break;
        case "next":
            content = content = (
                <svg viewBox="0 0 24 24">
                    <polyline points="12 6 17 12 12 18" />
                    <line x1="16" y1="12" x2="7" y2="12" />
                </svg>
            );
            break;
        case "last":
            content = content = (
                <svg viewBox="0 0 24 24">
                    <polyline points="10 6 15 12 10 18" />
                    <line x1="19" y1="6" x2="19" y2="18" />
                    <line x1="14" y1="12" x2="5" y2="12" />
                </svg>
            );
            break;
        default:
            content = page;
    }

    return (
        <Button
            kind="custom"
            {...paginationItemProps}
        >
            {content}
        </Button>
    );
};

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Pagination = React.forwardRef(
    (
        {
            totalItems,
            currentPage,
            onPageChange,
            itemsToShowEachSide = 1,
            kind = "plain",
            showGoToFirstItemButton = true,
            showGoToLastItemButton = true,
            showPreviousButton = true,
            showNextButton = true,
            showGoToInput = false,
            disabled = false,
            hideDisabledButtons = false,
            renderItem = defaultRenderItem,
            isLoading = false,
            loadingText,
            emptyText,
            itemDisplayText = "page",
            ...props
        }: PaginationProps, ref: React.Ref<PaginationElementType>) => {
        const {
                  items,
                  totalPages,
                  rangeStart,
                  rangeEnd,
                  hasPrevPage,
                  hasNextPage,
              } = usePagination({
            totalItems,
            currentPage,
            itemsToShowEachSide,
        });

        const [ goToPage, setGoToPage ] = React.useState("");

        const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setGoToPage(e.target.value);
        };

        const handlePageInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                const page = parseInt(goToPage);
                if (!isNaN(page) && page >= 1 && page <= totalPages) {
                    onPageChange(page);
                    setGoToPage("");
                }
            }
        };

        if (totalItems === 0) {
            return <Text className="pagination-empty">{emptyText || "No items to display"}</Text>;
        }

        let classNames = [ "pagination" ];

        if (kind) {
            classNames.push(kind);
        }

        if (disabled) {
            classNames.push("disabled");
        }

        if (isLoading) {
            classNames.push("loading");
        }

        return (
            <Element<PaginationElementType>
                as="nav"
                data-pagination
                ref={ref}
                classNames={classNames}
                role="navigation"
                aria-label="pagination"
                {...props}
            >
                <Div className="pagination-controls">
                    {/* GO TO FIRST ITEM */}
                    {showGoToFirstItemButton && (!hideDisabledButtons || hasPrevPage) && renderItem({
                        type     : "first",
                        disabled : !hasPrevPage || disabled,
                        selected : false,
                        onClick  : () => onPageChange(1),
                    })}

                    {/* GO TO PREVIOUS ITEM */}
                    {showPreviousButton && (!hideDisabledButtons || hasPrevPage) && renderItem({
                        type     : "previous",
                        disabled : !hasPrevPage || disabled,
                        selected : false,
                        onClick  : () => onPageChange(currentPage - 1),
                    })}

                    {/* SHOW PAGE ITEM OR ELLIPSIS */}
                    {items.map((item, index) => {
                        const itemProps: RenderItemProps = item === "..."
                            ? {
                                key      : `ellipsis-${index}`,
                                type     : "ellipsis",
                                selected : false,
                                disabled : true,
                            }
                            : {
                                key            : item.toString(),
                                type           : "page",
                                page           : item as number,
                                selected       : item === currentPage,
                                disabled       : disabled,
                                "aria-current" : item === currentPage ? "page" : undefined,
                                onClick        : () => onPageChange(item as number),
                            };

                        return renderItem(itemProps);
                    })}

                    {/* GO TO NEXT ITEM */}
                    {showNextButton && (!hideDisabledButtons || hasNextPage) && renderItem({
                        type     : "next",
                        disabled : !hasNextPage || disabled,
                        selected : false,
                        onClick  : () => onPageChange(currentPage + 1),
                    })}

                    {/* GO TO LAST ITEM */}
                    {showGoToLastItemButton && (!hideDisabledButtons || hasNextPage) && renderItem({
                        type     : "last",
                        disabled : !hasNextPage || disabled,
                        selected : false,
                        onClick  : () => onPageChange(totalPages),
                    })}

                    {isLoading && (
                        <Div className="pagination-loading">
                            <Spinner />
                            {loadingText && <Text size="small">{loadingText}</Text>}
                        </Div>
                    )}
                </Div>

                <Div className="pagination-info">
                    <Text size="small">
                        Showing {itemDisplayText} {rangeStart} of {totalItems}
                    </Text>

                    {showGoToInput && (
                        <Div className="pagination-go-to">
                            <input
                                type="number"
                                min={1}
                                max={totalPages}
                                value={goToPage}
                                onChange={handlePageInputChange}
                                onKeyDown={handlePageInputKeyPress}
                                placeholder={`Go to ${itemDisplayText}`}
                                aria-label={`Go to ${itemDisplayText}`}
                                disabled={disabled}
                            />
                        </Div>
                    )}
                </Div>
            </Element>
        );
    },
);

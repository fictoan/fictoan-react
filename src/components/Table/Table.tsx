// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element";

// STYLES ==============================================================================================================
import "./table.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";

// prettier-ignore
export interface TableCustomProps {
    bordersFor          ? : "rows" | "columns" | "both";
    alignText           ? : "left" | "right" | "centre" | "center";
    isStriped           ? : boolean;
    highlightRowOnHover ? : boolean;
    isFullWidth         ? : boolean;
    caption             ? : string; // Accessible table caption
    summary             ? : string; // Description of table structure for complex tables
    hasColSpan          ? : boolean; // Indicates if table has colspan/rowspan for screen readers
}

export type TableElementType = HTMLTableElement;
export type TableProps = Omit<CommonAndHTMLProps<TableElementType>, keyof TableCustomProps> & TableCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Table = React.forwardRef(
    (
        {
            bordersFor,
            isStriped,
            highlightRowOnHover,
            isFullWidth,
            alignText,
            caption,
            summary,
            hasColSpan,
            children,
            ...props
        }: TableProps,
        ref: React.Ref<TableElementType>
    ) => {
        let classNames = [];

        if (bordersFor) {
            classNames.push(`bordered-${bordersFor}`);
        }

        if (isStriped) {
            classNames.push("striped");
        }

        if (highlightRowOnHover) {
            classNames.push("hoverable");
        }

        if (isFullWidth) {
            classNames.push("full-width");
        }

        if (alignText) {
            classNames.push(`align-text-${alignText}`);
        }

        // Get row count if children exist
        const rowCount = React.Children.count(children);

        // Get column count from first row if possible
        const getColumnCount = () => {
            if (!children || !React.isValidElement(children)) return undefined;

            const firstRow = React.Children.toArray(children)[0];
            if (React.isValidElement(firstRow) && firstRow.props.children) {
                return React.Children.count(firstRow.props.children);
            }
            return undefined;
        };

        return (
            <Element<TableElementType>
                as="table"
                classNames={classNames}
                ref={ref}
                role="table"
                aria-rowcount={rowCount || undefined}
                aria-colcount={hasColSpan ? undefined : getColumnCount()}
                summary={summary}
                {...props}
            >
                {caption && <caption>{caption}</caption>}
                {children}
            </Element>
        );
    }
);

export const createClassName = (classNames: any[]): string => {
    return classNames.filter((item: any): boolean => !!item).join(" ");
};

export const createClassName = (classNames: any[]): string => {
    return classNames.filter(item => !!item).join(" ");
};

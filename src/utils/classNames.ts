export const createClassName = (classNames: string[]): string => {
    return classNames.filter((item) => !!item).join(" ");
};

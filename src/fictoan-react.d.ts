declare module "fictoan-react" {
    import { FunctionComponent, ReactNode, ComponentProps } from "react";

    export { AccordionProps } from "./components/Accordion";
    export { BadgeProps } from "./components/Badge";
    export { BreadcrumbsProps } from "./components/Breadcrumbs";
    export { ButtonProps } from "./components/Button";
    export { CalloutProps } from "./components/Callout";
    export { CardProps } from "./components/Card";
    export { CodeBlockProps } from "./components/CodeBlock";
    export { DividerProps } from "./components/Divider";
    export { DrawerProps } from "./components/Drawer";
    export { ElementProps } from "./components/Element/constants";
    export { FormProps } from "./components/Form";
    export { MeterProps } from "./components/Meter";
    export { ModalProps } from "./components/Modal";
    export { NotificationsWrapperProps, NotificationItemProps } from "./components/Notification";
    export { OptionCardProps } from "./components/OptionCard";
    export { PaginationProps } from "./components/Pagination";
    export { PortionProps } from "./components/Portion";
    export { ProgressBarProps } from "./components/ProgressBar";
    export { RowProps } from "./components/Row";
    export {
        SidebarWrapperNewProps,
        ContentWrapperProps,
        SidebarHeaderNewProps,
        SidebarItemNewProps,
        SidebarFooterNewProps
    } from "./components/Sidebar";
    export { SkeletonProps } from "./components/Skeleton";
    export { SpinnerProps } from "./components/Spinner";
    export { TableProps } from "./components/Table";
    export { TabsProps } from "./components/Tabs";
    export { ThemeProviderProps } from "./components/ThemeProvider";
    export { ToastsWrapperProps, ToastItemProps } from "./components/Toast";
    export { TooltipProps } from "./components/Tooltip";
    export { TextProps } from "./components/Typography";

    // Utility types
    export {
        DefaultColours,
        BasicColours,
        FictoanColours,
        ColourPropTypes,
        EmphasisTypes,
        SpacingTypes,
        ShadowTypes,
        ShapeTypes,
        OpacityTypes,
        WeightTypes,
    } from "./components/Element/constants";

    // Component exports
    export const Accordion: FunctionComponent<AccordionProps>;
    export const Badge: FunctionComponent<BadgeProps>;
    export const Button: FunctionComponent<ButtonProps>;
    export const Callout:FunctionComponent<CalloutProps>;
    export const Card: FunctionComponent<CardProps>;
    export const CodeBlock: FunctionComponent<CodeBlockProps>;
    export const Divider: FunctionComponent<DividerProps>;
    export const Drawer: FunctionComponent<DrawerProps>;
    export const Element: FunctionComponent<ElementProps>;
    export const Form: FunctionComponent<FormProps>;
    export const Meter: FunctionComponent<MeterProps>;
    export const Modal: FunctionComponent<ModalProps>;
    export const Notification: FunctionComponent<NotificationsWrapperProps>;
    export const OptionCard: FunctionComponent<OptionCardProps>;
    export const Pagination: FunctionComponent<PaginationProps>;
    export const Portion: FunctionComponent<PortionProps>;
    export const ProgressBar: FunctionComponent<ProgressBarProps>;
    export const Row: FunctionComponent<RowProps>;
    export const Sidebar: FunctionComponent<SidebarWrapperNewProps>;
    export const Skeleton: FunctionComponent<SkeletonProps>;
    export const Spinner: FunctionComponent<SpinnerProps>;
    export const Table: FunctionComponent<TableProps>;
    export const Tabs: FunctionComponent<TabsProps>;
    export const ThemeProvider: FunctionComponent<ThemeProviderProps>;
    export const Toast: FunctionComponent<ToastsWrapperProps>;
    export const Tooltip: FunctionComponent<TooltipProps>;
    export const Typography: FunctionComponent<TextProps>;
}

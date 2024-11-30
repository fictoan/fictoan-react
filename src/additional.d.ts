declare module "*.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.svg" {
    import { ComponentType, SVGProps } from "react";
    const content: ComponentType<SVGProps<SVGSVGElement>>;
    export default content;
}

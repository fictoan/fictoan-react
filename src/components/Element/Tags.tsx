import React from "react";
import { Element } from "./Element";
import { ElementProps } from "./constants";

interface HyperlinkCustomProps {
    href         : string;
    target     ? : "_blank" | "_self" | "_parent" | "_top";
    rel        ? : string;
    isExternal ? : boolean;
}

// Helper type for components that might have custom props
type CustomProps<T extends React.ElementType, P = {}> = ElementProps<{}> &
    React.HTMLAttributes<HTMLElement> & P;

const createComponentWithElement = <T extends React.ElementType, P = {}>(
    tagName: T,
    defaultProps?: Partial<P>
) => {
    return React.forwardRef<HTMLElement, CustomProps<T, P>>(
        (props, ref) => {
            // Merge default props with provided props
            const finalProps = { ...defaultProps, ...props };

            // Handle external links for Hyperlink component
            if (tagName === "a" && "external" in finalProps) {
                const { external, ...restProps } = finalProps;
                if (external) {
                    finalProps.target = "_blank";
                    finalProps.rel = "noopener noreferrer";
                }
            }

            return <Element as={tagName} ref={ref} {...finalProps} />;
        }
    );
};

export const Article = createComponentWithElement("article");
export const Aside = createComponentWithElement("aside");
export const Body = createComponentWithElement("body");
export const Div = createComponentWithElement("div");
export const Footer = createComponentWithElement("footer");
export const Header = createComponentWithElement("header");
export const Main = createComponentWithElement("main");
export const Nav = createComponentWithElement("nav");
export const Section = createComponentWithElement("section");
export const Span = createComponentWithElement("span");
export const Hyperlink = createComponentWithElement<"a", HyperlinkCustomProps>("a", {
    rel: "noopener noreferrer" // Default props for Hyperlink
});

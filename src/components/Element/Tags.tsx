import React from "react";
import { Element } from "./Element";
import { ElementProps } from "./constants";

const createComponentWithElement = <T extends React.ElementType>(tagName: T) => {
    return React.forwardRef<HTMLElement, ElementProps<{}> & React.HTMLAttributes<HTMLElement>>(
        (props, ref) => <Element as={tagName} ref={ref} {...props} />
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

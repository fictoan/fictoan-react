import React from "react";
import { Element } from "./Element";
import { ElementProps } from "./constants";

const createComponentWithElement = <T extends React.ElementType>(tagName: T) => {
    return React.forwardRef<HTMLElement, ElementProps<{}> & React.HTMLAttributes<HTMLElement>>(
        (props, ref) => <Element as={tagName} ref={ref} {...props} />
    );
};

export const Div = createComponentWithElement("div");
export const Article = createComponentWithElement("article");
export const Body = createComponentWithElement("body");
export const Footer = createComponentWithElement("footer");
export const Header = createComponentWithElement("header");
export const Main = createComponentWithElement("main");
export const Nav = createComponentWithElement("nav");
export const Section = createComponentWithElement("section");

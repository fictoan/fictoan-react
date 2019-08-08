import React, { ReactEventHandler, HTMLProps } from "react";
declare type HeaderProps = HTMLProps<HTMLDivElement> & {
    onMenuBtnClick: ReactEventHandler;
};
declare class Header extends React.PureComponent<HeaderProps, {}> {
    render(): JSX.Element;
}
export default Header;

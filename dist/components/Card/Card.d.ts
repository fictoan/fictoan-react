import { BaseAndHTMLProps } from "../BaseComponent/typings";
interface CardProps extends BaseAndHTMLProps<HTMLDivElement> {
    shape?: "rounded" | "curved";
    shadow?: "mild" | "soft" | "hard";
}
declare const Card: ({ shadow, shape, className, ...props }: CardProps) => JSX.Element;
export default Card;

import { PropsHtmlChildren } from "@/types";

export const H2 = ({ children, ...props }: PropsHtmlChildren) => {
    return (
        <h2 {...props} className="text-3xl font-medium">
            {children}
        </h2>
    );
};
export const H3 = ({ children, ...props }: PropsHtmlChildren) => {
    return (
        <h3 {...props} className="text-2xl font-medium">
            {children}
        </h3>
    );
};
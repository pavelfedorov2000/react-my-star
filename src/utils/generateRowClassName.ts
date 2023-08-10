import { ClassName } from "../enums/ClassName"

export const generateRowClassName = (className?: string, columns?: number): string => {
    let defaultClass = [`${ClassName.Row}`];

    if (className) {
        defaultClass.push(`${className}__${ClassName.Row}`);
    }

    if (columns) {
        defaultClass.push(`${ClassName.Row}--${columns}`);
    }

    return defaultClass.join(' ');
}
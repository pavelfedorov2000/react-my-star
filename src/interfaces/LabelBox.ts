export enum LabelBoxBgColor {
    Red = 'red',
    Blue = 'blue',
}

export interface LabelBox {
    bg: LabelBoxBgColor.Red | LabelBoxBgColor.Blue;
    title: string;
    button?: {
        className?: string;
        text: string;
    },
    sale?: {
        title: string;
        promocode: string;
    }
}
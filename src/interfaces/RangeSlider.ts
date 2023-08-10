export interface RangeSlider {
    name: string;
    title?: string;
    prefix: string;
    min: number;
    max: number;
    from?: number;
    to?: number;
    onChange?: (from: number, to: number) => void;
}
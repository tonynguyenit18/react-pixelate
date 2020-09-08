/// <reference types="react" />
export declare type ImagePixelatedProps = {
    src: string;
    width?: number;
    height?: number;
    pixelSize?: number;
    centered?: boolean;
    fillTransparencyColor?: string;
};
export declare const ImagePixelated: ({ src, width, height, pixelSize, centered, fillTransparencyColor }: ImagePixelatedProps) => JSX.Element;

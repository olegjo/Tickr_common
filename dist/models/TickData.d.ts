declare const ascentStyles: readonly ["toprope", "flash", "redpoint", "onsight"];
export declare type AscentStyle = typeof ascentStyles[number];
export interface IPostTickData {
    style: AscentStyle;
    routeId: string;
    rating?: number;
    gradeOpinion?: string;
}
export declare class TickData {
    style: AscentStyle;
    routeId?: string;
    rating?: number;
    gradeOpinion?: string;
    constructor(data: any);
    static validate(data: any): boolean;
}
export {};

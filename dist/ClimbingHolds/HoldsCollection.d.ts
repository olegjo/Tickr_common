export interface IFirestoreHoldsCollection {
    label: string;
}
export declare class HoldsCollection {
    readonly label: string;
    constructor(label: string);
    toFirestore(): IFirestoreHoldsCollection;
}

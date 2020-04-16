export interface IFirestoreHoldsCollection {
    label: string;
    uuid: string;
}
export declare class HoldsCollection {
    readonly label: string;
    readonly uuid: string;
    constructor(label: string, uuid: string);
    toFirestore(): IFirestoreHoldsCollection;
}

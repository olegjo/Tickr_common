export interface IFirestoreHoldsCollection {
    label: string;
}

export class HoldsCollection {
    readonly label: string;

    constructor(label: string) {
        this.label = label;
    }

    public toFirestore(): IFirestoreHoldsCollection {
        return {
            label: this.label,
        };
    }
}

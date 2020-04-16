export interface IFirestoreHoldsCollection {
    label: string;
    uuid: string;
}

export class HoldsCollection {
    readonly label: string;
    readonly uuid: string;

    constructor(label: string, uuid: string) {
        this.label = label;
        this.uuid = uuid;
    }

    public toFirestore(): IFirestoreHoldsCollection {
        return {
            label: this.label,
            uuid: this.uuid,
        };
    }
}

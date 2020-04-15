import { HoldsCollection, IFirestoreHoldsCollection } from "./HoldsCollection";
export * from "./HoldsCollection";

export const AVAILABLE_CLIMBING_HOLDS = [
    new HoldsCollection("Grønn"),
    new HoldsCollection("Blå"),
    new HoldsCollection("Rød"),
    new HoldsCollection("Gul"),
    new HoldsCollection("Lilla"),
    new HoldsCollection("Hvit"),
    new HoldsCollection("Grå"),
    new HoldsCollection("Svart"),
    new HoldsCollection("Rosa"),
    new HoldsCollection("Sølv"),
    new HoldsCollection("Brun")
];

export function getClimbingHoldsCollection(holds: IFirestoreHoldsCollection) {
    for (const col of AVAILABLE_CLIMBING_HOLDS) {
        if (col.toFirestore() === holds) return col;
    }

    throw new Error("HOLDS NOT FOUND");
}

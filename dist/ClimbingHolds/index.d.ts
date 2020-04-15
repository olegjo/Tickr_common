import { HoldsCollection, IFirestoreHoldsCollection } from "./HoldsCollection";
export * from "./HoldsCollection";
export declare const AVAILABLE_CLIMBING_HOLDS: HoldsCollection[];
export declare function getClimbingHoldsCollection(holds: IFirestoreHoldsCollection): HoldsCollection;

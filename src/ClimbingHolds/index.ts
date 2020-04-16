import { HoldsCollection, IFirestoreHoldsCollection } from "./HoldsCollection";
export * from "./HoldsCollection";

// TODO: Move this to DB
export const AVAILABLE_CLIMBING_HOLDS = [
    new HoldsCollection("Grønn", "DE4416B4-9AA6-4FC9-976D-626F7DB0A3E2"),
    new HoldsCollection("Blå",   "BC5C974D-FD6B-42C0-98E1-E705E03439FF"),
    new HoldsCollection("Rød",   "81931949-3EB7-49A4-9610-FA7369E795A3"),
    new HoldsCollection("Gul",   "17FAAE05-8A07-45CF-8956-BDCB95F67A27"),
    new HoldsCollection("Lilla", "B48F912D-5AAD-4525-9003-B37F9A9A0923"),
    new HoldsCollection("Hvit",  "29A2CFF0-3D3D-4851-9941-52FDF3A20C17"),
    new HoldsCollection("Grå",   "FF54A8A4-B710-4A89-91C9-46000EC268D7"),
    new HoldsCollection("Svart", "6E897BFE-A6A2-43D0-9C8E-CF602E1658E8"),
    new HoldsCollection("Rosa",  "4489FD72-3CC6-4818-B909-BB7043E62F5B"),
    new HoldsCollection("Sølv",  "DD2E8667-F981-4564-889C-3CE0FDE7F469"),
    new HoldsCollection("Brun",  "B6328E37-F26A-4DA7-A214-4B83527B2A9C")
];

export function getClimbingHoldsCollection(holds: IFirestoreHoldsCollection) {
    for (const holdsCol of AVAILABLE_CLIMBING_HOLDS) {
        if (holdsCol.uuid === holds.uuid) return holdsCol;
    }

    throw new Error("HOLDS NOT FOUND");
}

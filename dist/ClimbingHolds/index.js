"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const HoldsCollection_1 = require("./HoldsCollection");
__export(require("./HoldsCollection"));
exports.AVAILABLE_CLIMBING_HOLDS = [
    new HoldsCollection_1.HoldsCollection("Grønn"),
    new HoldsCollection_1.HoldsCollection("Blå"),
    new HoldsCollection_1.HoldsCollection("Rød"),
    new HoldsCollection_1.HoldsCollection("Gul"),
    new HoldsCollection_1.HoldsCollection("Lilla"),
    new HoldsCollection_1.HoldsCollection("Hvit"),
    new HoldsCollection_1.HoldsCollection("Grå"),
    new HoldsCollection_1.HoldsCollection("Svart"),
    new HoldsCollection_1.HoldsCollection("Rosa"),
    new HoldsCollection_1.HoldsCollection("Sølv"),
    new HoldsCollection_1.HoldsCollection("Brun")
];
function getClimbingHoldsCollection(holds) {
    for (const col of exports.AVAILABLE_CLIMBING_HOLDS) {
        if (col.toFirestore() === holds)
            return col;
    }
    throw new Error("HOLDS NOT FOUND");
}
exports.getClimbingHoldsCollection = getClimbingHoldsCollection;
//# sourceMappingURL=index.js.map
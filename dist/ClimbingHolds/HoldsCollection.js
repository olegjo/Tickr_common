"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HoldsCollection {
    constructor(label) {
        this.label = label;
    }
    toFirestore() {
        return {
            label: this.label,
        };
    }
}
exports.HoldsCollection = HoldsCollection;
//# sourceMappingURL=HoldsCollection.js.map
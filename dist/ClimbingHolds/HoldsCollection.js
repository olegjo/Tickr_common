"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HoldsCollection {
    constructor(label, uuid) {
        this.label = label;
        this.uuid = uuid;
    }
    toFirestore() {
        return {
            label: this.label,
            uuid: this.uuid,
        };
    }
}
exports.HoldsCollection = HoldsCollection;
//# sourceMappingURL=HoldsCollection.js.map
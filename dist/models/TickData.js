"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ascentStyles = ["toprope", "flash", "redpoint", "onsight"];
class TickData {
    constructor(data) {
        if (!TickData.validate(data)) {
            throw new Error("Validation of tick data failed");
        }
        this.style = data.style;
        this.routeId = data.routeId;
        this.rating = data.rating;
        this.gradeOpinion = data.gradeOpinion;
    }
    static validate(data) {
        if (!data)
            return false;
        if (!data.style)
            return false;
        if (!ascentStyles.includes(data.style))
            return false;
        return true;
    }
}
exports.TickData = TickData;
//# sourceMappingURL=TickData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClimbingGradeBase {
    constructor(label, numericValueRange, color) {
        this.label = label;
        this.numericValueRange = numericValueRange;
        this.color = color;
    }
    getNumericValue() {
        return (this.numericValueRange[0] + this.numericValueRange[1]) / 2;
    }
    getNumericValueRange() {
        return this.numericValueRange;
    }
    getLabel() {
        return this.label;
    }
    getColor() {
        return this.color;
    }
    toFirestore() {
        return {
            type: this.gradeSystemName,
            grade: this.label
        };
    }
}
exports.ClimbingGradeBase = ClimbingGradeBase;
//# sourceMappingURL=ClimbingGradeBase.js.map
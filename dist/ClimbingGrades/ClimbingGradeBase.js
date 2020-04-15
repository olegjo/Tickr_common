"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClimbingGradeBase {
    constructor(label, value, numericValueRange, color) {
        this.label = label;
        this.value = value;
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
    getValue() {
        return this.value;
    }
    getColor() {
        return this.color;
    }
    toFirestore() {
        return {
            type: this.gradeSystemName,
            label: this.label,
            value: this.value,
        };
    }
}
exports.ClimbingGradeBase = ClimbingGradeBase;
//# sourceMappingURL=ClimbingGradeBase.js.map
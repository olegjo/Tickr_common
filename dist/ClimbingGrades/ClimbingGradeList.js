"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClimbingGradeList {
    constructor() {
        this.grades = [];
    }
    push(value) {
        this.grades.push(value);
    }
    sort() {
        this.grades = this.grades.sort((v1, v2) => v1.getNumericValue() - v2.getNumericValue());
    }
    get length() {
        return this.grades.length;
    }
    get array() {
        return this.grades;
    }
}
exports.ClimbingGradeList = ClimbingGradeList;
//# sourceMappingURL=ClimbingGradeList.js.map
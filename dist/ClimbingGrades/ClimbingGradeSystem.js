"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClimbingGradeSystem {
    constructor(grades) {
        this.grades = [];
        this.grades = grades;
    }
    get gradeSystemName() {
        return this.grades.length > 0 ? this.grades[0].gradeSystemName : "";
    }
    get length() {
        return this.grades.length;
    }
    at(index) {
        return this.grades[index];
    }
    find(label) {
        return this.grades.find((grade) => grade.getLabel() === label);
    }
    findClosestByNumericValue(value) {
        let closest = this.grades[0];
        let minDistance = Infinity;
        for (const grade of this.grades) {
            const dist = Math.abs(grade.getNumericValue() - value);
            if (dist < minDistance) {
                minDistance = dist;
                closest = grade;
            }
        }
        return closest;
    }
}
exports.ClimbingGradeSystem = ClimbingGradeSystem;
//# sourceMappingURL=ClimbingGradeSystem.js.map
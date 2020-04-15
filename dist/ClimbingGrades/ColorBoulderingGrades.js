"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClimbingGradeSystem_1 = require("./ClimbingGradeSystem");
const ClimbingGradeBase_1 = require("./ClimbingGradeBase");
const grades = ["white", "green", "blue", "yellow", "red", "black", "silver"];
class ColorBoulderingClimbingGrade extends ClimbingGradeBase_1.ClimbingGradeBase {
    constructor(label, value, numericValueRange, color) {
        super(label, value, numericValueRange, color);
    }
    get gradeSystemName() {
        return "ColorBoulderingClimbingGrade";
    }
}
exports.ColorBoulderingClimbingGrade = ColorBoulderingClimbingGrade;
class ColorBoulderingGradeSystem extends ClimbingGradeSystem_1.ClimbingGradeSystem {
    constructor() {
        super([
            new ColorBoulderingClimbingGrade("", "white", [0, 14], "#FFFFFF"),
            new ColorBoulderingClimbingGrade("", "green", [14, 26], "#00FF00"),
            new ColorBoulderingClimbingGrade("", "blue", [26, 38], "#0000FF"),
            new ColorBoulderingClimbingGrade("", "yellow", [38, 50], "#FFFF00"),
            new ColorBoulderingClimbingGrade("", "red", [50, 62], "#FF0000"),
            new ColorBoulderingClimbingGrade("", "black", [62, 74], "#000000"),
            new ColorBoulderingClimbingGrade("", "silver", [74, 100], "#C0C0C0"),
        ]);
    }
}
exports.ColorBoulderingGradeSystem = ColorBoulderingGradeSystem;
//# sourceMappingURL=ColorBoulderingGrades.js.map
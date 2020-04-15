"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClimbingGradeBase_1 = require("./ClimbingGradeBase");
const ClimbingGradeSystem_1 = require("./ClimbingGradeSystem");
const grades = ["< 3-", "3-", "3", "3+", "4-", "4", "4+", "5-", "5", "5+", "6-", "6", "6+", "7-", "7", "7/7+", "7+", "7+/8-", "8-", "8", "8/8+", "8+", "9-", "9-/9", "9", "9/9+", "9+", "8c+", "9a", "9a+", "9b", "9b+", "9c", "9c+"];
class NorwegianClimbingGrade extends ClimbingGradeBase_1.ClimbingGradeBase {
    constructor(label, value, numericValueRange, color) {
        super(label, value, numericValueRange, color);
    }
    get gradeSystemName() {
        return "NorwegianClimbingGrade";
    }
}
exports.NorwegianClimbingGrade = NorwegianClimbingGrade;
class NorwegianClimbingGradeSystem extends ClimbingGradeSystem_1.ClimbingGradeSystem {
    constructor() {
        super([
            new NorwegianClimbingGrade("< 3-", "< 3-", [0, 2], "#ffffff"),
            new NorwegianClimbingGrade("3-", "3-", [2, 6], "#ffffff"),
            new NorwegianClimbingGrade("3", "3", [6, 10], "#ffffff"),
            new NorwegianClimbingGrade("3+", "3+", [10, 14], "#ffffff"),
            new NorwegianClimbingGrade("4-", "4-", [14, 18], "#00ff00"),
            new NorwegianClimbingGrade("4", "4", [18, 22], "#00ff00"),
            new NorwegianClimbingGrade("4+", "4+", [22, 26], "#00ff00"),
            new NorwegianClimbingGrade("5-", "5-", [26, 30], "#0000ff"),
            new NorwegianClimbingGrade("5", "5", [30, 34], "#0000ff"),
            new NorwegianClimbingGrade("5+", "5+", [34, 38], "#0000ff"),
            new NorwegianClimbingGrade("6-", "6-", [38, 42], "#ffff00"),
            new NorwegianClimbingGrade("6", "6", [42, 46], "#ffff00"),
            new NorwegianClimbingGrade("6+", "6+", [46, 50], "#ffff00"),
            new NorwegianClimbingGrade("7-", "7-", [50, 54], "#ff0000"),
            new NorwegianClimbingGrade("7", "7", [54, 58], "#ff0000"),
            new NorwegianClimbingGrade("7/7+", "7/7+", [58, 58], "#ff0000"),
            new NorwegianClimbingGrade("7+", "7+", [58, 62], "#ff0000"),
            new NorwegianClimbingGrade("7+/8-", "7+/8-", [62, 62], "#ff0000"),
            new NorwegianClimbingGrade("8-", "8-", [62, 66], "#000000"),
            new NorwegianClimbingGrade("8", "8", [66, 70], "#000000"),
            new NorwegianClimbingGrade("8/8+", "8/8+", [70, 70], "#000000"),
            new NorwegianClimbingGrade("8+", "8+", [70, 74], "#000000"),
            new NorwegianClimbingGrade("9-", "9-", [74, 78], "#C0C0C0"),
            new NorwegianClimbingGrade("9-/9", "9-/9", [78, 78], "#C0C0C0"),
            new NorwegianClimbingGrade("9", "9", [78, 82], "#C0C0C0"),
            new NorwegianClimbingGrade("9/9+", "9/9+", [82, 82], "#C0C0C0"),
            new NorwegianClimbingGrade("9+", "9+", [82, 86], "#C0C0C0"),
            new NorwegianClimbingGrade("8c+", "8c+", [86, 86], "#C0C0C0"),
            new NorwegianClimbingGrade("9a", "9a", [86, 90], "#C0C0C0"),
            new NorwegianClimbingGrade("9a+", "9a+", [90, 90], "#C0C0C0"),
            new NorwegianClimbingGrade("9b", "9b", [90, 94], "#C0C0C0"),
            new NorwegianClimbingGrade("9b+", "9b+", [94, 94], "#C0C0C0"),
            new NorwegianClimbingGrade("9c", "9c", [94, 98], "#C0C0C0"),
            new NorwegianClimbingGrade("9c+", "9c+", [98, 100], "#C0C0C0"),
        ]);
    }
}
exports.NorwegianClimbingGradeSystem = NorwegianClimbingGradeSystem;
//# sourceMappingURL=NorwegianClimbingGrades.js.map
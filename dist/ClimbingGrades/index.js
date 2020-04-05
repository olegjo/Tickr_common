"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const NorwegianClimbingGrades_1 = require("./NorwegianClimbingGrades");
const ColorBoulderingGrades_1 = require("./ColorBoulderingGrades");
__export(require("./NorwegianClimbingGrades"));
__export(require("./ClimbingGradeBase"));
__export(require("./ClimbingGradeSystem"));
__export(require("./ClimbingGradeList"));
function getGradeSystem(type) {
    const registeredGradeSystems = [
        new NorwegianClimbingGrades_1.NorwegianClimbingGradeSystem(),
        new ColorBoulderingGrades_1.ColorBoulderingGradeSystem(),
    ];
    for (const gradeSystem of registeredGradeSystems) {
        if (type === gradeSystem.gradeSystemName) {
            return gradeSystem;
        }
    }
    throw new Error(`Did not find the specified grade system: ${type}.`);
}
exports.getGradeSystem = getGradeSystem;
//# sourceMappingURL=index.js.map
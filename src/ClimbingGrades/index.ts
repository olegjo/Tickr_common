import { ClimbingGradeSystem } from "./ClimbingGradeSystem";
import { NorwegianClimbingGradeSystem } from "./NorwegianClimbingGrades";
import { ColorBoulderingGradeSystem } from "./ColorBoulderingGrades";

export * from "./NorwegianClimbingGrades";
export * from "./ClimbingGradeBase";
export * from "./ClimbingGradeSystem";
export * from "./ClimbingGradeList";

export function getGradeSystem(type: string): ClimbingGradeSystem {
    const registeredGradeSystems: ClimbingGradeSystem[] = [
        new NorwegianClimbingGradeSystem(),
        new ColorBoulderingGradeSystem(),
    ];

    for (const gradeSystem of registeredGradeSystems) {
        if (type === gradeSystem.gradeSystemName) {
            return gradeSystem;
        }
    }

    throw new Error(`Did not find the specified grade system: ${type}.`);
}

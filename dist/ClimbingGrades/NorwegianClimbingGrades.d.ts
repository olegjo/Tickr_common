import { ClimbingGradeBase } from "./ClimbingGradeBase";
import { ClimbingGradeSystem } from "./ClimbingGradeSystem";
declare const grades: readonly ["< 3-", "3-", "3", "3+", "4-", "4", "4+", "5-", "5", "5+", "6-", "6", "6+", "7-", "7", "7/7+", "7+", "7+/8-", "8-", "8", "8/8+", "8+", "9-", "9-/9", "9", "9/9+", "9+", "8c+", "9a", "9a+", "9b", "9b+", "9c", "9c+"];
export declare type NorwegianGradeValue = typeof grades[number];
export declare class NorwegianClimbingGrade extends ClimbingGradeBase<NorwegianGradeValue> {
    constructor(label: string, value: NorwegianGradeValue, numericValueRange: [number, number], color: string);
    get gradeSystemName(): string;
}
export declare class NorwegianClimbingGradeSystem extends ClimbingGradeSystem<NorwegianGradeValue, NorwegianClimbingGrade> {
    constructor();
}
export {};

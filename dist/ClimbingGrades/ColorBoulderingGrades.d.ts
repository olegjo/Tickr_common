import { ClimbingGradeSystem } from "./ClimbingGradeSystem";
import { ClimbingGradeBase } from "./ClimbingGradeBase";
declare const grades: readonly ["white", "green", "blue", "yellow", "red", "black", "silver"];
export declare type ColorGradeValue = typeof grades[number];
export declare class ColorBoulderingClimbingGrade extends ClimbingGradeBase<ColorGradeValue> {
    static GRADE_SYSTEM_NAME: string;
    constructor(label: string, value: ColorGradeValue, numericValueRange: [number, number], color: string);
    get gradeSystemName(): string;
}
export declare class ColorBoulderingGradeSystem extends ClimbingGradeSystem<ColorGradeValue, ColorBoulderingClimbingGrade> {
    constructor();
}
export {};

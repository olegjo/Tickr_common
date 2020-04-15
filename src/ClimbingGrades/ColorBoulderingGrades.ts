import { ClimbingGradeSystem } from "./ClimbingGradeSystem";
import { ClimbingGradeBase } from "./ClimbingGradeBase";

const grades = [ "white", "green", "blue", "yellow", "red", "black", "silver" ] as const;
export type ColorGradeValue = typeof grades[number];

export class ColorBoulderingClimbingGrade extends ClimbingGradeBase<ColorGradeValue> {
    static GRADE_SYSTEM_NAME = "ColorBoulderingClimbingGrade";
    constructor(label: string, value: ColorGradeValue, numericValueRange: [number, number], color: string) {
        super(label, value, numericValueRange, color);
    }

    get gradeSystemName() {
        return ColorBoulderingClimbingGrade.GRADE_SYSTEM_NAME;
    }
}

export class ColorBoulderingGradeSystem extends ClimbingGradeSystem<ColorGradeValue, ColorBoulderingClimbingGrade> {
    constructor() {
        super([
            new ColorBoulderingClimbingGrade("", "white",  [ 0, 14],    "#FFFFFF"),
            new ColorBoulderingClimbingGrade("", "green",  [ 14, 26 ],  "#00FF00"),
            new ColorBoulderingClimbingGrade("", "blue",   [ 26, 38 ],  "#0000FF"),
            new ColorBoulderingClimbingGrade("", "yellow", [ 38, 50 ],  "#FFFF00"),
            new ColorBoulderingClimbingGrade("", "red",    [ 50, 62 ],  "#FF0000"),
            new ColorBoulderingClimbingGrade("", "black",  [ 62, 74 ],  "#000000"),
            new ColorBoulderingClimbingGrade("", "silver", [ 74, 100 ], "#C0C0C0"),
        ]);
    }
}

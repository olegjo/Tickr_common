export interface IFirestoreClimbingGrade {
    type: string;
    grade: string;
}
export declare abstract class ClimbingGradeBase<T extends string = string> {
    protected label: T;
    protected numericValueRange: [number, number];
    protected color: string;
    constructor(label: T, numericValueRange: [number, number], color: string);
    getNumericValue(): number;
    getNumericValueRange(): [number, number];
    getLabel(): T;
    getColor(): string;
    abstract get gradeSystemName(): string;
    toFirestore(): {
        type: string;
        grade: T;
    };
}

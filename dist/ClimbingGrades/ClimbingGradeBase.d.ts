export declare abstract class ClimbingGradeBase<T = string> {
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

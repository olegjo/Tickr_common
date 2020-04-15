export interface IFirestoreClimbingGrade {
    type: string;
    label: string;
    value: string;
}
export declare abstract class ClimbingGradeBase<T extends string = string> {
    protected label: string;
    protected value: T;
    protected numericValueRange: [number, number];
    protected color: string;
    constructor(label: string, value: T, numericValueRange: [number, number], color: string);
    getNumericValue(): number;
    getNumericValueRange(): [number, number];
    getLabel(): string;
    getValue(): T;
    getColor(): string;
    abstract get gradeSystemName(): string;
    toFirestore(): IFirestoreClimbingGrade;
}

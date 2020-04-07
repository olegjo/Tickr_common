import { ClimbingGradeBase } from "./ClimbingGradeBase";
export declare abstract class ClimbingGradeSystem<U extends string = string, T extends ClimbingGradeBase<U> = ClimbingGradeBase<U>> {
    protected grades: T[];
    constructor(grades: T[]);
    get gradeSystemName(): string;
    get length(): number;
    at(index: number): T;
    find(label?: U): T | undefined;
    findClosestByNumericValue(value: number): T;
}

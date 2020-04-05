import { ClimbingGradeBase } from "./ClimbingGradeBase";
export declare class ClimbingGradeList<U = any, T extends ClimbingGradeBase<U> = ClimbingGradeBase<any>> {
    private grades;
    push(value: T): void;
    sort(): void;
    get length(): number;
    get array(): T[];
}

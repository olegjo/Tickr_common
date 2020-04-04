import { ClimbingGradeBase } from "./ClimbingGradeBase";

export class ClimbingGradeList<U = any, T extends ClimbingGradeBase<U> = ClimbingGradeBase<any>> {
    private grades: T[] = [];

    public push(value: T) {
        this.grades.push(value);
    }

    public sort() {
        this.grades = this.grades.sort((v1, v2) => v1.getNumericValue() - v2.getNumericValue());
    }

    get length() {
        return this.grades.length;
    }

    get array() {
        return this.grades;
    }
}
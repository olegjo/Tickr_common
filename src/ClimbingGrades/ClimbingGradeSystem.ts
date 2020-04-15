import { ClimbingGradeBase } from "./ClimbingGradeBase";

export abstract class ClimbingGradeSystem<U extends string = string, T extends ClimbingGradeBase<U> = ClimbingGradeBase<U>> {
    protected grades: T[] = [];

    constructor(grades: T[]) {
        this.grades = grades;
    }

    get gradeSystemName() {
        return this.grades.length > 0 ? this.grades[0].gradeSystemName : "";
    }

    get length() {
        return this.grades.length;
    }

    public at(index: number): T {
        return this.grades[index];
    }

    public findByValue(value?: U): T | undefined {
        if (!value) return undefined;
        return this.grades.find((grade) => grade.getValue() === value);
    }

    public findClosestByNumericValue(value: number): T {
        let closest = this.grades[0];
        let minDistance = Infinity;
        for (const grade of this.grades) {
            const dist = Math.abs(grade.getNumericValue() - value);
            if (dist < minDistance) {
                minDistance = dist;
                closest = grade;
            }
        }
        return closest;
    }
}

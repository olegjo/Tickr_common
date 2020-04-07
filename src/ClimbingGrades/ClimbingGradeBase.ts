
export interface IFirestoreClimbingGrade {
    type: string;
    grade: string;
}

export abstract class ClimbingGradeBase<T extends string = string> {
    protected label: T;
    protected numericValueRange: [number, number];
    protected color: string;
    constructor(label: T, numericValueRange: [number, number], color: string) {
        this.label = label;
        this.numericValueRange = numericValueRange;
        this.color = color;
    }

    public getNumericValue(): number {
        return (this.numericValueRange[0] + this.numericValueRange[1]) / 2;
    }

    public getNumericValueRange(): [number, number] {
        return this.numericValueRange;
    }

    public getLabel(): T {
        return this.label;
    }

    public getColor() {
        return this.color;
    }

    abstract get gradeSystemName(): string;

    public toFirestore(): IFirestoreClimbingGrade {
        return {
            type: this.gradeSystemName,
            grade: this.label
        };
    }
}

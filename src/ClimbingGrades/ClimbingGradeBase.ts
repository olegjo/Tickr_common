
export interface IFirestoreClimbingGrade {
    type: string;
    label: string;
    value: string;
}

export abstract class ClimbingGradeBase<T extends string = string> {
    protected label: string;
    protected value: T;
    protected numericValueRange: [number, number];
    protected color: string;
    constructor(label: string, value: T, numericValueRange: [number, number], color: string) {
        this.label = label;
        this.value = value;
        this.numericValueRange = numericValueRange;
        this.color = color;
    }

    public getNumericValue(): number {
        return (this.numericValueRange[0] + this.numericValueRange[1]) / 2;
    }

    public getNumericValueRange(): [number, number] {
        return this.numericValueRange;
    }

    public getLabel(): string {
        return this.label;
    }

    public getValue(): T {
        return this.value;
    }

    public getColor() {
        return this.color;
    }

    abstract get gradeSystemName(): string;

    public toFirestore(): IFirestoreClimbingGrade {
        return {
            type: this.gradeSystemName,
            label: this.label,
            value: this.value,
        };
    }
}

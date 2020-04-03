export abstract class ClimbingGradeBase<T> {
    protected value: T;
    protected numericValueRange: [number, number];
    protected color: string;
    constructor(value: T, numericValueRange: [number, number], color: string) {
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

    public getValue(): T {
        return this.value;
    }

    abstract get gradeSystemName(): string;

    public toFirestore(): { type: string; grade: T; } {
        return {
            type: this.gradeSystemName,
            grade: this.value
        }
    }
}

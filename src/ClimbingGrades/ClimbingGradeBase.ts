export abstract class ClimbingGradeBase<T = string> {
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

    public toFirestore(): { type: string; grade: T; } {
        return {
            type: this.gradeSystemName,
            grade: this.label
        };
    }
}

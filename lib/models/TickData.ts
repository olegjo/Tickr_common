const ascentStyles = [ "toprope", "flash", "redpoint", "onsight" ] as const;
export type AscentStyle = typeof ascentStyles[number];

export class TickData {
    public style: AscentStyle;
    public routeId?: string;
    public rating?: number;
    public gradeOpinion?: string;

    constructor(data: any) {
        if (!TickData.validate(data)) {
            throw new Error("Validation of tick data failed");
        }

        this.style = data.style;
        this.routeId = data.routeId;
        this.rating = data.rating;
        this.gradeOpinion = data.gradeOpinion;
    }

    static validate(data: any): boolean {
        if (!data) return false;
        if (!data.style) return false;
        if (!ascentStyles.includes(data.style)) return false;
    
        return true;
    }
}

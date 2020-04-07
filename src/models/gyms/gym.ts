import { BarChartData } from "../../BarChartData";

export interface IOpeningHours {
    days: string;
    value: string;
}

export class Gym {
    public gradeBarChartData: BarChartData;
    readonly name: string;
    readonly openingHours: IOpeningHours[];

    constructor(data: any) {
        if (!data.name || !data.openingHours) {
            throw new Error("Invalid argument");
        }

        this.name = data.name;

        this.gradeBarChartData = new BarChartData();
        this.gradeBarChartData.fromFirestore(data.gradeBarChartData);

        this.openingHours = data.openingHours;
    }
}
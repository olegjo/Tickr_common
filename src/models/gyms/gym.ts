import { DocumentData } from "../../firestore_types";
import { BarChartData, IBarChartDataItem } from "../../BarChartData";
import { isNullOrUndefined } from "util";
import { getGradeSystem, ClimbingGradeSystem } from "../../ClimbingGrades";

export interface IOpeningHours {
    days: string;
    value: string;
}

export interface IGymData {
    name: string;
    openingHours: IOpeningHours[];
    gradeSystems: { sportclimbing: string; bouldering: string; };

    gradeDistributionBarChartData?: {
        sportclimbing: IBarChartDataItem[],
        boulders: IBarChartDataItem[],
    };
}

export class Gym {
    static COLLECTION_NAME = "gyms";

    public gradeBarChartDataSportclimbing: BarChartData;
    public gradeBarChartDataBoulders: BarChartData;
    readonly id?: string;
    readonly name: string;
    readonly openingHours: IOpeningHours[];
    readonly gradeSystems: {
        sportclimbing: ClimbingGradeSystem;
        bouldering: ClimbingGradeSystem;
    };

    constructor(data: IGymData, id?: string) {
        if (
            isNullOrUndefined(data.name) ||
            isNullOrUndefined(data.openingHours) ||
            isNullOrUndefined(data.gradeSystems)
        ) {
            throw new Error("Invalid argument");
        }

        this.id = id;

        this.name = data.name;

        this.gradeBarChartDataSportclimbing = new BarChartData();
        this.gradeBarChartDataSportclimbing.fromFirestore(data.gradeDistributionBarChartData?.sportclimbing);

        this.gradeBarChartDataBoulders = new BarChartData();
        this.gradeBarChartDataBoulders.fromFirestore(data.gradeDistributionBarChartData?.boulders);

        this.openingHours = data.openingHours;
        this.gradeSystems = {
            sportclimbing: getGradeSystem(data.gradeSystems.sportclimbing),
            bouldering: getGradeSystem(data.gradeSystems.bouldering)
        }
    }

    public toFirestore(): IGymData {
        return {
            name: this.name,
            openingHours: this.openingHours,
            gradeSystems: {
                sportclimbing: this.gradeSystems.sportclimbing.gradeSystemName,
                bouldering: this.gradeSystems.bouldering.gradeSystemName
            },
            gradeDistributionBarChartData: {
                boulders: this.gradeBarChartDataBoulders.toFirestore(),
                sportclimbing: this.gradeBarChartDataSportclimbing.toFirestore(),
            },
        };
    }

    static toFirestore(data: Gym): DocumentData {
        return data.toFirestore();
    }
    
    static fromFirestore(data: DocumentData): Gym {
        return new Gym(data as IGymData);
    }
}

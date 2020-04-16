import { DocumentData } from "../../firestore_types";
import { BarChartData, IBarChartDataItem } from "../../BarChartData";
import * as ClimbingGrades from "../../ClimbingGrades";
import { isNullOrUndefined } from "util";
import * as ClimbingHolds from "../../ClimbingHolds";

interface ISector {
    id: string;
    name: string;
};

interface IGym {
    id: string;
    name: string;
};

interface IRouteSetter {
    uid: string;
    name: string;
};

interface IAverageData {
    n: number;
    total: number;
}

const routeTypes = [ "sportclimbing", "bouldering" ] as const;
export type RouteType = typeof routeTypes[number];

export interface IPostRouteData {
    type: RouteType;
    name?: string;
    grade: ClimbingGrades.IFirestoreClimbingGrade;
    gymId: string;
    sectorId: string;
    routesetter: {
        userId: string;
        name: string;
    };
    holds: ClimbingHolds.IFirestoreHoldsCollection;
}

export interface IRouteData {
    name?: string; // required if type === "sportclimbing"
    type: RouteType;
    sector: ISector;
    routeSetter: IRouteSetter;
    gym: IGym;
    difficulty: ClimbingGrades.IFirestoreClimbingGrade;

    holds: ClimbingHolds.IFirestoreHoldsCollection;
    gradeOpinionBarChart?: IBarChartDataItem[];
    originalDifficulty?: ClimbingGrades.IFirestoreClimbingGrade;
    tickCountFlash?: number;
    tickCountOnsight?: number;
    tickCountRedpoint?: number;
    tickCountToprope?: number;
    averageGradeData?: IAverageData;
}

export function validatePostRouteData(data: IPostRouteData): boolean {
    if (!data) return false;

    if (!routeTypes.includes(data.type)) return false;;

    if (data.type === "sportclimbing") {
        if (typeof(data.name) !== "string") return false;
        if (data.name?.length <= 0) return false;
    }

    if (typeof(data.gymId) !== "string") return false;
    if (data.gymId?.length <= 0) return false;

    if (typeof(data.sectorId) !== "string") return false;
    if (data.sectorId?.length <= 0) return false;

    if (!data.holds) return false;

    return true;
}

export class Route {
    static COLLECTION_NAME = "routes";

    public gradeOpinionChartData: BarChartData;
    public averageGradeData?: IAverageData;
    public name?: string;
    public grade: ClimbingGrades.ClimbingGradeBase<any>;
    
    private _routeSetter: IRouteSetter;
    
    readonly id?: string;
    
    readonly sector: ISector;
    readonly gym: IGym;
    readonly type: RouteType;
    readonly originalGrade: ClimbingGrades.ClimbingGradeBase<any>;
    readonly gradeSystem: ClimbingGrades.ClimbingGradeSystem;
    readonly holds: ClimbingHolds.HoldsCollection;
    readonly tickCountFlash: number = 0;
    readonly tickCountRedpoint: number = 0;
    readonly tickCountToprope: number = 0;
    readonly tickCountOnsight: number = 0;

    constructor(data: IRouteData, id?: string) {
        this.id = id;
        
        this.name = data.name;
        this.type = data.type;
        if (this.type === "sportclimbing" && !this.name) throw new Error("Invalid argument.");

        this.sector = data.sector;
        this._routeSetter = data.routeSetter;
        this.gym = data.gym;
        if (!this.sector || !this._routeSetter || !this.gym) throw new Error("Invalid argument.");

        if (isNullOrUndefined(data.holds)) {
            throw new Error("Invalid argument");
        }

        this.holds = ClimbingHolds.getClimbingHoldsCollection(data.holds);

        this.gradeOpinionChartData = new BarChartData();
        this.gradeOpinionChartData.fromFirestore(data.gradeOpinionBarChart);

        this.gradeSystem = ClimbingGrades.getGradeSystem(data.difficulty.type);
        
        const grade = this.gradeSystem.findByValue(data.difficulty?.value);
        if (!grade) throw new Error("Invalid argument");
        this.grade = grade;

        const originalGrade = this.gradeSystem.findByValue(data.originalDifficulty?.value);
        if (originalGrade) this.originalGrade = originalGrade;
        else this.originalGrade = this.grade;

        this.averageGradeData = data.averageGradeData;

        this.tickCountFlash = data.tickCountFlash || 0;
        this.tickCountOnsight = data.tickCountOnsight || 0;
        this.tickCountRedpoint = data.tickCountRedpoint || 0;
        this.tickCountToprope = data.tickCountToprope || 0;
    }

    public setNewGrade(grade: ClimbingGrades.ClimbingGradeBase<any>) {
        if (grade) {
            if (grade.getLabel() !== this.grade.getLabel()) {
                console.log("Grade value updated.");
            }
            this.grade = grade;
        }
    }

    public toFirestore(): IRouteData {
        let ret = {
            name: this.name,
            type: this.type,
            sector: this.sector,
            routeSetter: this._routeSetter,
            gym: this.gym,
            difficulty: this.grade.toFirestore(),
            originalDifficulty: this.originalGrade.toFirestore(),
            gradeOpinionBarChart: this.gradeOpinionChartData.toFirestore(),
            averageGradeData: this.averageGradeData,
            holds: this.holds.toFirestore(),
            tickCountFlash: this.tickCountFlash,
            tickCountOnsight: this.tickCountOnsight,
            tickCountRedpoint: this.tickCountRedpoint,
            tickCountToprope: this.tickCountToprope
        };
        
        return ret;
    }

    static toFirestore(data: Route): DocumentData {
        return data.toFirestore();
    }
    
    static fromFirestore(data: DocumentData): Route {
        return new Route(data as IRouteData);
    }

    get routeSetter() {
        return this._routeSetter;
    }
}

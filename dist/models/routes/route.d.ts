import { BarChartData } from "../../BarChartData";
import * as ClimbingGrades from "../../ClimbingGrades";
declare type DocumentData = {
    [field: string]: any;
};
interface ISector {
    id: string;
    name: string;
}
interface IGym {
    id: string;
    name: string;
}
interface IRouteSetter {
    uid: string;
    name: string;
}
interface IAverageData {
    n: number;
    total: number;
}
declare const routeTypes: readonly ["route", "boulder"];
declare type RouteType = typeof routeTypes[number];
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
}
export declare function validatePostRouteData(data: IPostRouteData): boolean;
export declare class Route {
    gradeOpinionChartData: BarChartData;
    averageGradeData?: IAverageData;
    name: string;
    grade: ClimbingGrades.ClimbingGradeBase<any>;
    private _routeSetter;
    private _sector;
    readonly gym: IGym;
    readonly type: RouteType;
    readonly originalGrade: ClimbingGrades.ClimbingGradeBase<any>;
    readonly gradeSystem: ClimbingGrades.ClimbingGradeSystem;
    readonly tickCountFlash: number;
    readonly tickCountRedpoint: number;
    readonly tickCountToprope: number;
    readonly tickCountOnsight: number;
    constructor(data: any);
    setNewGrade(grade: ClimbingGrades.ClimbingGradeBase<any>): void;
    toFirestore(): {
        name: string;
        type: "route" | "boulder";
        sector: ISector;
        routeSetter: IRouteSetter;
        gym: IGym;
        difficulty: {
            type: string;
            grade: any;
        };
        originalDifficulty: {
            type: string;
            grade: any;
        };
        gradeOpinionBarChart: import("../../BarChartData").IBarChartDataItem[];
        averageGradeData: IAverageData | undefined;
        tickCountFlash: number;
        tickCountOnsight: number;
        tickCountRedpoint: number;
        tickCountToprope: number;
    };
    static toFirestore(data: Route): DocumentData;
    static fromFirestore(data: DocumentData): Route;
    get sector(): ISector;
    get routeSetter(): IRouteSetter;
}
export {};

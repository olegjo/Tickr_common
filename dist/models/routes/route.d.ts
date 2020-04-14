import { DocumentData } from "../../firestore_types";
import { BarChartData, IBarChartDataItem } from "../../BarChartData";
import * as ClimbingGrades from "../../ClimbingGrades";
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
export interface IRouteData {
    name?: string;
    type: RouteType;
    sector: ISector;
    routeSetter: IRouteSetter;
    gym: IGym;
    difficulty: ClimbingGrades.IFirestoreClimbingGrade;
    gradeOpinionBarChart?: IBarChartDataItem[];
    originalDifficulty?: ClimbingGrades.IFirestoreClimbingGrade;
    tickCountFlash?: number;
    tickCountOnsight?: number;
    tickCountRedpoint?: number;
    tickCountToprope?: number;
    averageGradeData?: IAverageData;
}
export declare function validatePostRouteData(data: IPostRouteData): boolean;
export declare class Route {
    gradeOpinionChartData: BarChartData;
    averageGradeData?: IAverageData;
    name?: string;
    grade: ClimbingGrades.ClimbingGradeBase<any>;
    private _routeSetter;
    private _sector;
    readonly id?: string;
    readonly gym: IGym;
    readonly type: RouteType;
    readonly originalGrade: ClimbingGrades.ClimbingGradeBase<any>;
    readonly gradeSystem: ClimbingGrades.ClimbingGradeSystem;
    readonly tickCountFlash: number;
    readonly tickCountRedpoint: number;
    readonly tickCountToprope: number;
    readonly tickCountOnsight: number;
    constructor(data: IRouteData, id?: string);
    setNewGrade(grade: ClimbingGrades.ClimbingGradeBase<any>): void;
    toFirestore(): IRouteData;
    static toFirestore(data: Route): DocumentData;
    static fromFirestore(data: DocumentData): Route;
    get sector(): ISector;
    get routeSetter(): IRouteSetter;
}
export {};

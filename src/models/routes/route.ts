import { BarChartData } from "../../BarChartData";
import * as ClimbingGrades from "../../ClimbingGrades";

type DocumentData = {
    [field: string]: any;
};

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

export class Route {
    public gradeOpinionChartData: BarChartData;
    public averageGradeData?: IAverageData;
    public name: string;
    public grade: ClimbingGrades.ClimbingGradeBase<any>;
    
    private _routeSetter: IRouteSetter;
    private _sector: ISector;
    
    readonly gym: IGym;
    readonly type: "route" | "boulder";
    readonly originalGrade: ClimbingGrades.ClimbingGradeBase<any>;
    readonly gradeSystem: ClimbingGrades.ClimbingGradeSystem;
    readonly tickCountFlash: number = 0;
    readonly tickCountRedpoint: number = 0;
    readonly tickCountToprope: number = 0;
    readonly tickCountOnsight: number = 0;

    constructor(data: any) {
        this.name = data.name;
        this.type = data.type;
        if (this.type === "route" && !this.name) throw new Error("Invalid argument.");

        this._sector = data.sector;
        this._routeSetter = data.routeSetter;
        this.gym = data.gym;
        if (!this._sector || !this._routeSetter || !this.gym) throw new Error("Invalid argument.");

        this.gradeOpinionChartData = new BarChartData();
        this.gradeOpinionChartData.fromFirestore(data.gradeOpinionBarChart);

        this.gradeSystem = ClimbingGrades.getGradeSystem(data.difficulty?.type);
        
        const grade = this.gradeSystem.find(data.difficulty?.grade);
        if (!grade) throw new Error("Invalid argument");
        this.grade = grade;

        const originalGrade = this.gradeSystem.find(data.originalDifficulty?.grade);
        if (originalGrade) this.originalGrade = originalGrade;
        else this.originalGrade = this.grade;

        this.averageGradeData = data.averageGradeData;

        this.tickCountFlash = data.tickCountFlash;
        this.tickCountOnsight = data.tickCountOnsight;
        this.tickCountRedpoint = data.tickCountRedpoint;
        this.tickCountToprope = data.tickCountToprope;
    }

    public setNewGrade(grade: ClimbingGrades.ClimbingGradeBase<any>) {
        if (grade) {
            if (grade.getLabel() !== this.grade.getLabel()) {
                console.log("Grade value updated.");
            }
            this.grade = grade;
        }
    }

    public toFirestore(): DocumentData {
        return {
            name: this.name,
            type: this.type,
            sector: this._sector,
            routeSetter: this._routeSetter,
            gym: this.gym,
            difficulty: this.grade.toFirestore(),
            originalDifficulty: this.originalGrade.toFirestore(),
            gradeOpinionBarChart: this.gradeOpinionChartData.toFirestore(),
            averageGradeData: this.averageGradeData,
            tickCountFlash: this.tickCountFlash,
            tickCountOnsight: this.tickCountOnsight,
            tickCountRedpoint: this.tickCountRedpoint,
            tickCountToprope: this.tickCountToprope
        };
    }

    static toFirestore(data: Route): DocumentData {
        return data.toFirestore();
    }
    
    static fromFirestore(data: DocumentData): Route {
        return new Route(data);
    }

    get sector() {
        return this._sector;
    }

    get routeSetter() {
        return this._routeSetter;
    }
}

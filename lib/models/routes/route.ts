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

    private name: string;
    private type: "route" | "boulder";
    private sector: ISector;
    private routeSetter: IRouteSetter;
    private gym: IGym;
    private grade: ClimbingGrades.ClimbingGradeBase<any>;
    
    readonly originalGrade: ClimbingGrades.ClimbingGradeBase<any>;
    readonly gradeSystem: ClimbingGrades.ClimbingGradeSystem;

    constructor(data: any) {
        this.name = data.name;
        this.type = data.type;
        if (this.type === "route" && !this.name) throw new Error("Invalid argument.");

        this.sector = data.sector;
        this.routeSetter = data.routeSetter;
        this.gym = data.gym;
        if (!this.sector || !this.routeSetter || !this.gym) throw new Error("Invalid argument.");

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
            sector: this.sector,
            routeSetter: this.routeSetter,
            gym: this.gym,
            difficulty: this.grade.toFirestore(),
            originalDifficulty: this.originalGrade.toFirestore(),
            gradeOpinionBarChart: this.gradeOpinionChartData.toFirestore(),
            averageGradeData: this.averageGradeData,
        };
    }
    
    static toFirestore(data: Route): DocumentData {
        return data.toFirestore();
    }
    
    static fromFirestore(data: DocumentData): Route {
        return new Route(data);
    }
}

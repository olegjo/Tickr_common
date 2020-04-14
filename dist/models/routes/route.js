"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BarChartData_1 = require("../../BarChartData");
const ClimbingGrades = require("../../ClimbingGrades");
;
;
;
const routeTypes = ["route", "boulder"];
function validatePostRouteData(data) {
    var _a, _b, _c;
    if (!data)
        return false;
    if (!routeTypes.includes(data.type))
        return false;
    ;
    if (data.type === "route") {
        if (typeof (data.name) !== "string")
            return false;
        if (((_a = data.name) === null || _a === void 0 ? void 0 : _a.length) <= 0)
            return false;
    }
    if (typeof (data.gymId) !== "string")
        return false;
    if (((_b = data.gymId) === null || _b === void 0 ? void 0 : _b.length) <= 0)
        return false;
    if (typeof (data.sectorId) !== "string")
        return false;
    if (((_c = data.sectorId) === null || _c === void 0 ? void 0 : _c.length) <= 0)
        return false;
    return true;
}
exports.validatePostRouteData = validatePostRouteData;
class Route {
    constructor(data, id) {
        var _a, _b;
        this.tickCountFlash = 0;
        this.tickCountRedpoint = 0;
        this.tickCountToprope = 0;
        this.tickCountOnsight = 0;
        this.id = id;
        this.name = data.name;
        this.type = data.type;
        if (this.type === "route" && !this.name)
            throw new Error("Invalid argument.");
        this._sector = data.sector;
        this._routeSetter = data.routeSetter;
        this.gym = data.gym;
        if (!this._sector || !this._routeSetter || !this.gym)
            throw new Error("Invalid argument.");
        this.gradeOpinionChartData = new BarChartData_1.BarChartData();
        this.gradeOpinionChartData.fromFirestore(data.gradeOpinionBarChart);
        this.gradeSystem = ClimbingGrades.getGradeSystem(data.difficulty.type);
        const grade = this.gradeSystem.find((_a = data.difficulty) === null || _a === void 0 ? void 0 : _a.grade);
        if (!grade)
            throw new Error("Invalid argument");
        this.grade = grade;
        const originalGrade = this.gradeSystem.find((_b = data.originalDifficulty) === null || _b === void 0 ? void 0 : _b.grade);
        if (originalGrade)
            this.originalGrade = originalGrade;
        else
            this.originalGrade = this.grade;
        this.averageGradeData = data.averageGradeData;
        this.tickCountFlash = data.tickCountFlash || 0;
        this.tickCountOnsight = data.tickCountOnsight || 0;
        this.tickCountRedpoint = data.tickCountRedpoint || 0;
        this.tickCountToprope = data.tickCountToprope || 0;
    }
    setNewGrade(grade) {
        if (grade) {
            if (grade.getLabel() !== this.grade.getLabel()) {
                console.log("Grade value updated.");
            }
            this.grade = grade;
        }
    }
    toFirestore() {
        let ret = {
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
        return ret;
    }
    static toFirestore(data) {
        return data.toFirestore();
    }
    static fromFirestore(data) {
        return new Route(data);
    }
    get sector() {
        return this._sector;
    }
    get routeSetter() {
        return this._routeSetter;
    }
}
exports.Route = Route;
//# sourceMappingURL=route.js.map
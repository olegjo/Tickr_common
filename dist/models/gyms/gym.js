"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BarChartData_1 = require("../../BarChartData");
const util_1 = require("util");
const ClimbingGrades_1 = require("../../ClimbingGrades");
class Gym {
    constructor(data, id) {
        var _a, _b;
        if (util_1.isNullOrUndefined(data.name) ||
            util_1.isNullOrUndefined(data.openingHours) ||
            util_1.isNullOrUndefined(data.gradeSystems)) {
            throw new Error("Invalid argument");
        }
        this.id = id;
        this.name = data.name;
        this.gradeBarChartDataSportclimbing = new BarChartData_1.BarChartData();
        this.gradeBarChartDataSportclimbing.fromFirestore((_a = data.gradeDistributionBarChartData) === null || _a === void 0 ? void 0 : _a.sportclimbing);
        this.gradeBarChartDataBoulders = new BarChartData_1.BarChartData();
        this.gradeBarChartDataBoulders.fromFirestore((_b = data.gradeDistributionBarChartData) === null || _b === void 0 ? void 0 : _b.boulders);
        this.openingHours = data.openingHours;
        this.gradeSystems = {
            sportclimbing: ClimbingGrades_1.getGradeSystem(data.gradeSystems.sportclimbing),
            bouldering: ClimbingGrades_1.getGradeSystem(data.gradeSystems.bouldering)
        };
    }
    toFirestore() {
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
    static toFirestore(data) {
        return data.toFirestore();
    }
    static fromFirestore(data) {
        return new Gym(data);
    }
}
exports.Gym = Gym;
Gym.COLLECTION_NAME = "gyms";
//# sourceMappingURL=gym.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BarChartData_1 = require("../../BarChartData");
class Gym {
    constructor(data, id) {
        var _a, _b;
        if (!data.name || !data.openingHours || !data.gradeSystems) {
            throw new Error("Invalid argument");
        }
        this.id = id;
        this.name = data.name;
        this.gradeBarChartDataRoutes = new BarChartData_1.BarChartData();
        this.gradeBarChartDataRoutes.fromFirestore((_a = data.gradeDistributionBarChartData) === null || _a === void 0 ? void 0 : _a.routes);
        this.gradeBarChartDataBoulders = new BarChartData_1.BarChartData();
        this.gradeBarChartDataBoulders.fromFirestore((_b = data.gradeDistributionBarChartData) === null || _b === void 0 ? void 0 : _b.boulders);
        this.openingHours = data.openingHours;
        this.gradeSystems = data.gradeSystems;
    }
    toFirestore() {
        return {
            name: this.name,
            openingHours: this.openingHours,
            gradeSystems: this.gradeSystems,
            gradeDistributionBarChartData: {
                boulders: this.gradeBarChartDataBoulders.toFirestore(),
                routes: this.gradeBarChartDataRoutes.toFirestore(),
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
//# sourceMappingURL=gym.js.map
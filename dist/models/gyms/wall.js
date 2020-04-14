"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BarChartData_1 = require("../../BarChartData");
class Wall {
    constructor(data) {
        if (!data.height_meters || !data.name || !data.type || !data.routeCount) {
            throw new Error("Invalid argument");
        }
        this.type = data.type;
        this.height = data.height_meters;
        this.name = data.name;
        this.routeCount = data.routeCount;
        this.gradeBarChartData = new BarChartData_1.BarChartData();
        this.gradeBarChartData.fromFirestore(data.gradeDistributionBarChartData);
    }
}
exports.Wall = Wall;
//# sourceMappingURL=wall.js.map
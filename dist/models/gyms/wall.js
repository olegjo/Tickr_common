"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BarChartData_1 = require("../../BarChartData");
const util_1 = require("util");
class Wall {
    constructor(data, id) {
        if (util_1.isNullOrUndefined(data.height_meters) ||
            util_1.isNullOrUndefined(data.name) ||
            util_1.isNullOrUndefined(data.type) ||
            util_1.isNullOrUndefined(data.routeCount) ||
            util_1.isNullOrUndefined(data.sector)) {
            throw new Error("Invalid argument");
        }
        this.id = id;
        this.type = data.type;
        this.height = data.height_meters;
        this.name = data.name;
        this.routeCount = data.routeCount;
        this.sector = data.sector;
        this.gradeBarChartData = new BarChartData_1.BarChartData();
        this.gradeBarChartData.fromFirestore(data.gradeDistributionBarChartData);
    }
    toFirestore() {
        return {
            name: this.name,
            height_meters: this.height,
            routeCount: this.routeCount,
            type: this.type,
            gradeDistributionBarChartData: this.gradeBarChartData.toFirestore(),
            sector: this.sector,
        };
    }
    static toFirestore(data) {
        return data.toFirestore();
    }
    static fromFirestore(data) {
        return new Wall(data);
    }
}
exports.Wall = Wall;
Wall.COLLECTION_NAME = "walls";
//# sourceMappingURL=wall.js.map
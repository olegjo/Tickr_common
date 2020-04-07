"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BarChartData_1 = require("../../BarChartData");
class Gym {
    constructor(data) {
        if (!data.name || !data.openingHours) {
            throw new Error("Invalid argument");
        }
        this.name = data.name;
        this.gradeBarChartData = new BarChartData_1.BarChartData();
        this.gradeBarChartData.fromFirestore(data.gradeBarChartData);
        this.openingHours = data.openingHours;
    }
    toFirestore() {
        return {
            name: this.name,
            openingHours: this.openingHours,
            gradeBarChartData: this.gradeBarChartData.toFirestore()
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
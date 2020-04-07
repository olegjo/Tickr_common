"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDefined(v) {
    return v !== undefined && v !== null;
}
class BarChartData {
    constructor() {
        this.data = [];
    }
    increment(label, value) {
        const existingIdx = this.data.findIndex((item) => item.label === label);
        if (existingIdx === -1) {
            this.data.push({ label, value });
        }
        else {
            this.data[existingIdx].value += value;
        }
    }
    getData() {
        return this.data;
    }
    toFirestore() {
        return this.data;
    }
    fromFirestore(data) {
        if (!data)
            return;
        if (!(data instanceof Array))
            return;
        for (const item of data) {
            if (isDefined(item.label) && isDefined(item.value)) {
                this.increment(item.label, item.value);
            }
        }
    }
    sort(compareFn) {
        return this.data.sort(compareFn);
    }
}
exports.BarChartData = BarChartData;
//# sourceMappingURL=BarChartData.js.map
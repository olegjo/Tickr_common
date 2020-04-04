
function isDefined(v: any) {
    return v !== undefined && v !== null;
}

interface IBarChartDataItem {
    label: string;
    value: number;
}

export class BarChartData {
    private data: IBarChartDataItem[] = [];

    public increment(label: string, value: number) {
        const existingIdx = this.data.findIndex((item) => item.label === label);
        if (existingIdx === -1) {
            this.data.push({label, value});
        } else {
            this.data[existingIdx].value += value;
        }
    }

    public getData() {
        return this.data;
    }

    public toFirestore() {
        return this.data;
    }

    public fromFirestore(data: any) {
        if (!data) return;
        if (!(data instanceof Array)) return;
        for (const item of data) {
            if (isDefined(item.label) && isDefined(item.value)) {
                this.increment(item.label, item.value);
            }
        }
    }
}

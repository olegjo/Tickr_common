export interface IBarChartDataItem {
    label: string;
    value: number;
}
export declare class BarChartData {
    private data;
    increment(label: string, value: number): void;
    getData(): IBarChartDataItem[];
    toFirestore(): IBarChartDataItem[];
    fromFirestore(data: any): void;
}

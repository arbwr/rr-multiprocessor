import { GanttChartItem } from "./GanttChartItem";

export class Processor {
    constructor(id) {
        this.id = id; 
        this.availableTime = 0; 
        this.ganttChart = [];
    }

    addGanttChartItem(startTime, endTime) {
        this.ganttChart.push(new GanttChartItem(startTime, endTime));
    }
}
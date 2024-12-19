import { GanttChartItem } from "./GanttChartItem";

export class Processor {
    constructor(id) {
        this.id = id; 
        this.availableTime = 0; 
        this.ganttChart = [];
    }

    addGanttChartItem(processId, startTime, endTime) {
        this.ganttChart.push(new GanttChartItem(processId, startTime, endTime));
    }
}
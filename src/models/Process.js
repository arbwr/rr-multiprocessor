export class Process {
    constructor(id, arrivalTime, burstTime) {
        this.id = id; 
        this.arrivalTime = arrivalTime;
        this.nextArrival = arrivalTime; 
        this.burstTime = burstTime; 
        this.remainingTime = burstTime; 

        /* For Gantt Chart */
        this.endTime = -1; 
        this.waitingTime = 0; 
        this.turnaroundTime = 0; 
    }

    updateWaitingTime(currentTime) {
        this.waitingTime = currentTime - this.arrivalTime - (this.burstTime - this.remainingTime);
    }
    
    calculateWaitingTime() {
        this.waitingTime = this.turnaroundTime - this.burstTime;
    }

    calculateTurnaroundTime() {
        this.turnaroundTime = this.endTime - this.arrivalTime;
    }
}
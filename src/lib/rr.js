import { Processor } from "@/models/Processor";

export const roundRobinScheduler = (processes, numProcessors, quantum) => {

    /* Sort processes by arrival time */
    processes.sort((a, b) => a.arrivalTime - b.arrivalTime);

    /* Create processors */
    let processors = [];
    for (let i = 0; i < numProcessors; i++) {
        processors.push(new Processor(i));
    }

    /* Processes that are ready to execute */
    let readyQueue = [];

    /* Finished processes */
    let completedProcesses = [];

    /* Current time */
    let currentTime = 0;

    /* Continue until all processes are finished */
    while (completedProcesses.length < processes.length) {
        /* Add processes to ready queue, if they have arrived + if they are not completed */
        for (let process of processes) {
            if (process.nextArrival == currentTime && !completedProcesses.includes(process.id)) {
                console.log(`Procces P${process.id} added to ready queue at time ${currentTime}`);
                readyQueue.push(process);
            }
        }

        /* If the ready queue is empty no need for allocation */
        if (readyQueue.length == 0) {
            console.log(`Ready queue is empty at ${currentTime}`);
            currentTime++;
            continue;
        }

        console.log(`Ready queue at ${currentTime}: ${readyQueue.map(p => p.id)}`);

        /* Check processor availability and allocate */
        for (let i = 0; i < processors.length; i++) {

            /* Break loop when queue is emptied */
            if (readyQueue.length == 0) break;

            /* If processor is available */
            if (processors[i].availableTime <= currentTime) {

                /* Get the process from the front of the queue and remove it */
                let process = readyQueue.shift();

                console.log(`P${process.id} is allocated to processor ${i} at time ${currentTime}`);

                /* Execute => Quantum or minimum (for process with less BT than quantum */
                const executeTime = Math.min(quantum, process.remainingTime);
                process.remainingTime -= executeTime;
                processors[i].availableTime = currentTime + executeTime;
                process.nextArrival = currentTime + executeTime;

                console.log(`P${process.id} is executed for ${executeTime} units at time. Next arrival: ${process.nextArrival}. Remaining time: ${process.remainingTime}`);

                /* Add to Gantt Chart Item */
                // processors[i].addGanttChartItem(currentTime, currentTime + executeTime);

                /* Do the calculation if the process is finished */
                if (process.remainingTime == 0) {

                    process.endTime = currentTime + executeTime;
                    process.turnaroundTime = process.endTime - process.arrivalTime;
                    process.waitingTime = process.turnaroundTime - process.burstTime;
                    completedProcesses.push(process.id);

                    console.log(`P${process.id} is completed at time ${currentTime + executeTime}`);
                }
            }
        }

        /* Increment time */
        currentTime++;
    }

    console.log("ksdjslkd");
    console.log(processes);

    return processes;
}
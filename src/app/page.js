"use client";

/* Next */
import { useState } from "react";

/* Components */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProcessTable } from "@/components/table/ProcessTable";
import { ProcessInput } from "@/components/inputs/ProcessInput";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";

/* Models */
import { Process } from "@/models/Process";

/* Libs */
import { roundRobinScheduler } from "@/lib/rr";
import { calculateATT, calculateAWT } from "@/lib/utils";
import { ScheduledProcessTable } from "@/components/table/ScheduledProcessTable";


export default function Scheduler() {

  const [numberOfProcessors, setNumberOfProcessors] = useState(1);
  const [timeQuantum, setTimeQuantum] = useState("");

  /* Processes List */
  const [processes, setProcesses] = useState([]);
  const [scheduledProcesses, setScheduledProcesses] = useState([]);

  const addProcess = (process) => {
    setProcesses([...processes, new Process(process.id, process.arrivalTime, process.burstTime)]);
  }

  const schedule = () => {
    const algorithmResponse = roundRobinScheduler(processes, numberOfProcessors, timeQuantum);
    setScheduledProcesses(algorithmResponse);
  }

  return (
    <div className="bg-slate-200 flex flex-col w-full">
      <MaxWidthWrapper className="flex overflow-x-hidden">
        <section id="scheduler" className="w-full flex justify-center mt-5">
          <div className="md:w-4/6 w-full px-3">
            <h1 className="text-2xl text-blue-950 mb-2">Round Robin Multiproccesor algorithm simulatior</h1>
            <div className="flex gap-4 items-end py-2 rounded-lg mb-4">
              <div>
                <p>Number of Processors</p>
                <Input
                  type="number"
                  id="price"
                  placeholder="0"
                  className="border-primary"
                  value={numberOfProcessors}
                  onChange={(e) => setNumberOfProcessors(Number(e.target.value))}
                />
              </div>

              <div>
                <p>Time Quantum</p>
                <Input
                  type="number"
                  id="price"
                  placeholder="0"
                  className="border-primary"
                  value={timeQuantum}
                  onChange={(e) => setTimeQuantum(Number(e.target.value))}
                />
              </div>
            </div>
            <div>
              <p>Processes</p>
              <ProcessInput onProccessAdd={addProcess} />
            </div>

            {processes.length > 0 && (
              <div>
                <ProcessTable processes={processes} />
              </div>
            )}

            <div className="w-100 flex flex-col items-center justify-center">
              <Button
                onClick={schedule}
                className="mt-4"
              >
                Schedule
              </Button>

              {/* Reset button */}
              <Button
                variant="ghost"
                onClick={() => {
                  setProcesses([]);
                  setScheduledProcesses([]);
                  setNumberOfProcessors(1);
                  setTimeQuantum("");
                }}
                className="mt-2"
              >
                Reset
              </Button>

            </div>

            {scheduledProcesses.length > 0 && (
              <div className="mt-4">
                <p>Algorithm Results</p>
                <ScheduledProcessTable processes={scheduledProcesses} />
                <p className="mt-3">
                  Average waiting time: <span className="font-semibold">{calculateAWT(scheduledProcesses)} ms</span>
                </p>
                <p className="mb-10">
                  Average turnaroundTime time: <span className="font-semibold">{calculateATT(scheduledProcesses)} ms</span>
                </p>
              </div>
            )}

          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
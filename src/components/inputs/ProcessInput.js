/* Next */
import { useState } from "react";

/* Components */
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const ProcessInput = ({ onProccessAdd }) => {

    const [id, setId] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");
    const [burstTime, setBurstTime] = useState("");

    const add = () => {
        if (id == null || arrivalTime == null || burstTime == null) return;

        onProccessAdd({ id, arrivalTime, burstTime });
        setId("");
        setArrivalTime("");
        setBurstTime("");
    }

    return (
        <div className="flex justify-between gap-4 items-end bg-white px-4 py-3 rounded-lg shadow-md">
            <div>
                <p>Process ID</p>
                <Input
                    type="number"
                    id="id"
                    placeholder="1"
                    className="border-primary"
                    value={id}
                    onChange={(e) => setId(Number(e.target.value))}
                />
            </div>

            <div>
                <p>Arrival Time</p>
                <Input
                    type="number"
                    id="arrivalTime"
                    placeholder="0"
                    className="border-primary"
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(Number(e.target.value))}
                />
            </div>

            <div>
                <p>Burst Time</p>
                <Input
                    type="number"
                    id="burstTime"
                    placeholder="0"
                    className="border-primary"
                    value={burstTime}
                    onChange={(e) => setBurstTime(Number(e.target.value))}
                />
            </div>

            <div>
                <Button
                    className="px-8"
                    onClick={add}
                >
                    Add
                </Button>
            </div>
        </div>
    )
}
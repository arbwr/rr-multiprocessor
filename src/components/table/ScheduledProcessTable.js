/* Components */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const ScheduledProcessTable = ({ processes }) => {
    return (
        <Table className="w-full bg-white rounded-lg shadow-md">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Arrival Time</TableHead>
                    <TableHead>Burst Time</TableHead>
                    <TableHead>Finished At</TableHead>
                    <TableHead>Waiting Time</TableHead>
                    <TableHead>Turnaround Time</TableHead>

                </TableRow>
            </TableHeader>

            <TableBody>
                {processes.map((process) => (
                    <TableRow key={process.id}>
                        <TableCell className="">{process.id}</TableCell>
                        <TableCell className="">{process.arrivalTime}</TableCell>
                        <TableCell className="">{process.burstTime}</TableCell>
                        <TableCell className="">{process.endTime}</TableCell>
                        <TableCell className="">{process.waitingTime}</TableCell>
                        <TableCell className="">{process.turnaroundTime}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

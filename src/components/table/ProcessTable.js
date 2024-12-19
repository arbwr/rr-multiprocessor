
/* Components */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const ProcessTable = ({ processes }) => {
    return (
        <Table className="w-full bg-white rounded-lg shadow-md mt-5">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Arrival Time</TableHead>
                    <TableHead>Burst Time</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {processes.map((process) => (
                    <TableRow  key={process.id}>
                        <TableCell className="">{process.id}</TableCell>
                        <TableCell className="">{process.arrivalTime}</TableCell>
                        <TableCell className="">{process.burstTime}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
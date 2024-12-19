import { getColorFromId } from "@/lib/utils";

const GanttChart = ({ processors }) => {

    const maxTime = Math.max(
        ...processors.flatMap((processor) =>
            processor.ganttChart.map((item) => item.endTime)
        )
    );

    return (
        <div className="gantt-chart mb-10">
            {processors.map((processor) => (
                <div key={processor.id} className="processor-row">
                    <div className="processor-label">Processor {processor.id + 1}</div>
                    <div className="processor-timeline rounded-md">
                        {processor.ganttChart.map((item, index) => (
                            <div
                                key={index}
                                className={`gantt-block rounded-sm`}
                                style={{
                                    backgroundColor: getColorFromId(item.id),
                                    left: `${(item.startTime / maxTime) * 100}%`,
                                    width: `${((item.endTime - item.startTime) / maxTime) * 100}%`,
                                }}
                            >
                                <div className="flex flex-col items-center justify-center h-[50px]">
                                    <p>P{item.id}</p>
                                    <p className="flex justify-between w-full px-2">
                                        <span>{item.startTime}</span>
                                        <span>{item.endTime}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <style jsx>{`
        .gantt-chart {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .processor-row {
          display: flex;
          align-items: center;
        }
        .processor-label {
          width: 120px;
          font-weight: bold;
        }
        .processor-timeline {
          position: relative;
          height: 50px;
          width: 100%;
          background: #f3f3f3;
          border: 1px solid #ccc;
          display: flex;
        }
        .gantt-block {
          position: absolute;
          top: 0;
          bottom: 0;
          color: white;
          text-align: center;
     
          font-size: 12px;
          overflow: hidden;
          border: 1px solid white;
        }
      `}</style>
        </div>
    );
};

export default GanttChart;
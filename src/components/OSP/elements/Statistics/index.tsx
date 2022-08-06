import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import classes from "./styles.module.css";
ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement);

const labels: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const datapointsSelect = [70, 20, 20, 60, 60, 120, 10];
const datapointsOrder = [50, 30, 60, 30, 90, 120, 100];

export const Statistics = () => {
  return (
    <div className={classes.chartContainer}>
      <Line
        data={{
          labels: labels,

          datasets: [
            {
              label: "Ethic",
              data: datapointsSelect,
              borderColor: "blue",
              fill: true,
              tension: 0.4,
              backgroundColor: "#fff",
              borderWidth: 4,
            },
            {
              label: "Western",
              data: datapointsOrder,
              borderColor: "red",
              fill: false,
              tension: 0.4,
              backgroundColor: "#fff",
              borderWidth: 4,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              display: true,
              grid: {
                color: "#f7faff",
              },
            },
            y: {
              display: true,
              grid: {
                color: "#f7faff",
              },
              beginAtZero: true,
              type: "linear",
              grace: "10%",
            },
          },
        }}
      />
    </div>
  );
};

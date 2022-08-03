import { DayColumn } from "./elements/DayColumn";
import { WorkHoursTableHeading } from "./elements/WorkHoursTableHeading";
import classes from "./styles.module.css";

const REASON_COLORS = {
  Sunday: "#ffefea",
  Holiday: "#d5ffed",
  "Paid Leave": "#fff6dd",
};

const data = [
  {
    hours: 5,
    day: 1,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 2,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 3,
    selection: 9,
    reason: "Holiday",
  },
  {
    hours: 5,
    day: 4,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 5,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 6,
    selection: 9,
    reason: "Paid Leave",
  },
  {
    hours: 5,
    day: 7,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 8,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 9,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 10,
    selection: 9,
    reason: "Paid Leave",
  },
  {
    hours: 5,
    day: 11,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 11,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 12,
    selection: 9,
    reason: "Paid Leave",
  },
  {
    hours: 5,
    day: 13,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 14,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 15,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 16,
    selection: 9,
    reason: "Paid Leave",
  },
  {
    hours: 5,
    day: 17,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 18,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 19,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 20,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 21,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 22,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 23,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 24,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 25,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 26,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 27,
    selection: 9,
    reason: "",
  },
  {
    hours: 5,
    day: 28,
    selection: 9,
    reason: "",
  },
];

export const WorkHoursTable = () => {
  const hoursData = data.reduce((prev: any, current, index) => {
    console.log({ prev, current, index });
    if (index === 0) {
      prev.push([current]);
      return prev;
    }
    if (index % 7 === 0) {
      prev.push([current]);
      return prev;
    } else {
      prev[prev.length - 1].push(current);
      return prev;
    }
  }, [] as any[]);

  return (
    <table className={classes.table} cellSpacing={11}>
      <WorkHoursTableHeading />
      {hoursData.map((days: any) => (
        <tr>
          {days.map((day: any, index: number) => (
            <td>
              <DayColumn
                {...day}
                day={day.day}
                {...{
                  bgColor:
                    index === 0
                      ? REASON_COLORS["Sunday"]
                      : day.reason
                      ? REASON_COLORS[day.reason as keyof typeof REASON_COLORS]
                      : "white",
                }}
              />
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

import { Typography } from "@components/common";
import React from "react";
import classes from "./styles.module.css";

// TODO: change to data from api
const tempData = [
  {
    name: "Kuldeep Dhaka",
    selection: 90,
    order: 20,
    percentage: 20,
  },
  {
    name: "Atul Sharma",
    selection: 90,
    order: 20,
    percentage: 20,
  },
  {
    name: "Sandeep Meena",
    selection: 90,
    order: 20,
    percentage: 20,
  },
];

export const MemberDataTable = ({ teams = tempData }) => {
  return (
    <table className={classes.container}>
      <TableHead />
      {teams.map((team) => (
        <TableRow team={team} />
      ))}
      <TableFooter selection={45} order={90} percentage={20} />
    </table>
  );
};

const TableHead = () => (
  <tr>
    <td>
      <Typography variant="h3">Name</Typography>
    </td>
    <td>
      <Typography variant="h3">Items Selected</Typography>
    </td>
    <td>
      <Typography variant="h3">Work Hours</Typography>
    </td>
    <td>
      <Typography variant="h3">Work Percentage</Typography>
    </td>
  </tr>
);

const TableRow = ({
  team,
}: {
  team: { name: string; selection: number; order: number; percentage: number };
}) => (
  <tr>
    <td>
      <Typography>{team.name}</Typography>
    </td>
    <td>
      <Typography>{team.selection}</Typography>
    </td>
    <td>
      <Typography>{team.order}</Typography>
    </td>
    <td>
      <Typography>{team.percentage}</Typography>
    </td>
  </tr>
);

const TableFooter = ({
  selection,
  order,
  percentage,
}: {
  selection: number;
  order: number;
  percentage: number;
}) => {
  return (
    <tr className={classes.footerRow}>
      <td align="center"></td>
      <td>
        <Typography variant="h3">{selection}</Typography>
      </td>
      <td>
        <Typography variant="h3">{order}</Typography>
      </td>
      <td>
        <Typography variant="h3">{percentage}%</Typography>
      </td>
    </tr>
  );
};

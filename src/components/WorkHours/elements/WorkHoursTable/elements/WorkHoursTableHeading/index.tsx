import { Typography } from "@components/common";

export const WorkHoursTableHeading = () => {
  return (
    <tr>
      <th>
        <Typography align="left" variant="h4">
          Sun
        </Typography>
      </th>
      <th>
        <Typography align="left" variant="h4">
          Mon
        </Typography>
      </th>
      <th>
        <Typography align="left" variant="h4">
          Tue
        </Typography>
      </th>
      <th>
        <Typography align="left" variant="h4">
          Wed
        </Typography>
      </th>
      <th>
        <Typography align="left" variant="h4">
          Thu
        </Typography>
      </th>
      <th>
        <Typography align="left" variant="h4">
          Fri
        </Typography>
      </th>
      <th>
        <Typography align="left" variant="h4">
          Sat
        </Typography>
      </th>
    </tr>
  );
};

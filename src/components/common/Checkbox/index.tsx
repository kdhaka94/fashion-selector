import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
} from "@mui/material";
import { Typography } from "../Typography";
import classes from "./styles.module.css";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export type IPropsCheckbox = {
label?:string;
errorText?: string;
} & CheckboxProps;

export const CheckboxUi = ({ label, errorText = "", ...rest }: IPropsCheckbox) => {
return (
  <div>
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          {...rest}
        />
      }
    />
  </div>
);
};


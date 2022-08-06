import { Image, Typography } from "@components/common";
import classes from "./styles.module.css";
export const ProductItem = ({
  img = "https://mui.com/static/images/avatar/1.jpg",
  productName = "Western Wear",
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <Image src={img} width={151} height={151} />
      </div>
      <Typography variant="caption" color="#383838" align="center">
        {productName}
      </Typography>
    </div>
  );
};

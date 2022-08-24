import { CheckboxUi, Image } from "@components/common";
import classes from "./styles.module.css";


export const Filters = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header} >
          <span className={classes.filter}>
            Filter
          </span>
          <span className={classes.clearAll}>
            Clear all
          </span>
      </div>
      <div className={classes.divider}>  </div>
      <div className={classes.priceRange}>
          <div className={classes.header}>
            <span className={classes.filter}>
              Price Range
            </span>
            <span className={classes.clearAll}>
              <Image src="/assets/images/price-range.webp" width={25} height={25} />
            </span>
          </div>
          <div className={classes.content}>
              <CheckboxUi label={"Rs. 1000 - Rs. 3000"} />
          </div>
      </div>
      <div className={classes.priceRange}>
          <div className={classes.header}>
            <span className={classes.filter}>
              Categories
            </span>
            <span className={classes.clearAll}>
              <Image src="/assets/images/category.webp" width={25} height={25} />
            </span>
          </div>
          <div className={classes.content}>
              <CheckboxUi label={"Tops (200)"} />
              <CheckboxUi label={"T-shirts (150)"} />
              <CheckboxUi label={"Sweaters (50)"} />
              <CheckboxUi label={"Sweatshirts (70)"} />
              <CheckboxUi label={"Dresses (46)"} />
              <div className={classes.header}>
                <CheckboxUi label={"Jeans (32)"} />
                <div className={classes.more} >
                  +12 More..
                </div>
              </div>
          </div>
      </div>
      <div className={classes.priceRange}>
          <div className={classes.header}>
            <span className={classes.filter}>
              Brand
            </span>
            <span className={classes.clearAll}>
              <Image src="/assets/images/brands.webp" width={25} height={25} />
            </span>
          </div>
          <div className={classes.content}>
          <CheckboxUi label={"Roadester (200)"} />
          <CheckboxUi label={"Urbanic (150)"} />
          <CheckboxUi label={"DressBerry (50)"} />
          <CheckboxUi label={"Mango (70)"} />
          </div>
      </div>
    </div>
  );
};

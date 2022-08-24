import AliceCarousel from "react-alice-carousel";
import classes from "./styles.module.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState } from "react";
import { Button, Image } from "@components/common";

export const ImageSlider = () => {
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);

  const items = [
    <img src="https://mui.com/static/images/avatar/1.jpg" role="presentation" />,
    <img src="https://mui.com/static/images/avatar/2.jpg" role="presentation" />,
    <img src="https://mui.com/static/images/avatar/1.jpg" role="presentation" />,
  ];
  const slideNext = () => {
    if (thumbIndex < items.length - 1) {
        setThumbAnimation(true);
        setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
      if (thumbIndex > 0) {
        setThumbAnimation(true);
        setThumbIndex(thumbIndex - 1);
      }
  };

  const syncMainBeforeChange = (e:any) => {
    setThumbAnimation(true);
};

const syncMainAfterChange = (e:any) => {
    if (e.type === 'action') {
        setThumbIndex(e.item);
        setThumbAnimation(false);
    }
};

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
      <div className={classes.btnprev} > <Image onClick={slidePrev} src="/assets/images/previous.webp" className={classes.prevImage} width={50} height={50} /></div>
        <AliceCarousel
          innerWidth={30}
          animationType="fadeout"
          responsive={{
            0: {
                items: 1,
            },
            1024: {
                items: 1
            }
          }}
          activeIndex={thumbIndex}
          disableButtonsControls
          onSlideChange={syncMainBeforeChange}
          onSlideChanged={syncMainAfterChange}
          items={items}
          mouseTracking={!thumbAnimation}
          touchTracking={!thumbAnimation}
        />
        <div className={classes.btnnext} ><Image onClick={slideNext} src="/assets/images/next.webp" className={classes.nextImage} width={50} height={50} /></div>
      </div>
      <div>
        <div className={classes.heading}>
          Move the item to this category?
        </div>
        <div>
        <Button variant="outlined" size="small" className={classes.buttonYes}>
        Yes
      </Button>
        <Button variant="outlined" size="small" className={classes.buttonNo}>
        No
      </Button>
        <Button variant="outlined" size="small" className={classes.buttonNo}>
        Reject from all
      </Button>
        </div>
      </div>
    </div>
  );
};


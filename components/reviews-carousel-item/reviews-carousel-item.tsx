import { ReactElement } from 'react';
import styles from './reviews-carousel-item.module.scss'

type Props = {
  children: ReactElement;
  style: any;
};

const ReviewsCarousel = ({ children, style }: Props) => {
  return (
    <div className={styles.carouselItem} style={style}>
      {children}
    </div>
  )
}

export default ReviewsCarousel

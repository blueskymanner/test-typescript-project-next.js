import ReviewItem from '../review-item';
import styles from './reviews-list.module.scss';
import { Review } from '../../types/review';

type Props = {
  reviews: Review[];
};

const ReviewsList = ({ reviews }: Props) => {
  return (
    <div className={styles.container}>
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;

import Container from '../container'
import ReviewsList from '../reviews-list';
import ReviewItem from '../review-item';

import { REVIEWS } from '../../data/reviews';

import styles from './reviews-section.module.scss'
import ReviewsCarousel from '../reviews-carousel';
import ReviewsCarouselItem from '../reviews-carousel-item';

const ReviewsSection = () => {
  return (
    <section id='reviewsSection' className={styles.container}>
      <Container>
        <div className={styles.summary}>
          <p>Don&apos;t take our word for it, here&apos;s what other have to say</p>
          <p>Testimonials</p>
          <h2>What people are saying about Okidok</h2>
        </div>
        <ReviewsList reviews={REVIEWS} />
        <ReviewsCarousel>
          {
            REVIEWS.map((review, index) => 
              <ReviewsCarouselItem key={index} style={{width: '100%'}}>
                <ReviewItem review={review} />
              </ReviewsCarouselItem>
            )
          }
        </ReviewsCarousel>
      </Container>
    </section>
  );
};

export default ReviewsSection;

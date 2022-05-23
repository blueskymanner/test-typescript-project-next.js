import { Review } from '../../types/review'
import styles from './review-item.module.scss'

type Props = {
  review: Review;
}

const ReviewItem = ({ review: { image, id, text, author } }: Props) => {
  return (
    <div className={styles.container}>
      <div><p>{text}</p></div>
      <img src={image.src} alt={image.alt} />
      <div>
        <h4>{author}</h4>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img src="/assets/img/icon_ig_testimonials.png" alt='Instagram Link' />
          <img src="/assets/img/icon_ig_white.png" alt='Instagram Link' />
          <h4>{id}</h4>
          <img src="/assets/img/icon_ig_white.png" alt='Instagram Link' style={{visibility: 'hidden'}} />
          <img src="/assets/img/icon_ig_testimonials.png" alt='Instagram Link' style={{visibility: 'hidden'}} />
        </div>
      </div>
    </div>
  )
}

export default ReviewItem

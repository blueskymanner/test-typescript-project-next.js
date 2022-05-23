import { Service } from '../../types/service';
import styles from './service-item.module.scss';

type Props = {
  service: Service;
};

const ServiceItem = ({ service: { image, title, subtitle, author, content } }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.serviceImage} style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url('" + image.src + "')"}}></div>
      <div className={styles.serviceImage2} style={{backgroundImage: "url('" + image.src + "')"}}></div>
      <div className={styles.serviceImageBar}></div>
      <h4 className={styles.serviceImageText}>{image.alt}</h4>
      <div className={styles.serviceBody}>
        <h4 className={styles.serviceText}>{author}</h4>
        <h4 className={styles.serviceText}>{title}</h4>
        <h4 className={styles.serviceText}>{subtitle}</h4>
        <h4 className={styles.serviceText}>{content}</h4>
      </div>
    </div>
  );
};

export default ServiceItem;
